const router = require('express').Router();
const { getLastWorkout} = require('./../../../controllers/workoutcontroller');

router.get('/range', getLastWorkout);

module.exports = router;