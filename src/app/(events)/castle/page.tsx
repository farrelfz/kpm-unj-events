import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Speakers } from "@/components/sections/Speakers";
import { ConferenceScope } from "@/components/sections/ConferenceScope";
import { ImportantDates } from "@/components/sections/ImportantDates";
import { Publications } from "@/components/sections/Publications";
import { RegistrationFee } from "@/components/sections/RegistrationFee";
import { RegistrationGuide } from "@/components/sections/RegistrationGuide";
import { Archives } from "@/components/sections/Archives";
import { Sponsorship } from "@/components/sections/Sponsorship";
import { ContactUs } from "@/components/sections/ContactUs";

export default function CastlePage() {
  return (
    <>
      <Hero />
      <About />
      <Speakers />
      <ConferenceScope />
      <ImportantDates />
      <Publications />
      <RegistrationFee />
      <RegistrationGuide />
      <Archives />
      <Sponsorship />
      <ContactUs />
    </>
  );
}
