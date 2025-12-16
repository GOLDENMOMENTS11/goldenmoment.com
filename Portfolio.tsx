import { ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    category: 'Wedding',
    title: 'Elegant Garden Wedding',
    image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: '300 guests, outdoor ceremony'
  },
  {
    category: 'Corporate',
    title: 'Tech Conference 2024',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: '500+ attendees, product launch'
  },
  {
    category: 'Birthday',
    title: '50th Anniversary Celebration',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: '150 guests, luxury venue'
  },
  {
    category: 'Wedding',
    title: 'Royal Palace Wedding',
    image: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: '500 guests, grand celebration'
  },
  {
    category: 'Corporate',
    title: 'Annual Gala Dinner',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: '200 executives, awards ceremony'
  },
  {
    category: 'Political',
    title: 'Campaign Rally',
    image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: '5000+ supporters, outdoor event'
  }
];

function Portfolio() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A glimpse of the memorable events we've created for our clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="inline-block px-3 py-1 bg-amber-600 rounded-full text-xs font-semibold mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200 mb-3">{item.description}</p>
                  <button className="flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-amber-200 transition-colors">
                    View Details <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-6 bg-white">
                <div className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold mb-2">
                  {item.category}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
