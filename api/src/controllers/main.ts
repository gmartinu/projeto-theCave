import express from 'express';
import { getModel } from '../utils/getModel';

const router = express.Router();

router.get('/', async (req, res) => {
    const { model, includes } = getModel(req)
    const result = await model.findMany({ include: includes ? includes : {}});
    return res.json(result).status(200)
})

router.post('/', async (req, res) => {
    try {
        const { model} = getModel(req)
        const result = await model.create({ data: req.body })   
        return res.json(result).status(200)
    } catch (e) {
        throw e

        const error = (e);

        return res.json(error).status(400)
    }
})

export default router;