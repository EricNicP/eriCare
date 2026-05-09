import Link from "next/link";

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ role?: string }>;
}) {
  const { role } = await searchParams;
  const isCaregiver = role === 'caregiver';

  return (
    <div className="min-h-full flex flex-col justify-center py-20 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-4xl font-extrabold text-slate-900">
          {isCaregiver ? 'Join as a Professional' : 'Create Account'}
        </h1>
        <p className="mt-2 text-center text-slate-600">
          Join our community and start making a difference.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm border border-slate-200 sm:rounded-3xl sm:px-10">
          <form className="space-y-6" action="#">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-slate-700">
                  First Name
                </label>
                <div className="mt-1">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    required
                    className="appearance-none block w-full px-4 py-3 border border-slate-300 rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-slate-900 font-medium"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-slate-700">
                  Last Name
                </label>
                <div className="mt-1">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    required
                    className="appearance-none block w-full px-4 py-3 border border-slate-300 rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-slate-900 font-medium"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none block w-full px-4 py-3 border border-slate-300 rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-slate-900 font-medium"
                />
              </div>
            </div>

            {isCaregiver && (
              <div>
                <label htmlFor="specialization" className="block text-sm font-medium text-slate-700">
                  Specialization
                </label>
                <div className="mt-1">
                  <select
                    id="specialization"
                    name="specialization"
                    className="appearance-none block w-full px-4 py-3 border border-slate-300 rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-slate-900 font-medium"
                  >
                    <option>Nursing Care</option>
                    <option>Physiotherapy</option>
                    <option>Elderly Companion</option>
                    <option>General Attendant</option>
                  </select>
                </div>
              </div>
            )}

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none block w-full px-4 py-3 border border-slate-300 rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-slate-900 font-medium"
                />
              </div>
            </div>

            <p className="text-xs text-slate-500">
              By clicking Sign Up, you agree to our{' '}
              <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and{' '}
              <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
            </p>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
