import { Router } from "express";
import products from '../products.js';

const router = Router();

router.get('/', (req, res) => {
    const categoryQuery = req.query?.category?.toLowerCase();
    const limit = Number(req.query.limit) || 3;
    
    console.log(categoryQuery);
    
    if (categoryQuery) {

        const productsFiltered = products.filter((product) =>
            product.categories.some((category) => category.toLowerCase() === categoryQuery)
          );
          
          return res.send({ data: productsFiltered });
    }

    return res.send({ data: products })
});

router.get('/:id', (req, res) => {
    const productId = Number(req.params.id);

    if (!productId) {
        return res.status(400).send({ message: 'Invalid product ID'});
    }

    const product = products.find((product) => product.id === productId);

    if (!product) {
        return res.status(404).send({ message: `Product with ID: ${productId} not found`});
    }

    return res.send({ data: product});
});

router.post('/:id/popularity', (req, res) => {
    const productId = Number(req.params.id);

    if (!productId) {
        return res.status(400).send({ message: 'Invalid product ID'});
    }

    let product = products.find((product) => product.id === productId);

    if (!product) {
        return res.status(404).send({ message: `Product with ID: ${productId} not found`});
    }

    product.popularity++;
    
    return res.send({ 
        message: `Popularity for ${product.name} increased`,
        data: product
    });

});

export default router;