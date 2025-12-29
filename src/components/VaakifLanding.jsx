import React, { useState, useEffect } from 'react';
import { Heart, Users, Award, MapPin, Calendar, TrendingUp, Check, Star, ArrowRight, Menu, X, Search, Filter, Clock, Target, Sparkles, Shield } from 'lucide-react';

const VaakifLanding = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCause, setSelectedCause] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [activeTab, setActiveTab] = useState('volunteers');
  const [counts, setCounts] = useState({ volunteers: 0, ngos: 0, hours: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const targetCounts = { volunteers: 15420, ngos: 342, hours: 89650 };
    const duration = 2000;
    const steps = 60;
    const increment = {
      volunteers: targetCounts.volunteers / steps,
      ngos: targetCounts.ngos / steps,
      hours: targetCounts.hours / steps
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      if (step <= steps) {
        setCounts({
          volunteers: Math.floor(increment.volunteers * step),
          ngos: Math.floor(increment.ngos * step),
          hours: Math.floor(increment.hours * step)
        });
      } else {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const causes = [
    { id: 1, name: 'Education', icon: '📚', color: 'from-blue-500 to-indigo-600' },
    { id: 2, name: 'Environment', icon: '🌱', color: 'from-green-500 to-teal-600' },
    { id: 3, name: 'Healthcare', icon: '🏥', color: 'from-red-500 to-pink-600' },
    { id: 4, name: 'Animal Welfare', icon: '🐾', color: 'from-amber-500 to-orange-600' },
    { id: 5, name: 'Community', icon: '🤝', color: 'from-purple-500 to-violet-600' },
    { id: 6, name: 'Arts & Culture', icon: '🎨', color: 'from-pink-500 to-rose-600' }
  ];

  const featuredNGOs = [
    { id: 1, name: 'Green Earth Initiative', cause: 'Environment', verified: true, rating: 4.9, volunteers: 234, image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop', csr: true },
    { id: 2, name: 'Teach For Tomorrow', cause: 'Education', verified: true, rating: 4.8, volunteers: 189, image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop', csr: false },
    { id: 3, name: 'Hope Healthcare', cause: 'Healthcare', verified: true, rating: 4.9, volunteers: 156, image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop', csr: true }
  ];

  const stories = [
    { id: 1, name: 'Priya S.', role: 'Volunteer', hours: 45, story: 'Teaching kids changed my perspective on life', avatar: '👩', badge: '⭐' },
    { id: 2, name: 'Arjun M.', role: 'Volunteer', hours: 67, story: 'Found my purpose through environmental work', avatar: '👨', badge: '🌟' },
    { id: 3, name: 'Neha K.', role: 'Volunteer', hours: 89, story: 'Community service gave me real connections', avatar: '👧', badge: '💫' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">VAAKIF</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#discover" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Discover</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">How It Works</a>
              <a href="#stories" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Stories</a>
              <button className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Sign In</button>
              <button className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#discover" className="block text-gray-700 hover:text-indigo-600 font-medium">Discover</a>
              <a href="#how-it-works" className="block text-gray-700 hover:text-indigo-600 font-medium">How It Works</a>
              <a href="#stories" className="block text-gray-700 hover:text-indigo-600 font-medium">Stories</a>
              <button className="block w-full text-left text-gray-700 hover:text-indigo-600 font-medium">Sign In</button>
              <button className="w-full px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-100 rounded-full mb-6 animate-bounce">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-600">Join 15K+ Changemakers</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Volunteer where
              </span>
              <br />
              <span className="relative inline-block">
                you actually matter
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C102 4 202 4 298 10" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Connect with verified NGOs. Make real impact. Track your journey. Build a portfolio that matters.
            </p>

            {/* Quick Action Tabs */}
            <div className="flex justify-center space-x-4 mb-8">
              <button 
                onClick={() => setActiveTab('volunteers')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'volunteers' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              >
                I want to volunteer
              </button>
              <button 
                onClick={() => setActiveTab('ngos')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'ngos' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              >
                I'm an NGO
              </button>
            </div>

            {/* Location + Cause Selector */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6">
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Enter your location"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                  />
                </div>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search causes or NGOs"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Cause Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
                {causes.map((cause) => (
                  <button
                    key={cause.id}
                    onClick={() => setSelectedCause(cause.id === selectedCause ? null : cause.id)}
                    className={`p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                      selectedCause === cause.id
                        ? `bg-gradient-to-br ${cause.color} text-white shadow-lg`
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="text-3xl mb-2">{cause.icon}</div>
                    <div className="text-xs font-semibold">{cause.name}</div>
                  </button>
                ))}
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Find Opportunities</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-5xl font-bold mb-2">{counts.volunteers.toLocaleString()}+</div>
              <div className="text-indigo-200 text-lg">Active Volunteers</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-5xl font-bold mb-2">{counts.ngos}+</div>
              <div className="text-indigo-200 text-lg">Verified NGOs</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-5xl font-bold mb-2">{counts.hours.toLocaleString()}+</div>
              <div className="text-indigo-200 text-lg">Hours Contributed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured NGOs */}
      <section id="discover" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Verified NGOs</h2>
            <p className="text-xl text-gray-600">Trusted organizations making real impact</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredNGOs.map((ngo) => (
              <div key={ngo.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="relative h-48 overflow-hidden">
                  <img src={ngo.image} alt={ngo.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  {ngo.csr && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-bold">
                      CSR Partner
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{ngo.name}</h3>
                    {ngo.verified && (
                      <div className="flex items-center space-x-1 bg-green-100 px-2 py-1 rounded-full">
                        <Shield className="w-4 h-4 text-green-600" />
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{ngo.cause}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
                      <span className="font-semibold">{ngo.rating}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{ngo.volunteers} volunteers</span>
                    </div>
                  </div>
                  <button className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Stories */}
      <section id="stories" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Stories That Inspire</h2>
            <p className="text-xl text-gray-600">Real volunteers, real impact</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story) => (
              <div key={story.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-2xl">
                    {story.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-bold text-gray-900">{story.name}</h3>
                      <span className="text-lg">{story.badge}</span>
                    </div>
                    <p className="text-sm text-gray-600">{story.hours} hours contributed</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{story.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to make an impact?</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of volunteers creating real change</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Join as Volunteer
            </button>
            <button className="px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-600 rounded-full font-semibold text-lg hover:bg-indigo-50 transition-all duration-300">
              Register Your NGO
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5" fill="white" />
                </div>
                <span className="text-xl font-bold">VAAKIF</span>
              </div>
              <p className="text-gray-400">Empowering volunteers to create lasting social impact</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <div className="space-y-2 text-gray-400">
                <div>Find Opportunities</div>
                <div>How It Works</div>
                <div>Success Stories</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">For NGOs</h4>
              <div className="space-y-2 text-gray-400">
                <div>Register</div>
                <div>Verification Process</div>
                <div>Resources</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <div className="space-y-2 text-gray-400">
                <div>Help Center</div>
                <div>Contact Us</div>
                <div>Privacy Policy</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 VAAKIF. Made with ❤️ for changemakers</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VaakifLanding;