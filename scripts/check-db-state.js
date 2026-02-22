import mongoose from 'mongoose';

async function check() {
    const MONGODB_URI = 'mongodb://127.0.0.1:27017/alsons_hardware';
    await mongoose.connect(MONGODB_URI);

    const ProductSchema = new mongoose.Schema({}, { strict: false });
    const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema, 'products');

    console.log('--- Database Products (Latest 10) ---');
    const products = await Product.find({}).sort({ updatedAt: -1 }).limit(10).lean();

    products.forEach(p => {
        console.log(`ID: ${p._id}, Name: ${p.name}, Slug: ${p.slug}, Category: ${p.category}`);
    });

    await mongoose.connection.close();
}

check().catch(console.error);
