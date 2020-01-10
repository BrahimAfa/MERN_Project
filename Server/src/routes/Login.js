import express from 'express';
import User from '../models/User.module'
const login = express.Router();
import debug from 'debug';
const debuger = debug("app:Login");
import { ComparePassword, generateJWTtoken } from '../utils/crypt';
import { ValidateLogin } from '../validations/login.validation';

login.route('/').post(async (req, res) => {
    //validate body data 
    debuger("Hello from User Login....");
    const { error } = ValidateLogin(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message, ok: 0 });
    const { email, password } = req.body;
    //get user if exist
    const result = await User.findOne({ email }).select("role email firstName lastName password");
    console.log(result);
    if (!result) return res.status(400).json({ message: "Email or password incorrect", ok: 0 });
    const isMatch = await ComparePassword(password, result.password);
    if (!isMatch) return res.status(400).json({ message: "Email or password incorrect", ok: 0 });

    const payload = {
        id: result._id,
    };

    const token = generateJWTtoken(payload);
    //res.status(200).header("Authorization", token).json({ token, ok: 1 });
    res.status(200).json({ token, ok: 1 });
});

export default login;


