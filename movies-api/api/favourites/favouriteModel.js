import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FavouriteSchema = new Schema({
    username: {type: String, required: true },
    movieId: {type: String, required: true }
});

export default mongoose.model('Favourites', FavouriteSchema);


