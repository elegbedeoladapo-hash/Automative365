import Navbar from '@/components/navigation/Navbar';
import MembershipTiers from '@/components/sections/MembershipTiers';
import Footer from '@/components/sections/Footer';

export default function MembershipPage() {
  return (
    <main className="bg-black min-h-screen pt-20">
      <Navbar />
      <MembershipTiers />
      
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-neutral-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            Member <span className="text-neon-yellow">Benefits</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Climate Control', description: 'State-of-the-art temperature and humidity control to protect your investment', icon: '🌡️' },
              { title: '24/7 Access', description: 'Visit your vehicle anytime with secure biometric access', icon: '🔐' },
              { title: 'Concierge Service', description: 'Personal assistance for all your automotive needs', icon: '🎩' },
              { title: 'Detailing', description: 'Professional detailing services by expert technicians', icon: '✨' },
              { title: 'Track Days', description: 'Exclusive access to private track day events', icon: '🏁' },
              { title: 'Social Events', description: 'Connect with fellow enthusiasts at member-only gatherings', icon: '🥂' },
            ].map((benefit, index) => (
              <div
                key={index}
                className="glass-dark rounded-2xl p-8 hover:bg-white/10 transition-all group cursor-pointer"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-neon-yellow transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}