
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-stoic-black text-white">
      <Navbar />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Social Stoic | Terms & Conditions</title>
        <meta name="description" content="Terms and conditions for Social Stoic services." />
        <link rel="canonical" href="/terms" />
      </Helmet>
      
      <main className="page-transition pt-24">
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-6">
                <div className="flex items-center justify-center space-x-2">
                  <div className="h-px w-10 bg-stoic-green"></div>
                  <span className="font-primaryItalic text-stoic-green uppercase tracking-wider text-sm font-medium">Legal</span>
                  <div className="h-px w-10 bg-stoic-green"></div>
                </div>
              </div>
              
              <h1 className="font-primaryItalic text-4xl sm:text-5xl font-bold mb-10 text-center">
                Terms & Conditions
              </h1>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
                <p className="text-gray-300 mb-4">
                  Welcome to Social Stoic. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services</h2>
                <p className="text-gray-300 mb-4">
                  Social Stoic provides coaching services related to social skills and dating. Our services include but are not limited to in-person coaching, online coaching, residential programs, and bootcamps as described on our website.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">3. Eligibility</h2>
                <p className="text-gray-300 mb-4">
                  Our services are available to individuals who are at least 18 years of age. By using our services, you represent and warrant that you are at least 18 years old and able to form legally binding contracts.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Booking and Payment</h2>
                <p className="text-gray-300 mb-4">
                  All bookings are subject to availability and acceptance by us. Prices are as quoted on our website or as otherwise communicated to you. Payment terms will be specified during the booking process.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cancellation and Rescheduling</h2>
                <p className="text-gray-300 mb-4">
                  Our cancellation and rescheduling policies will be communicated to you at the time of booking. Refunds may be subject to administration fees or may not be available depending on the timing of cancellation.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Intellectual Property</h2>
                <p className="text-gray-300 mb-4">
                  All content on our website, including but not limited to text, graphics, logos, images, and videos, is the property of Social Stoic and is protected by copyright and other intellectual property laws.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Code of Conduct</h2>
                <p className="text-gray-300 mb-4">
                  Clients are expected to conduct themselves in a respectful and appropriate manner during all interactions with our coaches and while participating in our programs. We reserve the right to terminate services without refund in cases of inappropriate behavior.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-300 mb-4">
                  Social Stoic provides coaching and educational services only. We do not guarantee specific outcomes or results. To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to Terms</h2>
                <p className="text-gray-300 mb-4">
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of the updated Terms.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">10. Governing Law</h2>
                <p className="text-gray-300 mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Social Stoic operates, without regard to its conflict of law provisions.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about these Terms, please contact us using the information provided on our Contact page.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
