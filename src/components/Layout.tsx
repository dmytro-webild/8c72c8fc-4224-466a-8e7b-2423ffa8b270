import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarInline from '@/components/ui/NavbarInline';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#hero"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  {
    "name": "Gallery",
    "href": "#gallery"
  },
  {
    "name": "Location",
    "href": "#location"
  }
];

  return (
    <StyleProvider buttonVariant="expand" siteBackground="noise" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarInline
      logo="Sunie Thai"
      ctaButton={{
        text: "Book Now",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimple
      brand="Sunie Thai Massage"
      columns={[
        {
          title: "Quick Links",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Opening Hours",
          items: [
            {
              label: "Mon-Sun: 09:00-21:00",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 Sunie Thai Massage. All rights reserved."
      links={[
        {
          label: "Privacy",
          href: "#",
        },
        {
          label: "Terms",
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
