import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import {
    getUpcomingMovies,
    getGenres,
    getMovies,
    getTrending,
    getTopRated,
    getNowPlaying,
    getMovie,
    getMovieCredits,
    getMovieRecommendations,
    getMovieImages,
    getMovieReviews,
    getActor,
    getActorCredits
  } from '../tmdb-api';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    // Parallel execution of counting movies and getting movies using movieModel
    const [total_results, results] = await Promise.all([
        movieModel.estimatedDocumentCount(),
        movieModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

    //construct return Object and insert into response object
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}));

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const { page } = req.query;
    const upcomingMovies = await getUpcomingMovies(page);
    res.status(200).json(upcomingMovies);
}));

router.get('/tmdb/genres', asyncHandler(async (req, res) => {
    const genres = await getGenres();
    res.status(200).json(genres);
}));

router.get('/tmdb/movies', asyncHandler(async (req, res) => {
    const { page } = req.query;
    const movies = await getMovies(page);
    res.status(200).json(movies);
}));

router.get('/tmdb/top_rated', asyncHandler(async (req, res) => {
    const { page } = req.query;
    const topRated = await getTopRated(page);
    res.status(200).json(topRated);
}));

router.get('/tmdb/trending', asyncHandler(async (req, res) => {
    const { page } = req.query;
    const trendingMovies = await getTrending(page);
    res.status(200).json(trendingMovies);
}));

router.get('/tmdb/now_playing', asyncHandler(async (req, res) => {
    const { page } = req.query;
    const nowPlayingMovies = await getNowPlaying(page);
    res.status(200).json(nowPlayingMovies);
}));

router.get('/tmdb/movie', asyncHandler(async (req, res) => {
    const {id} = req.query;
    const movie = await getMovie(id);
    res.status(200).json(movie);
}));

router.get('/tmdb/movie/credits', asyncHandler(async (req, res) => {
    const {id} = req.query;
    const movieCredits = await getMovieCredits(id);
    res.status(200).json(movieCredits);
}));

router.get('/tmdb/movie/recommendations', asyncHandler(async (req, res) => {
    const {id} = req.query;
    const movieRecommendations= await getMovieRecommendations(id);
    res.status(200).json(movieRecommendations);
}));

router.get('/tmdb/movie/reviews', asyncHandler(async (req, res) => {
    const {id} = req.query;
    const movieReviews= await getMovieReviews(id);
    res.status(200).json(movieReviews);
}));

router.get('/tmdb/movie/images', asyncHandler(async (req, res) => {
    const {id} = req.query;
    const movieImages= await getMovieImages(id);
    res.status(200).json(movieImages);
}));

router.get('/tmdb/actor', asyncHandler(async (req, res) => {
    const {id} = req.query;
    const actor = await getActor(id);
    res.status(200).json(actor);
}));

router.get('/tmdb/actor/credits', asyncHandler(async (req, res) => {
    const {id} = req.query;
    const actorCredits = await getActorCredits(id);
    res.status(200).json(actorCredits);
}));

export default router;