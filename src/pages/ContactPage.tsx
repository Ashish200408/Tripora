import { Mail, Phone, MapPin } from 'lucide-react'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

// =========================================================
// Contact Page – Placeholder
// Phase 6/7 will add full validated contact form
// =========================================================

export default function ContactPage() {
  return (
    <section className="section-padding">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left: Info */}
          <div>
            <p className="text-sm tracking-widest uppercase text-[#B68C63] mb-4 font-medium">
              Get in Touch
            </p>
            <h1 className="mb-4">Let's Plan<br /><em>Your Journey.</em></h1>
            <p className="text-[#4A6572] leading-relaxed mb-8">
              Whether you're ready to book, need inspiration, or have a question about one of our packages — our travel specialists are here to help.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#E9E2D5] flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-[#142A32]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#142A32] mb-0.5">Email</p>
                  <p className="text-sm text-[#4A6572]">hello@tripora.travel</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#E9E2D5] flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-[#142A32]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#142A32] mb-0.5">Phone</p>
                  <p className="text-sm text-[#4A6572]">+1 (800) TRIPORA</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#E9E2D5] flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-[#142A32]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#142A32] mb-0.5">Office</p>
                  <p className="text-sm text-[#4A6572]">New York · London · Singapore</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Placeholder form */}
          <div className="bg-[#F8F7F3] p-6 lg:p-8 rounded-lg border border-[#142A32]/8">
            <h2 className="text-xl mb-6">Send Us a Message</h2>

            {/* NOTE: Full validation with React Hook Form + Zod will be added in Phase 6/7 */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-4"
              noValidate
            >
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-[#142A32] mb-1.5">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 text-sm bg-white border border-[#142A32]/15 rounded focus:outline-none focus:ring-2 focus:ring-[#142A32]/20 focus:border-[#142A32]/40 transition-colors placeholder:text-[#4A6572]/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#142A32] mb-1.5">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 text-sm bg-white border border-[#142A32]/15 rounded focus:outline-none focus:ring-2 focus:ring-[#142A32]/20 focus:border-[#142A32]/40 transition-colors placeholder:text-[#4A6572]/50"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#142A32] mb-1.5">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 text-sm bg-white border border-[#142A32]/15 rounded focus:outline-none focus:ring-2 focus:ring-[#142A32]/20 focus:border-[#142A32]/40 transition-colors placeholder:text-[#4A6572]/50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#142A32] mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your dream journey..."
                  className="w-full px-4 py-3 text-sm bg-white border border-[#142A32]/15 rounded focus:outline-none focus:ring-2 focus:ring-[#142A32]/20 focus:border-[#142A32]/40 transition-colors placeholder:text-[#4A6572]/50 resize-none"
                />
              </div>
              <p className="text-xs text-[#4A6572] italic">
                Form submission with validation will be completed in Phase 6.
              </p>
              <Button type="submit" variant="primary" size="md" fullWidth disabled>
                Send Message (Coming Soon)
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
