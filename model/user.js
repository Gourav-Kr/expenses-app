import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    balance: { type: Number, default: 0 },
    increment: { type: Number, default: 100 },
    saturdayAllowance: { type: Number, default: 250 },
    lastUpdated: { type: Date, default: Date.now }

});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export { User };
