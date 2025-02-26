
import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: "College Fest 2023",
      category: "Event Marketing",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      description: "Complete marketing campaign for annual college festival"
    },
    {
      title: "Tech Summit",
      category: "Marketing Reel",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
      description: "Promotional video campaign for university tech event"
    },
    {
      title: "Cultural Night",
      category: "Event Poster",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      description: "Series of posters for cultural event"
    },
    {
      title: "Sports Week",
      category: "Full Package",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
      description: "Comprehensive marketing for inter-college sports event"
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 mb-12">Check out our recent work</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-primary font-semibold text-sm">{project.category}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
