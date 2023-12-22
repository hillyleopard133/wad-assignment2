import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FavouriteSchema = new Schema({
    movieId: {type: String, required: true },
    userId: {type: String, required: true }
});

export default mongoose.model('Favourites', FavouriteSchema);


