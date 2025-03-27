
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import VideoCard from '@/components/ui/VideoCard';
import { Link } from 'react-router-dom';

// Sample videos (in a real app, these would come from an API)
const videos = [
  {
    id: '1',
    title: 'How to Approach Women With Confidence',
    videoId: 'sample1',
    thumbnail: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    title: 'The Art of Natural Conversation',
    videoId: 'sample2',
    thumbnail: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    title: 'Building Authentic Connections',
    videoId: 'sample3',
    thumbnail: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '4',
    title: 'Overcoming Approach Anxiety',
    videoId: 'sample4',
    thumbnail: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '5',
    title: 'Mastering Non-Verbal Communication',
    videoId: 'sample5',
    thumbnail: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '6',
    title: 'First Date Success Strategies',
    videoId: 'sample6',
    thumbnail: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80',
  },
];

const Videos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-stoic-black text-white">
      <Navbar />
      
      <main className="page-transition pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block mb-6">
                <div className="flex items-center justify-center space-x-2">
                  <div className="h-px w-10 bg-stoic-green"></div>
                  <span className="text-stoic-green uppercase tracking-wider text-sm font-medium">Knowledge Base</span>
                  <div className="h-px w-10 bg-stoic-green"></div>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Social Stoic Video Library
              </h1>
              
              <p className="text-lg text-gray-300">
                Browse our collection of educational videos covering everything from approaching women to mastering conversation skills and building genuine connections.
              </p>
            </div>
            
            {/* Featured Video */}
            <div className="mb-16 relative overflow-hidden rounded-xl aspect-video">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=TYYzK3-6J_TaLXQ3"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <div key={video.id} className="opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <VideoCard
                    title={video.title}
                    videoId={video.videoId}
                    thumbnail={video.thumbnail}
                  />
                </div>
              ))}
            </div>
            
            {/* Subscribe CTA */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4">Subscribe to Our Channel</h3>
              <p className="text-gray-300 mb-6">
                New videos every week to help you improve your social and dating skills
              </p>
              <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary py-2"
              >
                Subscribe on YouTube
              </a>
            </div>
          </div>
        </section>
        
        {/* Topics Section */}
        <section className="bg-stoic-darkgray py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">
                Topics We Cover
              </h2>
              <p className="text-gray-300">
                Our comprehensive video content addresses all aspects of modern dating
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Approaching Women',
                  description: 'Learn how to confidently initiate conversations in any environment',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )
                },
                {
                  title: 'Conversation Skills',
                  description: 'Master the art of engaging, authentic conversation that creates connection',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  )
                },
                {
                  title: 'Flirting & Attraction',
                  description: 'Understand the subtle art of creating and escalating attraction naturally',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  )
                },
                {
                  title: 'Confidence Building',
                  description: 'Develop unshakeable confidence that comes from within, not from external validation',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  title: 'Body Language',
                  description: 'Learn to read and express powerful non-verbal communication signals',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )
                },
                {
                  title: 'Dating Strategy',
                  description: 'Navigate modern dating with intention, clarity and emotional intelligence',
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  )
                }
              ].map((topic, i) => (
                <div key={i} className="bg-stoic-gray/30 p-6 rounded-xl border border-stoic-gray/20 hover:border-stoic-green/40 transition-all duration-300 hover:transform hover:translate-y-[-5px]">
                  <div className="text-stoic-green mb-4">
                    {topic.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{topic.title}</h3>
                  <p className="text-gray-400">{topic.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="bg-stoic-darkgray border border-stoic-gray/20 rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-6">
                    Want Personalized Guidance?
                  </h2>
                  <p className="text-gray-300 mb-8">
                    Our videos provide great insights, but nothing compares to personalized coaching tailored to your specific situation and goals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/coaching" className="btn-primary">
                      Explore Coaching Options
                    </Link>
                    <Link to="/contact" className="btn-secondary">
                      Contact Us
                    </Link>
                  </div>
                </div>
                <div className="relative hidden md:block">
                  <img 
                    src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80" 
                    alt="Personal coaching" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-stoic-black to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Videos;
