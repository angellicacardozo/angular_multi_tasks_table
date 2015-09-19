var mongoose= require('mongoose');
mongoose.connect('localhost', 'gctasks');

var taskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    owner: { type: String, required: false },
    timestarted: { type: Date, required: false },
    snapshot: {
        state: { type: String, required: false },
        metrics: {
            completion: { type: Number, required: false },
            state: { type: String, required: false },
            test: {
                total: { type: Number, required: false },
                perspective: { type: String, required: false }
            },
            maintainability: {
                total: { type: Number, required: false },
                perspective: { type: String, required: false }
            },
            security: {
                total: { type: Number, required: false },
                perspective: { type: String, required: false }
            },
            workmanship: {
                total: { type: Number, required: false },
                perspective: { type: String, required: false }
            }
        },
        build: {
            state: { type: String, required: false },
            rundate: { type: Date, required: false }
        },
        unittest: {
            state: { type: String, required: false },
            covered: { type: Number, required: false },
            total: { type: Number, required: false },
            completion: { type: Number, required: false }
        },
        functionaltest: {
            state: { type: String, required: false },
            covered: { type: Number, required: false },
            total: { type: Number, required: false },
            completion: { type: Number, required: false }
        }
    }
});

var Task = mongoose.model('task', taskSchema);

module.exports = Task;