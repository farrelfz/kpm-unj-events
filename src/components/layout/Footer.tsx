import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="container px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-slate-500">© 2026 CASTLE KPM UNJ. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-slate-600">
            <a href="#about" className="hover:text-primary">
              About
            </a>
            <a href="#speakers" className="hover:text-primary">
              Speakers
            </a>
            <a href="#scope" className="hover:text-primary">
              Scope
            </a>
            <a href="#important-dates" className="hover:text-primary">
              Dates
            </a>
            <a href="#publications" className="hover:text-primary">
              Publications
            </a>
            <a href="#registration" className="hover:text-primary">
              Registration
            </a>
            <a href="#registration-fee" className="hover:text-primary">
              Fee
            </a>
            <Link href="/committee" className="hover:text-primary">
              Committee
            </Link>
            <Link href="/faq" className="hover:text-primary">
              FAQ
            </Link>
            <a href="#archives" className="hover:text-primary">
              Archives
            </a>
            <a href="#sponsorship" className="hover:text-primary">
              Sponsorship
            </a>
            <a href="#contact" className="hover:text-primary">
              Contact
            </a>
            <Link href="/archives" className="hover:text-primary">
              All Archives
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
