import express from 'express';
const user = express.Router();
import debug from 'debug';
const debuger = debug("app:User");
import User, { validateUser } from '../models/User.module';
import { HashPassword, ComparePassword } from '../utils/crypt'
import passportAuth, { IsAdmin } from '../middlewares/auth';
const UserNotFoundMessage = { message: "User not found", ok: 0 };

// user.route('/').get(passportAuth, async (req, res) => {
//     const { role } = req.body;
//     debuger("role : ", req.body)
//     debuger("role 2: ", req.params)
//     const users = await User.find().select("-group.modules -uploads");
//     //this is bad filtring after gittent the data in database (Imagine 10,000 users§!!!!????)
//     if (role) return res.status(200).json(users.filter(r => r.role === role));
//     res.status(200).json(users);
// });

user.route('/').post(passportAuth, async (req, res) => {
    const { role } = req.body;
    const users = await User.find().select("-group.modules -uploads");
    //this is bad filtring after gittent the data in database (Imagine 10,000 users§!!!!????)
    if (role) return res.status(200).json(users.filter(r => r.role === role));
    res.status(200).json(users);
});

user.route('/:id').get(passportAuth, async (req, res) => {

    const user = await User.findOne({ _id: req.params.id });
    if (!user) return res.status(400).json(UserNotFoundMessage);
    res.status(200).json(user);

});

user.route('/add').post(passportAuth, async (req, res) => {
    // { firstName, lastName, Matricul, email, birthdate, group, password }
    debuger("hello from post ^^");

    const { error } = validateUser(req.body);
    console.log("validation", error);

    if (error) return res.status(400).json({ ok: 0, message: error.details[0].message });
    // debuger("value hello");
    const { password } = req.body;
    req.body.password = await HashPassword(password);
    const user = new User(req.body);
    const result = await user.save();
    res.status(200).json({ result, ok: 1 });

});

user.route('/:id').delete(passportAuth, IsAdmin, async (req, res) => {
    const id = req.params.id;
    const result = await User.findByIdAndRemove(id, { useFindAndModify: false });
    if (!result) return res.status(400).json(UserNotFoundMessage)
    res.status(200).json({ result, ok: 1 });

});

user.route('/:id').put(passportAuth, IsAdmin, async (req, res) => {
    // const { firstName, lastName, Matricul, email, birthdate, group, password } = req.body;
    const id = req.params.id;
    debuger("User ==>", req.user);
    const { password } = req.body;
    const oldUser = await User.findOne({ _id: id });
    const isMatch = await ComparePassword(password, oldUser.password);
    if (isMatch) {
        const { password, ...body } = req.body;
        req.body = body;
        const result = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true, useFindAndModify: false });
        if (!result) return res.status(404).json(UserNotFoundMessage);
        return res.status(200).json({ result, ok: 1 });
    }
    req.body.password = await HashPassword(password);
    const result = await User.findByIdAndUpdate(id, {
        $set: req.body
    }, { new: true, useFindAndModify: false });
    if (!result) return res.status(404).json(UserNotFoundMessage);
    res.status(200).json({ result, ok: 1 });
});

export default user;
//module.exports = Employee;