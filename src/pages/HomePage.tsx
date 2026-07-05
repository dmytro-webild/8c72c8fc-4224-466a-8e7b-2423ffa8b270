import AboutText from '@/components/sections/about/AboutText';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesArrowCards from '@/components/sections/features/FeaturesArrowCards';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricsIconCards from '@/components/sections/metrics/MetricsIconCards';
import TestimonialOverlayCards from '@/components/sections/testimonial/TestimonialOverlayCards';
import { Clock, MapPin, Phone } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboard
      title="Authentic Thai Massage, Rooted in Tradition"
      description="Experience serene, personalized Thai wellness in the heart of Kalmthout. Restorative treatments tailored to your comfort."
      primaryButton={{
        text: "Book Now",
        href: "#contact",
      }}
      secondaryButton={{
        text: "View Services",
        href: "#services",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/buddha-figurine-still-life_23-2150514574.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutText
      title="About Sunie Thai Massage"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesImageBento
      tag="Treatments"
      title="Our Wellness Rituals"
      description="Expertly crafted Thai massage treatments designed to restore balance and relieve tension."
      items={[
        {
          title: "Traditional Thai",
          description: "Classic technique for full-body restoration.",
          imageSrc: "http://img.b2bpic.net/free-photo/shoulder-opening-back-massage-smooth-motion-balance_169016-69007.jpg",
        },
        {
          title: "Deep Tissue",
          description: "Targeted relief for persistent pain points.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-receiving-relaxing-massage-spa_23-2148176890.jpg",
        },
        {
          title: "Relaxation",
          description: "Gentle, calming session to quiet the mind.",
          imageSrc: "http://img.b2bpic.net/free-photo/spa-concept-top-view-beautiful-spa-products-with-place-text-essential-oils-with-beautiful-flowers-towels-spa-salt-hand-made-soap_1220-1193.jpg",
        },
        {
          title: "Foot Reflexology",
          description: "Revitalizing pressure on key foot points.",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-foot-massage-with-oil-heel-toe-relaxation_169016-69500.jpg",
        },
        {
          title: "Herbal Compress",
          description: "Warm, aromatic healing herbs treatment.",
          imageSrc: "http://img.b2bpic.net/free-photo/spa-wellness-setting-with-flowers-towels-bright-composition-brown-table-with-tropical-flowers-dayspa-nature-products-with-coconut_169016-1643.jpg",
        },
        {
          title: "Back & Shoulder",
          description: "Specialized attention for desk fatigue.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-doctor-giving-ct-scan-patient_23-2149341503.jpg",
        },
        {
          title: "Custom Session",
          description: "Personalized therapy for specific needs.",
          imageSrc: "http://img.b2bpic.net/free-photo/photorealistic-wooden-house-interior-with-timber-decor-furnishings_23-2151263507.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialOverlayCards
      tag="Reviews"
      title="Honored by Our Clients"
      description="5.0 rating based on 149 Google reviews."
      testimonials={[
        {
          name: "Els M.",
          role: "Visitor",
          company: "Google Review",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-happy-woman-having-back-massage-while-spending-day-beauty-spa_637285-7424.jpg",
        },
        {
          name: "Jan V.",
          role: "Regular",
          company: "Google Review",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/getting-ready-spa_1098-19902.jpg",
        },
        {
          name: "Sarah K.",
          role: "Client",
          company: "Google Review",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-stylish-woman-posing-fashionable-outfit_23-2149021814.jpg",
        },
        {
          name: "Peter D.",
          role: "Visitor",
          company: "Google Review",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/morning-portrait-pretty-woman-relaxing-bed-after-shower-wearing-bath-robe-towel-her-head-drinking-tasty-tea_291049-2695.jpg",
        },
        {
          name: "Lieve D.",
          role: "Regular",
          company: "Google Review",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-women-selfcare-treatments_23-2149168538.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="gallery" data-section="gallery">
    <SectionErrorBoundary name="gallery">
          <FeaturesArrowCards
      tag="Studio"
      title="Our Ambiance"
      description="Step into a sanctuary of peace."
      items={[
        {
          title: "Reception",
          tags: [
            "Zen",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/spa-relaxation-room_23-2151945668.jpg",
        },
        {
          title: "Treatment Room",
          tags: [
            "Luxury",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-cup-tea-decor-items-light-wooden-table-top-view_169016-3980.jpg",
        },
        {
          title: "Details",
          tags: [
            "Decor",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-spa-frame-with-copy-space-concept_23-2148290971.jpg",
        },
        {
          title: "Sanctuary",
          tags: [
            "Calm",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/autumn-decoration-with-herbs-spoon_23-2147709574.jpg",
        },
        {
          title: "Ambiance",
          tags: [
            "Warm",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/harmonic-decoration_23-2147621411.jpg",
        },
        {
          title: "Reflection",
          tags: [
            "Peace",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-organic-soap-bars_23-2150533278.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="location" data-section="location">
    <SectionErrorBoundary name="location">
          <MetricsIconCards
      tag="Visit Us"
      title="Location & Hours"
      description="Thillostraat 33, 2920 Kalmthout, Belgium. Today: Open until 21:00."
      metrics={[
        {
          icon: MapPin,
          title: "Address",
          value: "Thillostraat 33",
        },
        {
          icon: Clock,
          title: "Open Today",
          value: "09:00 - 21:00",
        },
        {
          icon: Phone,
          title: "Call",
          value: "0476 02 04 37",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Book Now"
      text="Ready to experience profound relaxation? Contact us for bookings."
      primaryButton={{
        text: "Call 0476 02 04 37",
        href: "tel:0476020437",
      }}
      secondaryButton={{
        text: "Visit Website",
        href: "https://suniethaimassage.be",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
