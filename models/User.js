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
    // See note 1 in README.md
        match: [/^.+@(?:[\w-]+\.)+\w+$/, 'Please fill a valid email address']
        },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    ]
  },
  {
    toJSON: {
        virtuals: true,
        getters: true,
    },
  }
);

// virtual property to count number of friends
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});


const User = model('user', userSchema);

module.exports = User;
