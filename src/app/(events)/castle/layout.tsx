import { SiteHeader, SiteFooter } from "@/components/layout/SiteHeader";
import { getEvent } from "@/content/events";

const castleNav = [
  { name: "About", href: "#about" },
  { name: "Speakers", href: "#speakers" },
  { name: "Scope", href: "#scope" },
  { name: "Dates", href: "#important-dates" },
  { name: "Publications", href: "#publications" },
  { name: "Archives", href: "#archives" },
  { name: "Contact", href: "#contact" }
];

export default function CastleLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const event = getEvent("castle");
  return (
    <div style={{ ["--accent" as string]: event.accentColor } as React.CSSProperties}>
      <SiteHeader activeEvent="castle" navLinks={castleNav} />
      <main className="min-h-screen">{children}</main>
      <SiteFooter />
    </div>
  );
}
