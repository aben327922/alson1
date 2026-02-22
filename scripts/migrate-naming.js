import dbConnect from '../src/lib/mongodb.js';
import Brand from '../src/models/Brand.js';
import Subcategory from '../src/models/Subcategory.js';

async function migrate() {
    try {
        await dbConnect();

        // Update Brands
        const brandResult = await Brand.updateMany(
            { categoryType: 'Hardware' },
            { $set: { categoryType: 'Hardware & Tools' } }
        );
        console.log(`Updated ${brandResult.modifiedCount} Brands from Hardware to Hardware & Tools`);

        // Update Subcategories
        const subResult = await Subcategory.updateMany(
            { mainCategory: 'Hardware' },
            { $set: { mainCategory: 'Hardware & Tools' } }
        );
        console.log(`Updated ${subResult.modifiedCount} Subcategories from Hardware to Hardware & Tools`);

        // Ensure "Hand Tools" exists under "Hardware & Tools"
        const handTools = await Subcategory.findOneAndUpdate(
            { name: 'Hand Tools', mainCategory: 'Hardware & Tools' },
            { name: 'Hand Tools', mainCategory: 'Hardware & Tools' },
            { upsert: true, new: true }
        );
        console.log('Hand Tools verified under Hardware & Tools');

        process.exit(0);
    } catch (error) {
        console.error('Migration Error:', error);
        process.exit(1);
    }
}

migrate();
