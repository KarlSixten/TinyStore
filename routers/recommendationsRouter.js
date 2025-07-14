import { Router } from "express";
import products from '../products.js';

const router = Router();

router.get('/popular', async (req, res) => {
    const limit = Number(req.query.limit) || 3;

    const trendingProducts = [...products]
        .sort((a, b) => b.popularity - a.popularity)
        .slice(0, limit);

    return res.send({ data: trendingProducts });
})

router.get('/random', (req, res) => {

    const randomProduct = products[Math.floor(Math.random() * products.length)];

    return res.send({ data: randomProduct })
});

export default router;