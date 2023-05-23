const { Schema, model } = require('mongoose');

// dateFormat function that will format the timestamp on query
const dateFormat = require('../utils/dateFormat.js');

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            // Must be between 1 and 280 characters
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            // Use a getter method to format the timestamp on query
            get: (createdAtVal) => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        },
        reactions: []
    },
    {
        toJSON: {
            getters: true
        },
        virtuals: true
    }
);

// Virtual to get total count of reactions on retrieval
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;