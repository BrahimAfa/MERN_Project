import passport from "passport";

const passportAuth = passport.authenticate('jwt', { session: false })

export function IsAdmin(req, res, next) {
    if (req.user.role !== 'Admin') return res.status(403).json({ ok: 0, message: 'Accsess denied only admin are allowed' });
    next();
}

export default passportAuth;