export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-3xl font-bold text-blue-400 mb-4">
            accredian
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Empowering enterprises with industry-ready learning,
            certifications, and workforce transformation solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>Programs</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>
          <p className="text-gray-300">
            Email: hello@accredian.com
          </p>
          <p className="text-gray-300">
            Phone: +91 98765 43210
          </p>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-12 border-t border-gray-700 pt-6">
        © 2026 Accredian. All rights reserved.
      </div>
    </footer>
  );
}