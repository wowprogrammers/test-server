import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'user name is required'],
    },
    mobileNumber: {
        country: {
            type: String,
            trim: true,
        },
        countryCode: {
            type: String,
            trim: true,
        },
        mobileNumber: {
            type: String,
            trim: true,
        },
    },
    source: {
        type: String,
        trim: true,
    },
    tags: {
        type: [String],
        trim: true,
    },
    attributes: {
        website: {
            type: String,
            trim: true,
        },
        designation: {
            type: String,
            trim: true,
        },
        company: {
            type: String,
            trim: true,
        },
    },
}, {
    timestamps: true,
});
const User = mongoose.model('User', userSchema);
export default User;
