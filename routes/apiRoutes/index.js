const router = require('express').Router();
const apiRange = require('./apiRange')
const { addExercise, createWorkout, getLastWorkout } = require('../../controllers/workoutcontroller');

router.use('/workouts', apiRange);

router.route('api/range')
  .get(getLastWorkout);

  router.route('/workouts/:id')
  .put(addExercise)

  router.route('/workouts')
  .post(createWorkout)
  .get(getLastWorkout)

module.exports = router;