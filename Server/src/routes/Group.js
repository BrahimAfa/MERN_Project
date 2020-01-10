import Group, { ValidateGroup } from '../models/Group.module';
import express from 'express';
const group = express.Router();
import debug from 'debug';
const debuger = debug("app:Group");
group.route('/').get(async (req, res) => {
        const Groupes = await Group.find()
        res.status(200).json(Groupes);
});

group.route('/').post(async (req, res) => {
        console.log(req.body.code);
        //virification here with Joi ...
        const { error } = ValidateGroup(req.body);
        if (error) return res.status(400).json({ ok: 0, error: error.details[0].message });
        const { code, name, modules } = req.body;
        const grp = new Group({ code, name, modules });
        const result = await grp.save();
        res.status(200).json(result);
});

group.route('/:id').delete(async (req, res) => {
        const id = req.params.id;
        if (!id) return res.status(400).json('Sended Values Is Not correct...');
        const result = await Group.remove({ _id: id });
        res.status(200).json(result);

});

group.route('/:id').get(async (req, res) => {

        const id = req.params.id;
        //if (!id) return res.status(400).json('Sended Values Is Not correct...');
        const group = await Group.findOne({ _id: id });
        if (!group) return res.status(404).json("ID Not Found");

        res.status(200).json(group);


});

group.route('/:id').put(async (req, res) => {
        const { code, name } = req.body;
        const id = req.params.id;
        //if (!id) return res.status(400).json('Sended Values Is Not correct...');
        const group = await Group.findByIdAndUpdate(id, {
                $set: {
                        code,
                        name
                }
        }, { new: true });
        if (!group) return res.status(404).json({ message: "ID not found", ok: 0 });

        res.status(200).json(group);

});


export default group;
//module.exports = Employee;