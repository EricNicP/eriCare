import prisma from "@/lib/prisma";
import Link from "next/link";

export const dynamic = 'force-dynamic';

export default async function CaregiversPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;

  const whereClause = service ? { serviceId: service } : {};

  const caregivers = await prisma.caregiverProfile.findMany({
    where: whereClause,
    include: {
      user: true,
      services: true, // 'services' is the field name in schema (relation name)
    },
    orderBy: {
      experienceYears: 'desc',
    }
  });

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900">Find a Caregiver</h1>
          <p className="mt-2 text-xl text-slate-600">
            Browse our network of verified and experienced healthcare professionals.
          </p>
        </div>
        {service && (
          <Link href="/caregivers" className="mt-4 md:mt-0 text-blue-600 hover:underline">
            Clear Filters
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {caregivers.map((profile) => (
          <div key={profile.id} className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-3xl font-bold shrink-0">
              {profile.user.name.charAt(0)}
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-xl font-bold text-slate-900">{profile.user.name}</h3>
                {profile.verificationStatus === 'VERIFIED' && (
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                    ✓ Verified
                  </span>
                )}
              </div>
              <p className="text-blue-600 font-medium mb-3">{profile.services?.name ?? 'General Care'}</p>
              <div className="space-y-1 mb-4 text-slate-600 text-sm">
                <p><span className="font-medium text-slate-900">Qualifications:</span> {profile.qualifications}</p>
                <p><span className="font-medium text-slate-900">Experience:</span> {profile.experienceYears} Years</p>
                <p><span className="font-medium text-slate-900">Rate:</span> ${profile.hourlyRate.toFixed(2)} / hr</p>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors">
                  Request Booking
                </button>
                <button className="flex-1 bg-white border border-slate-300 text-slate-700 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {caregivers.length === 0 && (
        <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
          <p className="text-slate-500 text-lg">No caregivers found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
