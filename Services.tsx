import { Heart, Cake, Briefcase, Users, Sparkles, Music, Utensils, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Weddings',
    description: 'Create the wedding of your dreams with our comprehensive planning, stunning decor, and flawless execution.',
    features: ['Venue Selection', 'Theme Design', 'Catering', 'Photography']
  },
  {
    icon: Cake,
    title: 'Birthday Parties',
    description: 'Celebrate life\'s milestones with unforgettable birthday parties tailored to your style and preferences.',
    features: ['Custom Themes', 'Entertainment', 'Decorations', 'Catering']
  },
  {
    icon: Briefcase,
    title: 'Corporate Events',
    description: 'Professional event management for conferences, seminars, team building, and corporate celebrations.',
    features: ['Conferences', 'Product Launches', 'Team Building', 'Workshops']
  },
  {
    icon: Users,
    title: 'Political Events',
    description: 'Strategic planning and execution for rallies, campaigns, and political gatherings of any scale.',
    features: ['Stage Setup', 'Crowd Management', 'Audio Systems', 'Logistics']
  }
];

const offerings = [
  {
    icon: Sparkles,
    title: 'Event Decor',
    description: 'Stunning decorations that transform venues into magical spaces'
  },
  {
    icon: Utensils,
    title: 'Catering Services',
    description: 'Delicious cuisine from top chefs for every palate and dietary need'
  },
  {
    icon: Music,
    title: 'Sound Systems',
    description: 'Professional audio equipment for crystal-clear sound quality'
  },
  {
    icon: Lightbulb,
    title: 'Lighting Design',
    description: 'Creative lighting solutions to set the perfect ambiance'
  }
];

function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Event Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive event management solutions for every occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-amber-100 hover:border-amber-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">
            Complete Event Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((offering, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <offering.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{offering.title}</h4>
                <p className="text-amber-50 text-sm leading-relaxed">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
