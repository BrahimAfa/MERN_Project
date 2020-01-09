import express from 'express';
const student = express.Router();
import debug from 'debug';
const debuger = debug("app:Student");
import Student, { validateStudent } from '../models/Student.module';
import { HashPassword } from '../utils/crypt'
import passportAuth, { IsAdmin } from '../middlewares/auth';
const StudentNotFoundMessage = { message: "Student not found", ok: 0 };

student.route('/').get(passportAuth, async (req, res) => {
    const students = await Student.find().select("-group.modules");
    res.status(200).json(students);
});

student.route('/:id').get(passportAuth, async (req, res) => {

    const student = await Student.findOne({ _id: req.params.id });
    if (!prof) return res.status(400).json(StudentNotFoundMessage);
    res.status(200).json(student);

});

student.route('/').post(passportAuth,IsAdmin,async (req, res) => {
    // { firstName, lastName, Matricul, email, birthdate, group, password }
    debuger("hello from post ^^");
    const { error } = validateStudent(req.body);
    if (error) return res.status(400).json({ ok: 0, error: error.details[0].message });
    // debuger("value hello");
    const { password } = req.body;
    req.body.password = await HashPassword(password);
    const student = new Student(req.body);
    const result = await student.save();
    res.status(200).json({ result, ok: 1 });

});

student.route('/:id').delete(passportAuth, IsAdmin, async (req, res) => {
    const id = req.params.id;
    const result = await Student.findByIdAndRemove(id);
    if (!result) return res.status(400).json(StudentNotFoundMessage)
    res.status(200).json({ result, ok: 1 });

});

student.route('/:id').put(passportAuth, IsAdmin, async (req, res) => {
    // const { firstName, lastName, Matricul, email, birthdate, group, password } = req.body;
    const id = req.params.id;
    debuger("User ==>", req.user);
    const result = await Student.findByIdAndUpdate(id, {
        $set: req.body
    }, { new: true, useFindAndModify: false });

    if (!result) return res.status(404).json(StudentNotFoundMessage);

    res.status(200).json({ result, ok: 1 });

});

export default student;
//module.exports = Employee;