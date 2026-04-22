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
    <section className="px-8 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Why Choose Accredian?
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-xl shadow-md border bg-white text-blue-600"
          >
            <h3 className="text-xl font-semibold mb-4">
              {item.title}
            </h3>
            <p className="text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}