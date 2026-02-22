import mongoose from 'mongoose';

const HiddenItemSchema = new mongoose.Schema(
    {
        itemId: {
            type: String,
            required: true,
            unique: true,
        },
        type: {
            type: String,
            required: true,
            enum: ['brand', 'subcategory'],
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.HiddenItem || mongoose.model('HiddenItem', HiddenItemSchema);
