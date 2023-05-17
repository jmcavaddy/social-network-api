const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    // I added this to standardize the email format; it comes from note 1 in README.md
        lowercase: true,
    // See note 1 in README.md
        match: [/^.+@(?:[\w-]+\.)+\w+$/, 'Please fill a valid email address']
        },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
  },
  {
    toJSON: {
        // TODO: come back and make sense of getters and setters; when do I need to include this?
        // setters: true,
        // getters: true,
        virtuals: true
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
