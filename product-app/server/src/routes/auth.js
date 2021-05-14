import {
    Router
} from 'express';
import db from './../database';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

router.post('/', (req, res) => {
    let creds = req.body;

    console.log(creds);

    let foundUser = db.get('users').find(user => user.email === creds.login && user.password === creds.password).value()
    console.log(foundUser);
    if(!foundUser) {
        return res.status(404).json({status: 'failed', error: 'Not Found'});
    }
    res.status(200).json({ status: 'success', data: foundUser});

});

export default router;
