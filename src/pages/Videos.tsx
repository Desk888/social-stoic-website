
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import VideoCard from '@/components/ui/VideoCard';
import { Link } from 'react-router-dom';
import { extractYouTubeVideoId, getYouTubeEmbedUrl } from '@/lib/youtube';
import { X } from 'lucide-react';

// Real YouTube video data
const videos = [
  {
    id: '1',
    title: 'How To Pickup Women In Coffee Shops (Infield)',
    videoUrl: 'https://www.youtube.com/watch?v=UMZkMjD3luQ',
  },
  {
    id: '2',
    title: 'How To Pickup 9s and 10s (Infield Example)',
    videoUrl: 'https://www.youtube.com/watch?v=H-_FULmTJXc&t=602s',
  },
  {
    id: '3',
    title: 'Yes Man vs. Playful Jerk: Who Gets More Girls? (Real Life Test)',
    videoUrl: 'https://www.youtube.com/watch?v=sNnxXLr-VOQ&t=182s',
  },
  {
    id: '4',
    title: 'Picking Up Girls in Prague (Infields)',
    videoUrl: 'https://www.youtube.com/watch?v=A6dFLFMNK_I',
  },
  {
    id: '5',
    title: 'Picking Up a Hot Blonde in Central London (Infield)',
    videoUrl: 'https://www.youtube.com/watch?v=h6_1fB_LR5A&t=245s',
  },
  {
    id: '6',
    title: 'How to Get Instant Dates (Infield Examples)',
    videoUrl: 'https://www.youtube.com/watch?v=ot43mkbGclQ&t=400s',
  },
];

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openVideo = (videoUrl: string) => {
    const videoId = extractYouTubeVideoId(videoUrl);
    if (videoId) {
      setSelectedVideo(videoId);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    // Restore body scrolling
    document.body.style.overflow = 'auto';
  };

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
              {videos.map((video, index) => (
                <div key={video.id} className="opacity-0 animate-fade-in" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                  <VideoCard
                    title={video.title}
                    videoUrl={video.videoUrl}
                    onClick={() => openVideo(video.videoUrl)}
                  />
                </div>
              ))}
            </div>
            
            {/* Subscribe CTA */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4">Subscribe to Our Channel For More Videos</h3>
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
                    <a 
                      href="https://calendly.com/thesocialstoic/coachingapplicationcall" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-secondary"
                    >
                      Get a Free Consultation
                    </a>
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
      
      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl aspect-video">
            <button 
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-stoic-green p-2 transition-colors"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              src={getYouTubeEmbedUrl(selectedVideo) + '?autoplay=1'}
              title="YouTube video player"
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Videos;
