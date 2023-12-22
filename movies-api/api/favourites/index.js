import express from 'express';
import Favourite from './favouriteModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line

// Get all favourites
router.get('/', async (req, res) => {
    const favourites = await Favourite.find();
    res.status(200).json(favourites);
});

// Add a favourite
router.post('/', asyncHandler(async (req, res) => {
    const favourite = await Favourite(req.body).save();
    res.status(201).json(favourite);
}));

// delete favourite
router.delete('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;
    const result = await Favourite.deleteOne({
        _id: req.params.id,
    });
    if (result.deletedCount) {
        res.status(204).json();
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find favourite' });
    }
});

export default router;