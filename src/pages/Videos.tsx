
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import VideoCard from '@/components/ui/VideoCard';
import { Link } from 'react-router-dom';

const videos = [
  {
    id: '1',
    title: 'How to Approach Women With Confidence',
    videoId: 'sample1',
    thumbnail: 'https://www.youtube.com/watch?v=_Am8ItTeNoQ&t=45s',
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
                  <span className="text-stoic-green uppercase tracking-wider text-sm font-medium">Our Videos</span>
                  <div className="h-px w-10 bg-stoic-green"></div>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Social Stoic Video Library
              </h1>
              
              <p className="text-lg text-gray-300">
                Browse our collection of videos covering everything from approaching women to mastering conversation skills and building genuine connections.
              </p>
            </div>
            
            {/* Featured Video */}
            <div className="mb-16 relative overflow-hidden rounded-xl aspect-video">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/UMZkMjD3luQ"
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
                href="https://www.youtube.com/@SocialStoicYouTube" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary py-2"
              >
                Subscribe on YouTube
              </a>
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
                    Our videos provide great insights, but nothing compares to personalised coaching tailored to your specific situation and goals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/coaching" className="btn-primary">
                      Explore Coaching Options
                    </Link>
                    <Link to="/https://calendly.com/thesocialstoic/coachingapplicationcall?month=2025-03" className="btn-secondary">
                      Get a Free Consultation
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
