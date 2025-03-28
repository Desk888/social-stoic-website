
import React from 'react';
import ServiceCard from '../ui/ServiceCard';

const services = [
  {
    id: '1',
    title: '1-on-1 Coaching In-Person',
    description: 'Personalized in-person sessions focused on developing social skills, confidence, and authentic connection with women in real-world settings.',
    imageSrc: 'https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/coaching'
  },
  {
    id: '2',
    title: '1-on-1 Coaching Online',
    description: 'Remote coaching sessions tailored to your specific needs, helping you develop the mindset and skills needed for successful dating.',
    imageSrc: 'https://images.unsplash.com/photo-1474403078171-7f199e9d1335?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/coaching'
  },
  {
    id: '3',
    title: 'Residentials',
    description: "Immersive multi-day programs where you'll live with coaches and receive intensive training, real-world practice, and personalized feedback.",
    imageSrc: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/coaching'
  },
  {
    id: '4',
    title: 'Worldwide Bootcamps',
    description: 'Intensive group training experiences in cities around the world, combining classroom learning with real-world application.',
    imageSrc: 'https://images.unsplash.com/photo-1495181941197-70a606546974?q=80&w=2812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
  sectionSubtitle = "Explore our specialised coaching services designed to transform your dating life",
  className = "",
}) => {
  return (
    <section className={`section-padding ${className}`}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-primaryItalic font-bold mb-6 opacity-0 animate-fade-in">
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
