import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface CardLinksProps {
  href: string;
  icon: ReactNode;
  text: string;
};

const cardLinks: CardLinksProps[] = [
  {
    href: "",
    icon: <Heart />,
    text: "dwe.lol | Development"
  }
];

function CardLink({
  href,
  icon,
  text,
}: CardLinksProps) {
  return (
    <Button asChild variant="outline" className="w-full">
      <Link href={href} rel="noopener noreferrer" className="flex items-center gap-2">
        {icon}
        <span>
          {text}
        </span>
      </Link>
    </Button>
  );
};

export function CardLinks() {
	return (
		<div className="space-y-2">
			{cardLinks.map(({
				href,
				icon,
				text
			}) => (
				<CardLink key={href} href={href} icon={icon} text={text} />
			))}
		</div>
	);
};