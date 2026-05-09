export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl mb-6">Our Mission</h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          eriCare was founded with a simple goal: to provide elderly individuals and their families with 
          trusted, verified, and compassionate healthcare professionals directly in their homes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="bg-blue-600 rounded-3xl p-12 text-white shadow-xl shadow-blue-200">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <p className="text-lg">Thoroughly verified and background-checked caregivers.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <p className="text-lg">Specialized care for chronic conditions and post-surgery recovery.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <p className="text-lg">Transparent pricing and flexible scheduling options.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <p className="text-lg">Dedicated support for families through the entire care journey.</p>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Making Care Accessible</h2>
          <p className="text-lg text-slate-600">
            We understand the challenges of finding reliable elder care. That's why we've built a platform 
            that simplifies the search, booking, and management of home-based medical and non-medical assistance.
          </p>
          <p className="text-lg text-slate-600">
            Every professional on our platform undergoes a rigorous screening process, ensuring that 
            your loved ones receive the highest quality of care and companionship.
          </p>
        </div>
      </div>
    </div>
  );
}
