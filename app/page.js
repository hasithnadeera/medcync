import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from './components/MobileMenu'
import MobileMenuButton from './components/MobileMenuButton'
import FAQSection from './components/FAQSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative">
      <MobileMenu />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Fixed Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-white z-40 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="MedSync Logo"
                  width={165}
                  height={55.44}
                  priority
                  className="object-contain"
                />
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="hidden sm:flex gap-8 items-center">
                <Link href="/" className="text-black hover:text-[#1055AE] transition-colors font-medium">Home</Link>
                <Link href="/features" className="text-black hover:text-[#1055AE] transition-colors font-medium">Features</Link>
                <Link href="/faq" className="text-black hover:text-[#1055AE] transition-colors font-medium">FAQ</Link>
                <Link href="/contact" className="text-black hover:text-[#1055AE] transition-colors font-medium">Contact</Link>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Link
                href="/login"
                className="bg-[#1055AE] text-white px-3 py-1.5 text-m sm:bg-transparent sm:text-black sm:hover:text-[#1055AE] transition-colors font-medium sm:px-4 sm:py-2 sm:text-base rounded-[10px]"
              >
                Log In
              </Link>
              <div className="hidden sm:block">
                <Link
                  href="/signup"
                  className="bg-[#1055AE] text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-[10px] hover:bg-[#0d4690] transition-colors font-medium text-sm sm:text-base"
                >
                  Sign Up
                </Link>
              </div>
              <MobileMenuButton />
            </div>
          </div>
        </nav>
      </div>
      <div className="pt-8">
        {/* Hero Section */}
        <section className="container mx-auto py-2 md:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4">
            <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3 leading-tight">
                Easily Manage Your Health Records with MedSync
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 max-w-xl leading-relaxed">
                Secure access to your medical history, appointments, and prescriptions—all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md bg-white p-4 sm:p-0 sm:bg-transparent z-30">
                <button className="px-4 py-2.5 text-sm sm:text-base rounded-lg bg-[#1055AE] text-white hover:bg-[#0d4690] transition-colors font-medium w-full sm:w-auto min-w-[144px] focus:outline-none focus:ring-2 focus:ring-[#1055AE] focus:ring-offset-2">
                  Access Records
                </button>
                <button className="px-4 py-2.5 text-sm sm:text-base rounded-lg border-2 border-[#1055AE] text-[#1055AE] hover:bg-[#1055AE] hover:text-white transition-colors font-medium w-full sm:w-auto min-w-[144px] focus:outline-none focus:ring-2 focus:ring-[#1055AE] focus:ring-offset-2">
                  Book Now
                </button>
              </div>
            </div>
            <div className="relative w-full md:w-1/2 min-h-[250px] sm:min-h-[300px] md:min-h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/hero-image.webp"
                alt="Patient using MedSync app"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-contain"
              />
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Take Control of Your Health Information</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-card hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#1055AE] text-white rounded-full flex items-center justify-center mb-6">
                  <Image
                    src="/clock.svg"
                    alt="Access Anytime Icon"
                    width={24}
                    height={24}
                    className="w-6 h-6 invert"
                  />
                </div>
                <h3 className="text-xl text-black font-bold mb-4">Access Anytime, Anywhere</h3>
                <p className="text-gray-600 leading-relaxed">Your health records are just a click away.</p>
              </div>
              <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-card hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#1055AE] text-white rounded-full flex items-center justify-center mb-6">
                <Image
                    src="/security.svg"
                    alt="Secure Prescription Icon"
                    width={24}
                    height={24}
                    className="w-6 h-6 invert"
                  />
                </div>
                <h3 className="text-xl text-black font-bold mb-4">Secure Prescription View</h3>
                <p className="text-gray-600 leading-relaxed">Track your prescriptions safely and easily.</p>
              </div>
              <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-card hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#1055AE] text-white rounded-full flex items-center justify-center mb-6">
                  <Image
                    src="appoinment.svg"
                    alt="Secure Prescription Icon"
                    width={24}
                    height={24}
                    className="w-6 h-6 invert"
                  />
                </div>
                <h3 className="text-xl text-black font-bold mb-4">Effortless Appointment Booking</h3>
                <p className="text-gray-600 leading-relaxed">Schedule visits with your doctor quickly.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">What MedSync Offers for Patients</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {[
                {
                  title: 'Health Record Access',
                  description: 'View your medical history, doctor\'s notes, and visit summaries.',
                  icon: '/record.svg'
                },
                {
                  title: 'Prescription Overview',
                  description: 'Review your latest prescriptions securely.',
                  icon: '/prescription.svg'
                },
                {
                  title: 'Appointment Scheduling',
                  description: 'Seamlessly book appointments with your doctor.',
                  icon: '/appoinment.svg'
                },
                {
                  title: 'Family Registration',
                  description: 'Add family members and dependents under one account.',
                  icon: '/family.svg'
                }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-card hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#1055AE] text-white rounded-full flex items-center justify-center mb-6">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={24}
                      height={24}
                      className="w-6 h-6 invert"
                    />
                  </div>
                  <h3 className="text-xl text-black font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Patient Experiences with MedSync</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  quote: 'MedSync has made managing my health records so much easier. I love having everything in one place!',
                  author: 'Sarah Johnson'
                },
                {
                  quote: 'Booking appointments is now a breeze. The interface is intuitive and user-friendly.',
                  author: 'Michael Chen'
                },
                {
                  quote: 'I can easily keep track of my family\'s medical history and appointments. It\'s a game-changer!',
                  author: 'Emily Rodriguez'
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-card hover:shadow-lg transition-shadow">
                  <p className="text-gray-600 mb-6 leading-relaxed italic text-lg">
                    {testimonial.quote}
                  </p>
                  <p className="font-bold text-black">- {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">Stay in Control of Your Health Today</h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-[#1055AE] text-white px-8 py-4 rounded-[10px] hover:bg-[#0d4690] transition-colors font-medium text-lg w-full sm:w-auto">
                  Access MedSync Now
                </button>
                <button className="border-2 border-[#1055AE] text-[#1055AE] px-8 py-4 rounded-[10px] hover:bg-[#1055AE] hover:text-white transition-colors font-medium text-lg w-full sm:w-auto">
                  Book an Appointment
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="py-16 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="font-bold text-xl mb-6 text-black" >Contact Us</h3>
                <ul className="space-y-4">
                  <li className="text-gray-600">Email: info@medsync.lk</li>
                  <li className="text-gray-600">Phone: +94 77 666 6868</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-black text-xl mb-6">Legal</h3>
                <ul className="space-y-4">
                  <li><Link href="/privacy" className="text-gray-600 hover:text-[#1055AE] transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-gray-600 hover:text-[#1055AE] transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-black text-xl mb-6">Follow Us</h3>
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-600 hover:text-[#1055AE] transition-colors">Twitter</a>
                  <a href="#" className="text-gray-600 hover:text-[#1055AE] transition-colors">Facebook</a>
                  <a href="#" className="text-gray-600 hover:text-[#1055AE] transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>
            <div className="text-center mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-600">&copy; {new Date().getFullYear()} MedSync. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}