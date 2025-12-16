import { Target, Award, Users, CheckCircle } from 'lucide-react';

function About() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Golden Moment?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We are a passionate team of event professionals dedicated to creating extraordinary experiences.
              With years of expertise and a commitment to excellence, we turn your vision into reality.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Approach</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every event is unique. We work closely with you to understand your vision and bring it to life with creativity and precision.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Award-Winning Excellence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our commitment to quality has earned us recognition as one of the leading event management companies in the region.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our experienced professionals handle every detail with expertise, ensuring seamless execution from start to finish.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h3>
              <div className="space-y-4">
                {[
                  'End-to-end event planning and management',
                  'Custom theme design and decoration',
                  'Premium catering services',
                  'Professional lighting and sound systems',
                  'Photography and videography',
                  'Entertainment and DJ services',
                  'Venue selection and booking',
                  'Guest management and coordination',
                  'Budget planning and optimization',
                  'On-site event supervision'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl -z-10 opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full -z-10 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
