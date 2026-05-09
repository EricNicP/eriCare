import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mb-6 leading-tight">
          Compassionate Care for Your <span className="text-blue-600">Loved Ones</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mb-10">
          Connect with verified nurses, caregivers, and physiotherapists for premium in-home medical and non-medical assistance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/services" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
            Find a Caregiver
          </Link>
          <Link href="/register?role=caregiver" className="bg-white text-blue-600 border-2 border-blue-100 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-200 hover:bg-blue-50 transition-colors">
            Join as a Professional
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Premium Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Nursing Care",
              desc: "Professional medical care including wound dressing, injections, and vital monitoring.",
              icon: "🩺"
            },
            {
              title: "Physiotherapy",
              desc: "Expert physiotherapists to help with mobility, pain relief, and post-surgery recovery.",
              icon: "🏃‍♂️"
            },
            {
              title: "Attendant Services",
              desc: "Compassionate attendants for daily activities, personal hygiene, and companionship.",
              icon: "🤝"
            }
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
