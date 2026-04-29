import { Send, Mail, MapPin, CheckCircle, CircleX } from 'lucide-react';
import Button from '../components/Button';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'motion/react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'luis.aguiar.se@outlook.com',
    href: 'mailto:luis.aguiar.se@outlook.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Madeira',
    href: '#',
  },
];

export default function Contact() {
  const [state, handleSubmit] = useForm('mykogzkn');

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="glass p-8 rounded-3xl border border-primary/30">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name..."
                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                rows={5}
                id="message"
                name="message"
                required
                placeholder="Your message..."
                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <Button
              className="w-full"
              type="submit"
              size="lg"
              disabled={state.submitting}
            >
              Send Message <Send />
            </Button>

            {state.succeeded && (
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex items-center gap-3
                     p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400"
              >
                <CheckCircle className="w-5 h-5 shrink-0" />{' '}
                <p>Message sent successfully! I'll get back to you soon</p>
              </motion.div>
            )}
            {state.errors && state.errors.length > 0 && (
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 space-y-1"
              >
                {state.errors.map((error, i) => (
                  <div>
                    <CircleX className="w-5 h-5 shrink-0" />
                    <p key={i}>{error.message}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </form>
        </div>
        {/* Contact Info */}
        <div className="space-y-6 animate-fade-in animation-delay-400">
          <div className="glass rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Availability Card */}
          <div className="glass rounded-3xl p-8 border border-primary/30">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="font-medium">Currently Available</span>
            </div>
            <p className="text-muted-foreground text-sm">
              I'm currently open to new opportunities and exciting projects.
              Whether you need a full-time engineer or a freelance consultant,
              let's talk!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
