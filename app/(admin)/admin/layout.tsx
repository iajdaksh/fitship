export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">

      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-800 p-6">
        <h1 className="text-xl font-bold mb-8">FitShip Admin</h1>

        <nav className="space-y-4 text-sm">
          <a href="/admin" className="block text-zinc-300 hover:text-white">
            Dashboard
          </a>
          <a href="/admin/blogs" className="block text-zinc-300 hover:text-white">
            Blogs
          </a>
          <a href="/admin/workouts" className="block text-zinc-300 hover:text-white">
            Workouts
          </a>
          <a href="/admin/products" className="block text-zinc-300 hover:text-white">
            Products
          </a>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  )
}
