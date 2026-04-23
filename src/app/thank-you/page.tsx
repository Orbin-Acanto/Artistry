'use client';

import React, { useEffect } from 'react';
import { InlineWidget } from 'react-calendly';

export default function ThankYouPage() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <div className="h-20" />
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-16">
        <div className="text-center mb-10">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-4">
            Artistry at Nassau County Museum of Art
          </p>
          <h1 className="font-display text-[clamp(2rem,6vw,4rem)] leading-tight uppercase text-primary-dark mb-6">
            Thank You for Reaching Out
          </h1>
          <h2 className="font-body text-lg md:text-xl text-charcoal/80 mb-4">
            Schedule a call with one of our event specialists
          </h2>
          <p className="font-body text-sm md:text-base leading-relaxed text-charcoal/55 max-w-2xl mx-auto">
            To make planning easier, select a convenient time to speak with our
            team using the calendar below. If you prefer, a member of our team
            will also reach out to you directly. We look forward to creating
            something extraordinary together.
          </p>
          <div className="h-px bg-charcoal/10 mt-10 max-w-md mx-auto" />
        </div>

        <div className="overflow-hidden">
          <InlineWidget
            url="https://calendly.com/mmeconsult/mme-appointment"
            styles={{ height: '800px', minWidth: '100%' }}
            pageSettings={{
              backgroundColor: 'faf8f4',
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: '8b6e4e',
              textColor: '2a2a2a',
            }}
          />
        </div>
      </div>
    </div>
  );
}
