//Dependencies
const express = require('express');

//Controllers
const {
  newTask,
  getTasks,
  getTask,
  getCompletedTasks,
  getPendingTasks,
  makrComplete,
  editTask,
  deactivateTask,
  deleteRestoreTask,  
  getDeactivatedTasks,
  deletTask
} = require ('../controllers/Task');

//Init Router
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({message: 'Server on C'});
});

//
router.post('/task', newTask);
router.get('/tasks', getTasks);
router.get('/task/:name', getTask);
router.get('/tasks/completed', getCompletedTasks);
router.get('/tasks/pending', getPendingTasks);
router.patch('/task/markcomplete/:name', makrComplete);
router.patch('/task/edit/:name', editTask);
router.patch('/task/sendtotrash/:name', deactivateTask);
router.patch('/task/restore/:name', deleteRestoreTask);
router.get('/tasks/trash', getDeactivatedTasks);
router.delete('/task/delete/:name', deletTask);

module.exports = router