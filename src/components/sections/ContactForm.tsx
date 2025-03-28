
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
    
  //   // Simulate form submission
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     toast({
  //       title: "Message sent",
  //       description: "We'll get back to you as soon as possible.",
  //     });
  //     setFormData({ name: '', email: '', message: '' });
  //   }, 1500);
  // };


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await emailjs.send(
      'YOUR_SERVICE_ID',  // Replace with your actual EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your actual EmailJS template ID
      formData,
      'YOUR_PUBLIC_KEY'   // Replace with your EmailJS public key
    );

    if (response.status !== 200) {
      throw new Error('Failed to send message');
    }

    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: '', email: '', message: '' });

  } catch (error) {
    toast({
      title: "Error",
      description: "Failed to send message. Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div className={cn("bg-stoic-darkgray rounded-xl p-6 md:p-8", className)}>
      <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-stoic-gray border border-stoic-gray/40 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-stoic-green focus:border-transparent transition-all"
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-stoic-gray border border-stoic-gray/40 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-stoic-green focus:border-transparent transition-all"
            placeholder="your.email@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-stoic-gray border border-stoic-gray/40 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-stoic-green focus:border-transparent transition-all"
            placeholder="How can we help you?"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "w-full btn-primary",
            isSubmitting && "opacity-70 cursor-not-allowed"
          )}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
