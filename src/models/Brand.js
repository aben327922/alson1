import mongoose from 'mongoose';

const BrandSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a brand name.'],
            unique: true,
            trim: true,
        },
        logo: {
            type: String,
            trim: true,
        },
        categoryType: {
            type: String,
            required: [true, 'Please provide a category type.'],
            enum: ['Hardware', 'Hardware & Tools', 'Home Appliances'],
        },
    },
    {
        timestamps: true,
    }
);

// Force model refresh to clear stale enum validation in Next.js dev environment
if (process.env.NODE_ENV === 'development') {
    delete mongoose.models.Brand;
}

export default mongoose.models.Brand || mongoose.model('Brand', BrandSchema);
