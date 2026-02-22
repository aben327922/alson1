import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
    {
        // Basic Info
        name: {
            type: String,
            required: [true, 'Please provide a name for this product.'],
            trim: true,
        },
        slug: {
            type: String,
            required: [true, 'Please provide a slug for this product.'],
            unique: true,
            trim: true,
            lowercase: true,
        },
        description: {
            type: String,
            trim: true,
        },
        overview: {
            type: String,
            trim: true,
        },

        // Pricing
        price: {
            type: Number,
            required: [true, 'Please provide a price.'],
        },
        currency: {
            type: String,
            default: 'PKR',
        },

        // Classification
        category: {
            type: String,
            required: [true, 'Please provide a category.'],
            trim: true,
        },
        subcategory: {
            type: String,
            trim: true,
        },
        brand: {
            type: String,
            trim: true,
        },

        // Product Details
        modelNumber: {
            type: String,
            trim: true,
        },
        sku: {
            type: String,
            trim: true,
        },
        stock: {
            type: Number,
            default: 0,
        },
        availability: {
            type: String,
            enum: ['In Stock', 'Out of Stock', 'Pre-order', 'Contact for Lead Time'],
            default: 'In Stock',
        },

        // Media
        images: {
            type: [String],
            default: [],
        },
        thumbnail: {
            type: String,
            trim: true,
        },

        // Specifications
        specifications: {
            type: Map,
            of: String,
            default: {},
        },

        // SEO
        metaTitle: {
            type: String,
            trim: true,
        },
        metaDescription: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

// Add text index for search support
ProductSchema.index({ name: 'text', description: 'text', category: 'text', brand: 'text' });

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
