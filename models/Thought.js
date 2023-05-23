const { Schema, model, default: Mongoose} = require('mongoose');

// Reactions schema
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            // See note 2 in README.md
            default: () => new Mongoose.Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            // Must be between 1 and 280 characters
            minlength: 1,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            // Use a getter method to format the timestamp on query
            get: (createdAtVal) => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);



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
        reactions: [reactionSchema]
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