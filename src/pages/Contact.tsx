import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/sections/ContactForm';
import SmoothImage from '@/components/ui/SmoothImage';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-stoic-black text-white">
      <Navbar />
      
      <main className="page-transition pt-24">
        {/* Contact Hero Section */}
        <section className="py-16 md:py-24 relative">
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Text Section with Background */}
              <div className="relative">
                {/* Background Image - Only behind this column */}
                <div className="absolute inset-0 z-0 opacity-30 rounded-xl overflow-hidden">
                  <SmoothImage
                    src="https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&q=80"
                    alt="Background"
                    className="w-full h-full object-cover"
                    aspectRatio="aspect-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-stoic-black to-stoic-black/70"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="h-px w-10 bg-stoic-green"></div>
                    <span className="text-stoic-green uppercase tracking-wider text-sm font-medium">Get In Touch</span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                    Let's Start Your Transformation
                  </h1>
                  
                  <p className="text-lg text-gray-300 mb-8">
                    Ready to take your social and dating skills to the next level? Fill out the form, and we'll get back to you to discuss how we can help you achieve your goals.
                  </p>
                  
                  {/* About Us Section */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">About Us</h2>
                    <p className="text-gray-300 mb-4">
                      Social Stoic was founded with a clear mission: to teach men how to develop genuine connections with women through authentic social interactions and stoic principles.
                    </p>
                    <p className="text-gray-300">
                      Our team of experienced coaches has helped hundreds of men around the world transform their dating lives through personalized coaching, immersive programs, and comprehensive education.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Form Section - No Background Image */}
              <div className="animation-fade-in-right">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* About Image Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1920&q=80" 
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stoic-black/95 to-stoic-black/80"></div>
          </div>
          
          {/* <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 mb-6">
                <div className="h-px w-10 bg-stoic-green"></div>
                <span className="text-stoic-green uppercase tracking-wider text-sm font-medium">Our Philosophy</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Social Stoic Approach
              </h2>
              
              <p className="text-lg text-gray-300 mb-6">
                We believe that dating success comes from developing genuine confidence, emotional intelligence, and social skills—not from manipulative tactics or techniques.
              </p>
              
              <p className="text-lg text-gray-300 mb-6">
                Our methodology combines ancient stoic wisdom with modern social dynamics, teaching men how to approach dating with authenticity, intention, and integrity.
              </p>
              
              <p className="text-lg text-gray-300">
                Through our various coaching programs, we help you transform into a man who naturally attracts women through his character, confidence, and communication skills.
              </p>
            </div>
          </div> */}
        </section>
        
        {/* FAQ Section */}
        <section className="bg-stoic-darkgray py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-300">
                Answers to common questions about our coaching services
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "How are your services different from other dating coaches?",
                  answer: "We focus on authentic connection rather than manipulation. Our approach is based on developing genuine confidence, emotional intelligence, and social skills—not on memorized lines or tricks. We believe in teaching men how to be their best selves and connect with women in an honest, respectful way."
                },
                {
                  question: "How long does it take to see results?",
                  answer: "Many clients report noticeable improvements after their first coaching session. However, significant transformation typically occurs over 1-3 months of consistent practice and implementation. The exact timeline depends on your starting point, how frequently you practice, and your specific goals."
                },
                {
                  question: "Do you guarantee results?",
                  answer: "While we can't guarantee specific outcomes (no ethical coach can), we can guarantee our commitment to providing you with the highest quality coaching and most effective strategies available. Our track record of success speaks for itself, and we work with each client until they achieve their desired results."
                },
                {
                  question: "What locations do you offer in-person coaching?",
                  answer: "We currently offer in-person coaching in New York, Los Angeles, London, and Sydney. For clients in other locations, we offer online coaching or can arrange travel for residential programs (additional fees may apply)."
                },
                {
                  question: "How do I know which program is right for me?",
                  answer: "The best way to determine which program fits your needs is to book a free consultation call. During this call, we'll discuss your current situation, goals, and preferences to recommend the most appropriate coaching option."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-stoic-gray/20 rounded-xl overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center p-6 cursor-pointer text-white font-medium text-left">
                      {faq.question}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-stoic-green transition-transform duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-gray-300">
                      {faq.answer}
                    </div>
                  </details>
                </div>
              ))}
            </div>
            
            {/* <div className="text-center mt-12">
              <p className="text-gray-300 mb-6">
                Still have questions? Feel free to reach out to us directly.
              </p>
              <a href="mailto:info@socialstoic.com" className="btn-secondary">
                Email Us
              </a>
            </div> */}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
