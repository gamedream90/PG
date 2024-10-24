// const mongoose = require('mongoose');

// const confessionSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     body: { type: String, required: true },
//     tags: { type: [String], required: true },
//     reactions: {
//         love: { type: Number, default: 0 },
//         sad: { type: Number, default: 0 },
//         laugh: { type: Number, default: 0 },
//         userReactions: { type: [String], default: [] } // Store user IDs or identifiers for who reacted
//     }
// });

// module.exports = mongoose.model('Confession', confessionSchema);


const mongoose = require('mongoose');

const confessionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    tags: [String],
    reactions: {
        love: { type: Number, default: 0 },
        sad: { type: Number, default: 0 },
        laugh: { type: Number, default: 0 },
        userReactions: [String] // Store user reactions as strings
    }
});

const Confession = mongoose.model('Confession', confessionSchema);

