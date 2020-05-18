const { Schema, model } = require('mongoose');

const ExerciseSchema = new Schema ({
  type: {
    type: String,
    required: true,
  },
  name: {
    type:String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  distance: {
    type: Number,
  },
  day: {
    type: Date,
    default: Date.now
  },
  workout: { type: Schema.Types.ObjectId, ref: 'Workout'}
})

module.exports = model('Exercise', ExerciseSchema);