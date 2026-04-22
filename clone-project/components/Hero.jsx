import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-8 py-16 bg-[#f5f7fb]">
      <div className="max-w-6xl mx-auto bg-[#eef4ff] rounded-3xl p-10 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>
          <h1 className="text-5xl font-bold leading-tight mb-6 text-black">
            Next-Gen <span className="text-blue-600">Expertise</span> For
            Your <span className="text-blue-600">Enterprise</span>
          </h1>

          <p className="text-lg text-gray-800 mb-6">
            Cultivate high-performance teams through expert learning
            and industry-ready programs.
          </p>

          <div className="flex gap-4 flex-wrap mb-8 text-sm">
            <span>✔ Tailored Solutions</span>
            <span>✔ Industry Insights</span>
            <span>✔ Expert Guidance</span>
          </div>

          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium">
            Enquire Now
          </button>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <Image
            src="/hero.png"
            alt="Business Professionals"
            width={500}
            height={500}
            className="rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
}