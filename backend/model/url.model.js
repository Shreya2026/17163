import mongoose from 'mongoose'

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
        unique: true
    },
    shortUrl: { 
        type: String,
        required: true,
    },
    clickedHistory: [{
        timestamp: { type: Date, default: Date.now }
    }]
}, { timestamps: true });

const Url = mongoose.model('Url', urlSchema);

export default Url;