import ProductForm from '../ProductForm';

export default function NewProductPage() {
    return (
        <div>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Add New Product</h2>
                <p className="text-gray-500">Fill in the details to add a new hardware tool to the catalog.</p>
            </div>

            <ProductForm type="create" />
        </div>
    );
}
