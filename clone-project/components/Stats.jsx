export default function Stats() {
  const stats = [
    {
      number: "10K+",
      text: "Professionals Trained For Exceptional Career Success",
    },
    {
      number: "200+",
      text: "Sessions Delivered With Unmatched Learning Excellence",
    },
    {
      number: "5K+",
      text: "Active Learners Engaged In Dynamic Courses",
    },
  ];

  return (
    <section className="px-8 py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-4 text-blue-600">
        Our Track Record
      </h2>

      <p className="text-center text-gray-600 mb-12">
        The Numbers Behind Our Success
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <div
            key={index}
            className="text-center p-8 rounded-2xl shadow-sm border"
          >
            <h3 className="text-3xl font-bold text-blue-600 mb-4">
              {item.number}
            </h3>
            <p className="text-gray-700">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}