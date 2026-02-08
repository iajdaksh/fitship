"use client";

export default function Footer() {
  return (
    <footer className="hidden md:block bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Fitship.in
        </p>

        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
