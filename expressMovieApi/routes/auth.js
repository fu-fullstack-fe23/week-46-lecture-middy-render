import { Router } from 'express';
import userSchema from '../models/userSchema.js';
import { keys } from '../data/keys.js';

const router = Router();

router.get('/keys', (req, res) => {
    console.log('test');
    
    res.json({ key : keys[Math.floor(Math.random() * keys.length)] });
});

router.post('/login', (req, res) => {
    // Database imitation
    const usernamedb = 'jesper';
    const passworddb = 'nyberg';

    const { error } = userSchema.validate(req.body);

    if(error) {
        return res.status(400).json({ message : error.details[0].message });
    }

    const { username, password } = req.body;
    if(usernamedb !== username || passworddb !== password) {
        return res.status(400).json({ message : 'User not registered' });
    }

    res.json({ message : 'Login successful '});
});

export default router;