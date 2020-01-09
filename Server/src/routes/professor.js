import debug from 'debug';
const debuger = debug("app:Professor");
import express from 'express';
const professor = express.Router();
import Professor, { validateProfessor } from '../models/Professor.module';
import { HashPassword } from '../utils/crypt'
import passportAuth, { IsAdmin } from '../middlewares/auth';
const ProfNotFoundMessage = { message: "Professor not found", ok: 0 };

professor.route('/').get(passportAuth, async (req, res) => {
        const profs = await Professor.find().select("-group.modules");
        res.status(200).json(profs);
});

professor.route('/:id').get(passportAuth, async (req, res) => {

        const prof = await Professor.findOne({ _id: req.params.id });
        if (!prof) return res.status(400).json(ProfNotFoundMessage);
        res.status(200).json(prof);

});

professor.route('/').post(passportAuth, IsAdmin, async (req, res) => {
        // { firstName, lastName, Matricul, email, birthdate, group, password }
        const { error } = validateProfessor(req.body);
        if (error) return res.status(400).json({ ok: 0, error: error.details[0].message });
        debuger("value hello");
        const { password } = req.body;
        req.body.password = await HashPassword(password);
        const prof = new Professor(req.body);
        const result = await prof.save();
        res.status(200).json({ result, ok: 1 });

});

professor.route('/:id').delete(passportAuth, IsAdmin, async (req, res) => {
        const id = req.params.id;
        const result = await Professor.findByIdAndRemove(id);
        if (!result) return res.status(400).json(ProfNotFoundMessage)
        res.status(200).json({ result, ok: 1 });

});

professor.route('/:id').put(passportAuth, async (req, res) => {
        // const { firstName, lastName, Matricul, email, birthdate, group, password } = req.body;
        const id = req.params.id;
        debuger("User ==>", req.user);
        const result = await Professor.findByIdAndUpdate(id, {
                $set: req.body
        }, { new: true, useFindAndModify: false });

        if (!result) return res.status(404).json(ProfNotFoundMessage);

        res.status(200).json({ result, ok: 1 });

});

export default professor;