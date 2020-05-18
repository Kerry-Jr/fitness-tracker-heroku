const { Exercise, Workout } = require('./../models');

module.exports = {
  getLastWorkout: async (req, res) => {
    try {
      const getAllWorkouts = await Workout.find({}).populate('exercises');
      return res.status(200).json(getAllWorkouts);
    } catch (e) {
      return res.status(418).json(e);
    }
  },
  addExercise: async (req, res) => {
    const { type, name, duration, weight, reps, sets, distance } = req.body;
    try {
      let addExercise = await new Exercise({
        type,
        name,
        duration,
        weight,
        reps,
        sets,
        distance,
        workout: req.body.id
      }).save();
        const newExercise = await Workout.findByIdAndUpdate(
          req.params.id,
          { $push: { exercises: addExercise } },
          { new: true }
        );
        const addingDuration = await Workout.findByIdAndUpdate(req.params.id, { $inc: { totalDuration: addExercise.duration } })

        return res.status(200).json(newExercise);
        
      } catch (e) {
        return res.status(418).json(e);
      }
  },
    createWorkout: async (req, res) => {
    try {
      const newWorkout = await new Workout({}).save();
      return res.status(200).json(newWorkout);
    } catch (e) {
      return res.status(403).json(e);
    }
  },
};