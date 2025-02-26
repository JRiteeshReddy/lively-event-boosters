
import React from 'react';

const Team = () => {
  const team = [
    {
      name: "Rahul Sharma",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "10+ years of experience in event marketing and creative direction"
    },
    {
      name: "Priya Patel",
      role: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      bio: "Expert in digital marketing and social media campaigns"
    },
    {
      name: "Arjun Kumar",
      role: "Video Editor",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      bio: "Specialist in creating engaging marketing reels and video content"
    },
    {
      name: "Ananya Singh",
      role: "Graphic Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Creative professional with expertise in poster and brand design"
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
          <p className="text-xl text-gray-600 mb-12">The creative minds behind your successful events</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-primary font-semibold mt-1">{member.role}</p>
                <p className="text-gray-600 mt-2">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
