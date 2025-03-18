import React from 'react';

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container-padding mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1509453721491-c3af5961df76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw4fHx0ZWFtJTIwb2YlMjBkaXZlcnNlJTIwY29uc3RydWN0aW9uJTIwd29ya2VycyUyMGluJTIwdW5pZm9ybSUyMHN0YW5kaW5nJTIwdG9nZXRoZXIlMjBhdCUyMGElMjBjb25zdHJ1Y3Rpb24lMjBzaXRlfGVufDB8fHx8MTc0MjMyOTkwN3ww&ixlib=rb-4.0.3&q=80&w=1080" 
               
              alt="Our team of construction professionals"
              className="rounded-lg shadow-lg w-full h-auto"
              data-image-request="team of diverse construction workers in uniform standing together at a construction site"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">About ProSaver HandyMan Construction</h2>
            <p className="text-lg text-gray-700 mb-6">
              At ProSaver HandyMan Construction, we take pride in offering friendly, professional service that prioritizes your satisfaction. 
              We are your trusted partner for affordable and high-quality home improvement services.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-800">Quality Craftsmanship</h3>
                  <p className="text-gray-600">We deliver exceptional results with attention to detail on every project.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-800">Affordable Pricing</h3>
                  <p className="text-gray-600">We work within your budget while never compromising on quality.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-800">Customer Satisfaction</h3>
                  <p className="text-gray-600">Your satisfaction is our priority, and we work to exceed your expectations.</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary"
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}