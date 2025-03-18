import React from 'react';

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80 z-10" />
      <div 
        className="relative h-[85vh] md:h-[80vh] bg-cover bg-center z-0" 
        style={{
          backgroundImage: `url('https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=1')`, 
          backgroundImage: "PLACEHOLDER",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        data-image-request="construction workers with tools at a house renovation site"
      >
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container-padding mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Quality Home Improvement Services
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Your trusted partner for affordable and high-quality home improvement solutions. From minor repairs to major renovations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={scrollToContact} 
                  className="btn btn-secondary text-lg"
                >
                  Get A Quote
                </button>
                <button 
                  onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                  className="btn bg-white text-blue-700 hover:bg-gray-100 text-lg"
                >
                  Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}