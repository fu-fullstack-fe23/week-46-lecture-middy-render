import { Router } from 'express';
import { keys } from '../data/keys.js';
import { movies } from '../data/movies.js';
import validateKey from '../middlewares/validateKey.js';

const router = Router();

router.use(validateKey);

router.get('/', (req, res) => {
    const { key } = req.query;

    res.status(200).json({ movies : movies });
    
});

export default router;