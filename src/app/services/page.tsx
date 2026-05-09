import prisma from "@/lib/prisma";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default async function ServicesPage() {
  const services = await prisma.service.findMany({
    orderBy: { name: 'asc' },
  });

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">Our Healthcare Services</h1>
        <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
          We provide a range of premium in-home healthcare services to ensure the comfort and well-being of your loved ones.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-8">
              <div className="text-5xl mb-6">{service.icon}</div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-900">{service.name}</h3>
                <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                  {service.category}
                </span>
              </div>
              <p className="text-slate-600 mb-6 h-20 overflow-hidden text-ellipsis">
                {service.description}
              </p>
              <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                <div>
                  <p className="text-sm text-slate-500">Starting at</p>
                  <p className="text-xl font-bold text-slate-900">${service.basePrice.toFixed(2)} / hr</p>
                </div>
                <Link 
                  href={`/caregivers?service=${service.id}`}
                  className="bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white px-5 py-2.5 rounded-xl font-medium transition-colors"
                >
                  Find Caregiver
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {services.length === 0 && (
        <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
          <p className="text-slate-500 text-lg">No services found in the database.</p>
        </div>
      )}
    </div>
  );
}
