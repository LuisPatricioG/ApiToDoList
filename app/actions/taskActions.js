const Task = require('../models/Tasks');

const createTask = (data) =>{
  return Task.create(data);
};

const getAllTasks = () => {
  return Task.find ({is_active: true});
};

const getOneTask = async (name) => {
  return Task.findOne({ name })
};

const getAllCompletedTasks = (completed) => {
  return Task.find ({completed: true});
};

const getAllPendingTasks = (completed) => {
  return Task.find ({completed: false});
};

const editMarkComplete = (name) => {
  const query = {name: name};
  return Task.findOneAndUpdate(query, {$set: {completed: true}}).exec()
};

const editTaskName = (taskName, newName) => {
  const query = {name: taskName};
  return Task.findOneAndUpdate(query, {$set: newName}, {new: true})
};

const deactivateOneTask = (name) =>{
  const query = {name: name};
  return Task.findOneAndUpdate(query, {$set: {is_active: false}})
};

const deleteRestoreOneTask = async name => {
  const task = await getOneTask(name)
                .then(thisTask =>  thisTask )
                .catch(error => console.log(error))
  console.log(task.is_active)
  const query = {name: name};
  return Task.findOne(query)
}

const getAllDeactivatedTasks = (is_active) => {
  return Task.find({is_active: false});
}

const deleteOneTask = (name) => {
  const query = {name: name};
  return Task.findOneAndDelete(query);
}

module.exports = {
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
  deleteOneTask,
};