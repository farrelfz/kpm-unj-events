import { SkillHero } from "@/components/sections/skill/SkillHero";
import { SkillAbout } from "@/components/sections/skill/SkillAbout";
import { SkillSpeakers } from "@/components/sections/skill/SkillSpeakers";
import { SkillSchedule } from "@/components/sections/skill/SkillSchedule";
import { SkillRegistration } from "@/components/sections/skill/SkillRegistration";
import { SkillFAQ } from "@/components/sections/skill/SkillFAQ";
import { SkillContact } from "@/components/sections/skill/SkillContact";

export default function SkillPage() {
  return (
    <>
      <SkillHero />
      <SkillAbout />
      <SkillSpeakers />
      <SkillSchedule />
      <SkillRegistration />
      <SkillFAQ />
      <SkillContact />
    </>
  );
}
