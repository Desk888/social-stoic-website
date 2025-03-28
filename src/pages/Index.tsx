import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <div className="min-h-screen bg-stoic-black text-white">
      <Helmet>
                      <meta charSet="utf-8" />
                      <title>Social Stoic | Home</title>
                      <link rel="canonical" href="/" />
      </Helmet>
      <Navbar />
      
      <main>
        <HeroSection 
          title="Master The Art of Meeting Beautiful Women The Organic Way"
          description="Unlock the power of organic connections through Daygame. Learn to approach, connect, and build relationships with confidence."
        />
        
        <ServicesSection />
        
        {/* Philosophy Section */}
        {/* <section className="section-padding bg-stoic-darkgray">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="opacity-0 animate-fade-in-left order-2 md:order-1">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="h-px w-10 bg-stoic-green"></div>
                  <span className="text-stoic-green uppercase tracking-wider text-sm font-medium">Our Philosophy</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Stoic Principles for Modern Dating</h2>
                <p className="text-gray-300 mb-6">
                  We believe in authentic connections built on honesty, self-improvement, and a deep understanding of human psychology. Our approach combines ancient stoic wisdom with modern social dynamics to help you become the best version of yourself.
                </p>
                <p className="text-gray-300 mb-8">
                  At Social Stoic, we teach men how to approach dating with intention, confidence, and integrity. No manipulative tactics, just genuine human connection.
                </p>
                <Link to="/coaching" className="btn-primary">
                  Learn Our Method
                </Link>
              </div>
              
              <div className="relative h-[500px] overflow-hidden rounded-xl opacity-0 animate-fade-in-right order-1 md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80" 
                  alt="Man with confidence" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stoic-black/80 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </section> */}
        
        {/* CTA Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://plus.unsplash.com/premium_photo-1661609291595-3a849ea67002?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stoic-black/95 to-stoic-black/80"></div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Dating Life?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Take the first step towards building authentic connections with women through our coaching programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="https://calendly.com/thesocialstoic/coachingapplicationcall?month=2025-03" className="btn-primary">
                  Book a Consultation
                </Link>
                <Link to="/coaching" className="btn-secondary">
                  Explore Programs
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
