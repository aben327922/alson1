import mongoose from 'mongoose';

const SubcategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a subcategory name.'],
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        mainCategory: {
            type: String,
            required: [true, 'Please provide a main category.'],
            enum: ['Hardware', 'Hardware & Tools', 'Home Appliances'],
        },
        image: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

// Ensure name is unique within the same main category
SubcategorySchema.index({ name: 1, mainCategory: 1 }, { unique: true });

// Force model refresh to clear stale enum validation in Next.js dev environment
if (process.env.NODE_ENV === 'development') {
    delete mongoose.models.Subcategory;
}

export default mongoose.models.Subcategory || mongoose.model('Subcategory', SubcategorySchema);
