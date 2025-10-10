import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Instagram, Images } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://instagram.com/thiagopitass/",
    label: "Instagram",
    icon: <Instagram />,
  },
  {
    href: "https://github.com/ab0k",
    label: "GitHub",
    icon: <SiGithub />,
  },
];

export function SocialMediaLinks() {
  return (
    <div className="flex items-center justify-center space-x-2">
      {socialLinks.map(({ href, label, icon }) => (
        <Tooltip key={label}>
          <TooltipTrigger>
            <Button asChild variant="outline" size="icon">
              <Link href={href} target="_blank" rel="noopener noreferrer">
                {icon}
              </Link>
            </Button>
          </TooltipTrigger>

          <TooltipContent>
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
