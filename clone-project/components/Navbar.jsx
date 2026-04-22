export default function Navbar() {
  return (
    <nav className="w-full px-10 py-5 bg-white shadow-sm flex justify-between items-center">
      <h1 className="text-3xl font-bold text-blue-600">
        accredian
      </h1>

      <div className="flex gap-8 font-medium">
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

      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium">
        Enquire Now
      </button>
    </nav>
  );
}