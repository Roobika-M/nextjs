export default function Navbar() {
  return (
    <nav className="w-full px-8 py-4 flex justify-between items-center shadow-sm">
      <h1 className="text-2xl font-bold text-blue-600">
        Accredian
      </h1>

      <div className="flex gap-6">
        <a href="#" className="hover:text-blue-600">
          Home
        </a>
        <a href="#" className="hover:text-blue-600">
          Programs
        </a>
        <a href="#" className="hover:text-blue-600">
          About
        </a>
        <a href="#" className="hover:text-blue-600">
          Contact
        </a>
      </div>

      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
        Get Started
      </button>
    </nav>
  );
}