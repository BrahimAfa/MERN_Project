import express from 'express';
import Professor from '../models/Professor.module'
import Student from '../models/Student.module'
const login = express.Router();
import debug from 'debug';
const debuger = debug("app:Login");
import { ComparePassword, generateJWTtoken } from '../utils/crypt';
import { ValidateLogin } from '../validations/login.validation';

login.route('/professor').post(async (req, res) => {
    //validate body data 
    const { error } = ValidateLogin(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message, ok: 0 });
    const { email, password } = req.body;
    //get user if exist
    const result = await Professor.findOne({ email }).select("email firstName lastName password");
    console.log(result);
    if (!result) return res.status(400).json({ message: "Email or password incorrect", ok: 0 });
    const isMatch = await ComparePassword(password, result.password);
    if (!isMatch) return res.status(400).json({ message: "Email or password incorrect", ok: 0 });

    const payload = {
        role: "professor",
        id: result._id,
    };

    const token = generateJWTtoken(payload);
    res.status(200).header("Authorization", token).json({ token, ok: 1 });
});

login.route('/student').post(async (req, res) => {
    //validate body data 
    debuger("Hello from Student Login....");
    const { error } = ValidateLogin(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message, ok: 0 });
    const { email, password } = req.body;
    //get user if exist
    const result = await Student.findOne({ email }).select("email firstName lastName password");
    console.log(result);
    if (!result) return res.status(400).json({ message: "Email or password incorrect", ok: 0 });
    const isMatch = await ComparePassword(password, result.password);
    if (!isMatch) return res.status(400).json({ message: "Email or password incorrect", ok: 0 });

    const payload = {
        role: "student",
        id: result._id,
    };

    const token = generateJWTtoken(payload);
    res.status(200).header("Authorization", token).json({ token, ok: 1 });
});

export default login;


