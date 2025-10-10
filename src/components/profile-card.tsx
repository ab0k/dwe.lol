import { CardLinks } from "@/components/card-links";
import { EasterEgg } from "@/components/easter-egg";
import GalleryPopup from "@/components/gallery";
import { SocialMediaLinks } from "@/components/social-media-links";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import BadgesBar from "@/components/badge";

export function ProfileCard() {
  return (
    <Card className="relative w-full max-w-md p-6 space-y-2 overflow-hidden rounded-2xl">
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <GalleryPopup />
        </div>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <EasterEgg>
          <Avatar className="size-25">
            <AvatarImage
              src={
                "https://avatars.githubusercontent.com/u/209400652?s=400&u=f8f432941b4fd729c6eb638e472be205f2737d5a&v=4"
              }
              alt="Profile Picture"
            />

            <AvatarFallback>T</AvatarFallback>
          </Avatar>
        </EasterEgg>

        <div className="flex flex-col items-center">
          <h1 className="text-lg font-bold">Thiago</h1>
        </div>

        <BadgesBar />

        <p className="text-center">Full-Stack Developer</p>
      </div>

      <CardLinks />
      <SocialMediaLinks />
    </Card>
  );
}
