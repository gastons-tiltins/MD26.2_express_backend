import mongoose from 'mongoose';

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // minLength: 2,
    // maxLength: 20,
  },
  category: {
    type: String,
    required: true,
    // minLength: 2,
    // maxLength: 20,
  },
});

export default mongoose.model('Animals', animalSchema);
