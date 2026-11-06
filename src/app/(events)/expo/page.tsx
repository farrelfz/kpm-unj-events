import { ExpoHero } from "@/components/sections/expo/ExpoHero";
import { ExpoPlatforms } from "@/components/sections/expo/ExpoPlatforms";
import { ExpoTimeline } from "@/components/sections/expo/ExpoTimeline";
import { ExpoGallery } from "@/components/sections/expo/ExpoGallery";
import { ExpoAbout } from "@/components/sections/expo/ExpoAbout";

export default function ExpoPage() {
  return (
    <>
      <ExpoHero />
      <ExpoPlatforms />
      <ExpoTimeline />
      <ExpoGallery />
      <ExpoAbout />
    </>
  );
}
