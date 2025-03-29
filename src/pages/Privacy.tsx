
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-stoic-black text-white">
      <Navbar />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Social Stoic | Privacy Policy</title>
        <meta name="description" content="Privacy policy for Social Stoic services." />
        <link rel="canonical" href="/privacy" />
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
                Privacy Policy
              </h1>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-6">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
                <p className="text-gray-300 mb-4">
                  At Social Stoic, we respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you how we handle your personal data when you visit our website and use our services, and inform you about your privacy rights.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
                <p className="text-gray-300 mb-4">
                  We may collect personal information that you provide directly to us, such as:
                </p>
                <ul className="list-disc pl-8 text-gray-300 mb-4 space-y-2">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Booking information when you schedule coaching sessions</li>
                  <li>Communication preferences</li>
                  <li>Payment information through our secure payment processors</li>
                  <li>Information you provide in consultation forms or surveys</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-300 mb-4">
                  We use the information we collect for various purposes, including to:
                </p>
                <ul className="list-disc pl-8 text-gray-300 mb-4 space-y-2">
                  <li>Provide and personalize our services</li>
                  <li>Process bookings and payments</li>
                  <li>Communicate with you about our services</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Information Sharing</h2>
                <p className="text-gray-300 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
                </p>
                <ul className="list-disc pl-8 text-gray-300 mb-4 space-y-2">
                  <li>With service providers who assist in our operations</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In the event of a business transfer or acquisition</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cookies and Tracking Technologies</h2>
                <p className="text-gray-300 mb-4">
                  Our website may use cookies and similar tracking technologies to track activity and hold certain information to improve and analyze our service. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Security</h2>
                <p className="text-gray-300 mb-4">
                  We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your Rights</h2>
                <p className="text-gray-300 mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-8 text-gray-300 mb-4 space-y-2">
                  <li>The right to access personal information we hold about you</li>
                  <li>The right to request correction of inaccurate data</li>
                  <li>The right to request deletion of your data</li>
                  <li>The right to restrict or object to processing</li>
                  <li>The right to data portability</li>
                </ul>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">8. Third-Party Links</h2>
                <p className="text-gray-300 mb-4">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites. We encourage you to read the privacy policy of every website you visit.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">9. Children's Privacy</h2>
                <p className="text-gray-300 mb-4">
                  Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe we have collected information from your child, please contact us.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes to This Privacy Policy</h2>
                <p className="text-gray-300 mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Privacy Policy, please contact us using the information provided on our Contact page.
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

export default Privacy;
