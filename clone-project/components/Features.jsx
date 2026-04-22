export default function Features() {
  const features = [
    {
      title: "Top University Programs",
      description:
        "Access certification programs from leading universities and institutions.",
    },
    {
      title: "Employee Upskilling",
      description:
        "Help your teams stay relevant with practical, job-ready learning paths.",
    },
    {
      title: "Industry Mentorship",
      description:
        "Learn directly from professionals and industry experts across domains.",
    },
  ];

  return (
    <section className="px-8 py-20 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-black">
          Why Choose <span className="text-blue-600">Accredian ?</span> 
        </h2>

        <p className="text-center text-gray-600 mb-12">
          We help enterprises build stronger, smarter teams.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-blue-600">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}