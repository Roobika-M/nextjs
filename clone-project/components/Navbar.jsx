export default function Navbar() {
  return (
    <nav className="w-full px-10 py-5 bg-white shadow-sm flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-3xl font-bold text-blue-600">
        accredian
      </h1>

      {/* Nav Links */}
      <div className="flex gap-8 font-medium text-gray-800">
        <a href="#" className="hover:text-blue-600 transition">
          Home
        </a>
        <a href="#" className="hover:text-blue-600 transition">
          Programs
        </a>
        <a href="#" className="hover:text-blue-600 transition">
          About
        </a>
        <a href="#" className="hover:text-blue-600 transition">
          Contact
        </a>
      </div>

      {/* Button */}
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
        Enquire Now
      </button>
    </nav>
  );
}