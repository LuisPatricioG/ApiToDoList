const mongoose = require ('mongoose');

const  Schema = mongoose.Schema;

const taskSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },
    completed: { 
        type: Boolean,
        default: false 
    },
    is_active: {
        type: Boolean,
        default: true
    },
}, {"collation": "tasks", "timestamps": true});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task