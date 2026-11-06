import { SiteHeader, SiteFooter } from "@/components/layout/SiteHeader";
import { getEvent } from "@/content/events";

const skillNav = [
  { name: "About", href: "#about" },
  { name: "Speakers", href: "#speakers" },
  { name: "Schedule", href: "#schedule" },
  { name: "Registration", href: "#registration" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" }
];

export default function SkillLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const event = getEvent("skill");
  return (
    <div style={{ ["--accent" as string]: event.accentColor } as React.CSSProperties}>
      <SiteHeader activeEvent="skill" navLinks={skillNav} />
      <main className="min-h-screen">{children}</main>
      <SiteFooter />
    </div>
  );
}
