import { keys } from "../data/keys.js";

const validateKey = (req, res, next) => {
    const { key } = req.query;

    if(!key) {
        res.status(401).json({ message : 'No key provided' });
    } else if(!keys.some(k => k === key)) {
        res.status(401).json({ message : 'Wrong key provided' });
    }

    next();
};

export default validateKey;