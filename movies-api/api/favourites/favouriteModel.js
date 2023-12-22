import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FavouriteSchema = new Schema({
    username: {type: String, required: true},
    movieId: {type: String, required: true }
});

FavouriteSchema.statics.findFavouritesByUserName = function (username) {
    return this.find({ username: username });
  };

export default mongoose.model('Favourites', FavouriteSchema);


