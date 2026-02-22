import Link from 'next/link';

export default function AdminLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 text-white flex-shrink-0">
                <div className="p-6">
                    <h2 className="text-2xl font-bold tracking-tight text-blue-400">Alson Admin</h2>
                </div>
                <nav className="mt-6">
                    <Link
                        href="/admin"
                        className="flex items-center px-6 py-3 text-gray-300 hover:bg-slate-800 hover:text-white transition-colors"
                    >
                        Dashboard
                    </Link>
                    <Link
                        href="/admin/products"
                        className="flex items-center px-6 py-3 text-gray-300 hover:bg-slate-800 hover:text-white transition-colors"
                    >
                        Products
                    </Link>
                    <Link
                        href="/admin/products/new"
                        className="flex items-center px-6 py-3 text-gray-300 hover:bg-slate-800 hover:text-white transition-colors"
                    >
                        Add Product
                    </Link>
                    <Link
                        href="/admin/brands"
                        className="flex items-center px-6 py-3 text-gray-300 hover:bg-slate-800 hover:text-white transition-colors"
                    >
                        Brands
                    </Link>
                    <Link
                        href="/admin/categories"
                        className="flex items-center px-6 py-3 text-gray-300 hover:bg-slate-800 hover:text-white transition-colors"
                    >
                        Categories
                    </Link>
                    <div className="mt-10 px-6 border-t border-slate-800 pt-6">
                        <Link
                            href="/"
                            className="text-sm text-gray-400 hover:text-white flex items-center transition-colors"
                        >
                            ← Back to Site
                        </Link>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                {/* Header */}
                <header className="bg-white shadow-sm border-b px-8 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-semibold text-gray-800">Admin Panel</h1>
                    <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-500">Hardware Store Manager</span>
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                            A
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
