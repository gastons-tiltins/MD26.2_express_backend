import mongoose from 'mongoose';

const jokesSchema = new mongoose.Schema({
  joke: {
    type: String,
    required: true,
    // minLength: 2,
    // maxLength: 20,
  },
});

export default mongoose.model('Jokes', jokesSchema);
