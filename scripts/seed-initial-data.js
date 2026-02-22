import dbConnect from '../src/lib/mongodb.js';
import Brand from '../src/models/Brand.js';
import Subcategory from '../src/models/Subcategory.js';

async function seed() {
    try {
        await dbConnect();

        // Seed Ingco Brand
        const ingco = await Brand.findOneAndUpdate(
            { name: 'Ingco' },
            {
                name: 'Ingco',
                categoryType: 'Hardware',
                logo: '/images/logos/ingcologo.webp' // Existing logo from products.ts
            },
            { upsert: true, new: true }
        );
        console.log('Brand Seeded:', ingco.name);

        // Seed Hand Tools Subcategory
        const handTools = await Subcategory.findOneAndUpdate(
            { name: 'Hand Tools', mainCategory: 'Hardware' },
            {
                name: 'Hand Tools',
                mainCategory: 'Hardware'
            },
            { upsert: true, new: true }
        );
        console.log('Subcategory Seeded:', handTools.name);

        process.exit(0);
    } catch (error) {
        console.error('Seed Error:', error);
        process.exit(1);
    }
}

seed();
