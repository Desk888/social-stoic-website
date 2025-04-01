import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formRef.current) {
        throw new Error('Form reference not found');
      }

      // Send the contact form template
      const contactResult = await emailjs.sendForm(
        'service_67p2ats',
        'template_8wq3jp8',
        formRef.current,
        'WLOGDLrWmX4wkd2xp'
      );

      console.log('Contact EmailJS Result:', contactResult);

      // Send the auto-reply template
      const autoReplyResult = await emailjs.sendForm(
        'service_67p2ats',
        'template_6mjwb9o',
        formRef.current,
        'WLOGDLrWmX4wkd2xp'
      );

      console.log('Auto-reply EmailJS Result:', autoReplyResult);

      if (contactResult.status !== 200 || autoReplyResult.status !== 200) {
        throw new Error(`Failed to send message. Contact Status: ${contactResult.status}, Auto-reply Status: ${autoReplyResult.status}`);
      }

      toast({
        title: "Message sent",
        description: "We'll get back to you as soon as possible.",
      });

      formRef.current.reset();

    } catch (error) {
      console.error('EmailJS Error Details:', {
        error,
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      });

      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={cn('bg-stoic-darkgray rounded-xl p-6 md:p-8', className)}>
      <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-stoic-gray border border-stoic-gray/40 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-stoic-green transition-all"
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
            className="w-full px-4 py-3 bg-stoic-gray border border-stoic-gray/40 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-stoic-green transition-all"
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
            className="w-full px-4 py-3 bg-stoic-gray border border-stoic-gray/40 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-stoic-green transition-all"
            placeholder="How can we help you?"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            'w-full btn-primary transition-all',
            isSubmitting && 'opacity-70 cursor-not-allowed'
          )}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
