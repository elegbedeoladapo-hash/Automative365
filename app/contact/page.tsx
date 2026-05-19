import Navbar from '@/components/navigation/Navbar';
import ContactForm from '@/components/sections/ContactForm';
import Footer from '@/components/sections/Footer';

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen pt-20">
      <Navbar />
      <ContactForm />

      {/* Map Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-dark rounded-3xl overflow-hidden h-[500px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.1!2d-80.9!3d46.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDMwJzAwLjAiTiA4MMKwNTQnMDAuMCJX!5e0!3m2!1sen!2sca!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-8 left-8 glass-dark rounded-2xl px-6 py-4">
              <p className="text-sm text-white/60 mb-1">Visit Us</p>
              <p className="font-bold">Greater Sudbury, ON</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}