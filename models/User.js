const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        // set custom id to avoid confusion with parent comment _id
        username: {
            type: String,
            unique: true,
            required: "Username is Required",
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: "Email is Required",
            // must match a valid email address (look into Mongoose's matching validation)
            match: [/.+@.+\..+/]
        },
        // add thoughts to user
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        // add friends to user
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);


UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;
