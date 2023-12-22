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
router.delete('/deleteFav', async (req, res) => {
    const { movieId, username } = req.query;

    const result = await Favourite.deleteMany({
        movieId: movieId,
        username: username,
    });
    if (result.deletedCount) {
        res.status(204).json();
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find favourite' });
    }
});

// Get favourites by username
router.get('/myFavs', asyncHandler(async (req, res) => {
    const { username } = req.query;
    //const favourites = await Favourite.findFavouritesByUserName(username).select('movieId');
    const favourites = await Favourite.distinct('movieId', { username: username })
    res.status(200).json(favourites);
}));
export default router;