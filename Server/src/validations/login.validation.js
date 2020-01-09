import Joi from '@hapi/joi';
import { strongPassword } from '../utils/Constants';

export const ValidateLogin = (data) => {
    const schema = Joi.object().keys({
        email: Joi.string().min(5).email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).required(),
    });
    return schema.validate(data);
}