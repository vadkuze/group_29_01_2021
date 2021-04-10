import {
    Router
} from 'express';
import db from './../database';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

router.get('/', (req, res) => {
    // get data from db 
    const products = db.get('products');

    // send data
    return res.status(200).json({
        status: 'success',
        data: products
    });

}).get('/:productId', (req, res) => {
    const {
        productId
    } = req.params;
    console.log(productId);

    let product = db.get('products').find({id: +productId}).value();
    if (!product) {
        return res.status(404).json({status: 'failed', error: 'Not Found', message: `Product with ${productId} ID doesn't exist in DB`});
    }

    return res.status(200).json({
        status: 'success',
        data: product
    }); 
})
.post('/', (req, res) => {
    let product = req.body;

    let id = uuidv4();

    db.get('products')
       .push({...product, id})
       .write()

    console.log(req.body, id);

    res.status(200).json({ status: 'success'})
})

export default router;