
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const coachingServices = [
  {
    id: 'in-person',
    title: '1-on-1 Coaching In-Person',
    description: 'Personalised in-person sessions focused on developing social skills, confidence, and authentic connection with women in real-world settings.',
    imageSrc: 'https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    benefits: [
      'Direct feedback in real-time approach situations',
      'Personalised strategy tailored to your personality and goals',
      'Practice in various social environments (bars, cafes, shopping centers)',
      'Immediate corrections to body language, vocal tonality, communication and more',
      'Build confidence through guided social interactions'
    ],
    duration: 'To be discussed.',
  },
  {
    id: 'online',
    title: '1-on-1 Coaching Online',
    description: 'Remote coaching sessions tailored to your specific needs, helping you develop the mindset and skills needed for successful dating.',
    imageSrc: 'https://images.unsplash.com/photo-1474403078171-7f199e9d1335?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    benefits: [
      'Flexible scheduling from anywhere in the world',
      'Personalised curriculum based on your dating challenges',
      'Detailed feedback on recorded approaches (optional)',
      'Text messages training and optimisation'
    ],
    duration: 'To be discussed',
  },
  {
    id: 'residential',
    title: 'Residentials',
    description: "Immersive multi-day programs where you'll live with coaches and receive intensive training, real-world practice, and personalised feedback.",
    imageSrc: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    benefits: [
      'Full immersion in the dating mindset for 3-7 days or more',
      'Live with professional coaches who provide 24/7 mentorship',
      'Multiple daily practice sessions in various environments',
      'Evening implementations in high-energy social venues',
      'Build lasting confidence through repeated success experiences'
    ],
    duration: '3-7 or more days',
  },
  {
    id: 'bootcamp',
    title: 'Worldwide Bootcamps',
    description: 'Intensive group training experiences in cities around the world, combining classroom learning with real-world application.',
    imageSrc: 'https://images.unsplash.com/photo-1495181941197-70a606546974?q=80&w=2812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    benefits: [
      'Learn alongside like-minded men in a supportive environment',
      'Daily theoretical training and practical implementations',
      'Network and build friendships with others on the same journey',
      'Experience approaching in exotic international locations',
      'Multiple coaches providing diverse perspectives and expertise'
    ],
    duration: '2-3 days or more',
  }
];

const Coaching = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-stoic-black text-white">
      <Helmet>
                      <meta charSet="utf-8" />
                      <title>Social Stoic | Coaching</title>
                      <link rel="canonical" href="/coaching" />
      </Helmet>
      <Navbar />
      
      <main className="page-transition pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stoic-black/95 to-stoic-black/80"></div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 mb-6">
                <div className="h-px w-10 bg-stoic-green"></div>
                <span className="text-stoic-green uppercase tracking-wider text-sm font-medium">Our Coaching Programs</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Coaching Programs for Daygame Mastery
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
                From one-on-one sessions to immersive residential experiences, our coaching programs are designed to quickly transform your dating life.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Detail */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid gap-24">
              {coachingServices.map((service, index) => (
                <div 
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 !== 0 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  <div className={`${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                    <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                    <p className="text-gray-300 mb-8">{service.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-stoic-green-light">Key Benefits</h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <div className="text-stoic-green mt-1 mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                      <div className="bg-stoic-darkgray p-4 rounded-lg">
                        <h4 className="text-sm uppercase text-gray-400 mb-1">Duration</h4>
                        <p className="text-lg font-medium">{service.duration}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`relative h-[500px] overflow-hidden rounded-xl ${
                    index % 2 !== 0 ? 'lg:col-start-1' : ''
                  }`}>
                    <img 
                      src={service.imageSrc} 
                      alt={service.title} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stoic-black/80 via-transparent to-transparent"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="bg-stoic-darkgray py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Success Stories
              </h2>
              <p className="text-lg text-gray-400">
                Here's what our clients have to say about their transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-stoic-gray/30 p-6 rounded-xl border border-stoic-gray/20">
                  <div className="flex items-center space-x-1 text-stoic-green mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    "Working with Social Stoic completely transformed my dating life. I went from being anxious about approaching women to having genuine confidence in social situations. The coaches provided practical advice and techniques that actually work."
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-stoic-green rounded-full mr-4 flex items-center justify-center text-white font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                    <div>
                      <h4 className="font-medium">Client {i}</h4>
                      <p className="text-sm text-gray-400">Program Graduate</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto bg-stoic-darkgray border border-stoic-gray/20 rounded-xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Book a free consultation call to discuss which program is right for you and take the first step toward transforming your dating life.
              </p>
              <Link to="https://calendly.com/thesocialstoic/coachingapplicationcall?month=2025-03" className="btn-primary">
                Book Your Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Coaching;
