export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "HR Manager, TechCorp",
      feedback:
        "Accredian helped our employees upskill with industry-ready programs and measurable outcomes.",
    },
    {
      name: "Priya Verma",
      role: "Learning Head, GrowthLabs",
      feedback:
        "The mentorship and certification programs significantly improved our workforce productivity.",
    },
  ];

  return (
    <section className="px-8 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-black">
          What Our <span className ="text-blue-600">Clients Say</span>
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Trusted by professionals and enterprises across industries.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border shadow-sm bg-[#f8fafc] text-black"
            >
              <p className="text-gray-700 mb-6 leading-relaxed">
                “{item.feedback}”
              </p>

              <h3 className="font-semibold text-lg">
                {item.name}
              </h3>

              <p className="text-gray-500">
                {item.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}