import React from 'react';
import ServiceCard from './ServiceCard';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Construction & Repairs',
      description: 'Framing, insulation, drywall installation, tape and mudding, texturing, and painting for both interiors and exteriors.',
      icon: 'home',
      imageRequest: 'construction worker installing drywall'
    },
    {
      id: 2,
      title: 'Flooring & Tiling',
      description: 'Professional installation of tile and aluminum flooring with precision for a beautiful finish.',
      icon: 'square',
      imageRequest: 'professional installing tile flooring'
    },
    {
      id: 3,
      title: 'Electrical Installations',
      description: 'Installing ceiling fans, light switches, and custom TV stands to improve your home functionality.',
      icon: 'bolt',
      imageRequest: 'electrician installing ceiling fan'
    },
    {
      id: 4,
      title: 'Exterior Enhancements',
      description: 'Fixing patios, applying stucco and cement, and improving the façade of your house.',
      icon: 'home-alt',
      imageRequest: 'worker repairing the exterior of a house'
    },
    {
      id: 5,
      title: 'Roofing Repairs',
      description: 'Specialized work on shingle roofing to keep your home secure and protected from the elements.',
      icon: 'chevron-up',
      imageRequest: 'worker repairing roof shingles'
    },
    {
      id: 6,
      title: 'Cabinetry & Painting',
      description: 'Repairing, painting, and enhancing cabinets for a refreshed look in your kitchen or bathroom.',
      icon: 'brush',
      imageRequest: 'painter painting kitchen cabinets'
    },
    {
      id: 7,
      title: 'Plumbing & Fixtures',
      description: 'Fixing water leaks and installing essential fixtures like toilets, sinks, and faucets.',
      icon: 'droplet',
      imageRequest: 'plumber fixing sink pipes'
    },
    {
      id: 8,
      title: 'Demolition Services',
      description: 'Safe and efficient demolition for remodeling or preparation projects.',
      icon: 'hammer',
      imageRequest: 'construction worker doing demolition with sledgehammer'
    }
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container-padding mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We specialize in providing tailored solutions to meet your needs while working within your budget.
            From small repairs to large-scale projects, we deliver exceptional craftsmanship.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}