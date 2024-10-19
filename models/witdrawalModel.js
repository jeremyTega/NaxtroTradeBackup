const mongoose = require('mongoose');

const withdrawSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    amount: { type: String, required: true },
    withdrawId: { type: String, required: true },
    walletAddress: { type: String, required: true }, // Added walletAddress
    walletName: { type: String, required: true }, // Added walletName
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('withdraw', withdrawSchema);