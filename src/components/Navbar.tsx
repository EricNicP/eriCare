import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600 flex items-center gap-3">
              <Image src="/logo.png" alt="eriCare logo" width={40} height={40} className="rounded-xl shadow-sm" />
              <span>eriCare</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/services" className="text-slate-600 hover:text-blue-600 font-medium">Services</Link>
            <Link href="/caregivers" className="text-slate-600 hover:text-blue-600 font-medium">Find Caregivers</Link>
            <Link href="/about" className="text-slate-600 hover:text-blue-600 font-medium">About Us</Link>
            <Link href="/login" className="text-slate-600 hover:text-blue-600 font-medium">Log in</Link>
            <Link href="/register" className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
