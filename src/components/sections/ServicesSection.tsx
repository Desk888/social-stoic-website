
import React from 'react';
import ServiceCard from '../ui/ServiceCard';

const services = [
  {
    id: '1',
    title: '1-on-1 Coaching In-Person',
    description: 'Personalized in-person sessions focused on developing social skills, confidence, and authentic connection with women in real-world settings.',
    imageSrc: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80',
    link: '/coaching'
  },
  {
    id: '2',
    title: '1-on-1 Coaching Online',
    description: 'Remote coaching sessions tailored to your specific needs, helping you develop the mindset and skills needed for successful dating.',
    imageSrc: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80',
    link: '/coaching'
  },
  {
    id: '3',
    title: 'Residentials',
    description: 'Immersive multi-day programs where you'll live with coaches and receive intensive training, real-world practice, and personalized feedback.',
    imageSrc: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
    link: '/coaching'
  },
  {
    id: '4',
    title: 'Worldwide Bootcamps',
    description: 'Intensive group training experiences in cities around the world, combining classroom learning with real-world application.',
    imageSrc: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
    link: '/coaching'
  },
];

interface ServicesSectionProps {
  sectionTitle?: string;
  sectionSubtitle?: string;
  className?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  sectionTitle = "What We Offer",
  sectionSubtitle = "Explore our specialized coaching services designed to transform your social and dating life",
  className = "",
}) => {
  return (
    <section className={`section-padding ${className}`}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 animate-fade-in">
            {sectionTitle}
          </h2>
          <p className="text-lg text-gray-400 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {sectionSubtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={service.id} className="opacity-0 animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <ServiceCard
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                link={service.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
