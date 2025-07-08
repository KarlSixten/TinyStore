import { Router } from "express";
import products from '../products.js';

const router = Router();

products.forEach(product => {
    console.log(product.name);
});

router.get('/popular', async (req, res) => {
    const limit = parseInt(req.query.limit) || 3;

    const trendingProducts = products
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, limit);

    res.send({ data: trendingProducts });
})

export default router;