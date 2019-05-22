const {
  createTask,
  getAllTasks,
  getOneTask,
  getAllCompletedTasks,
  getAllPendingTasks,
  editMarkComplete,
  editTaskName,
  deactivateOneTask,
  deleteRestoreOneTask,
  getAllDeactivatedTasks,
  deleteOneTask
} = require('../actions');

const newTask = (req, res) => {
  createTask(req.body)
      .then ((task) => {
        return res.status(201).send({message: 'Task has been created'});
      })
      .catch ((error) => {
        return res.status(400).send(error);
      })
};

const getTasks = async (req, res) => {
  getAllTasks()
      .then((tasks) => {
        return res.status(200).send(tasks);
      })
      .catch ((error) => {
        return res.status(400).send(error);
      })
};

const getTask = async (req, res) => {
  getOneTask(req.params.name)
      .then((task) =>{
        task
          ? res.status(200).json(task)
          : res.status(404).json({message: "Task does not exist"})
      })
      .catch ((error) => {
        return res.status(400).json(error);
      })
};

const getCompletedTasks = async (req, res) => {
  getAllCompletedTasks()
      .then((tasks) => {
        return res.status(200).send(tasks);
      })
      .catch ((error) => {
        return res.status(400).send(error);
      })
};

const getPendingTasks = async (req, res) => {
  getAllPendingTasks()
      .then((tasks) => {
        return res.status(200).send(tasks);
      })
      .catch ((error) => {
        return res.status(400).send(error);
      })
};

const makrComplete = async (req, res) => {
  editMarkComplete(req.params.name)
      .then((task) => {
        task
        ? res.status(200).json(task)
        : res.status(404).json({message: 'Task does not exist'})
      })
      .catch ((error) => {
        return res.status(400).send(error)
      })
};

const editTask = async (req, res) => {
  editTaskName(req.params.name, req.body)
      .then ((task) => {
        task
        ? res.status(200).json(task)
        : res.status(404).json({message: 'Task does not exist'})
      })
      .catch ((error) => {
        return res.status(400).send(error)
      })
};

const deactivateTask = async (req, res) => {
  deactivateOneTask(req.params.name)
      .then ((task) => {
        task
          ? res.status(200).json(task)
          : res.status(404).json({message: 'Task does not exist'})
      })
      .catch ((error) => {
        return res.error(400).send(error)
      })
};

const deleteRestoreTask = async (req, res) => {
  deleteRestoreOneTask(req.params.name)
      .then ((task) => {
        task
          ? res.status(200).json(task)
          : res.status(404).json({message: 'Task does not exist'})
      })
      .catch ((error) => {
        return res.error(400).send(error)
      })
};

const getDeactivatedTasks = async (req, res) => {
  getAllDeactivatedTasks()
  .then((tasks) => {
    return res.status(200).send(tasks);
  })
  .catch ((error) => {
    return res.status(400).send(error);
  })
};

const deletTask = (req, res) => {
  deleteOneTask(req.params.name)
      .then((task) =>{
        task
          ? res.status(200).json(task)
          : res.status(404).json({message: 'Task does not exist'})
       })
       .catch ((error) => {
         return res.status(400).send(error)
       })
};


module.exports = {
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
}