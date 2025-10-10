import React from "react";
import { Code2, Crown } from "lucide-react";

type BadgeProps = {
  icon: React.ReactNode;
  label: string;
};

const Badge: React.FC<BadgeProps> = ({ icon, label }) => {
  return (
    <div className="relative group flex items-center justify-center rounded-full  hover:bg-black/90 transition cursor-pointer">
      {icon}
      <span className="absolute bottom-full mb-2 hidden group-hover:block text-xs text-white bg-black px-2 py-1 rounded">
        {label}
      </span>
    </div>
  );
};

const BadgesBar: React.FC = () => {
  const badges = [
    { icon: <Crown className="w-5 h-5" />, label: "Owner" },
    { icon: <Code2 className="w-6 h-6" />, label: "Developer" },
  ];

  return (
    <div className="flex gap-3 p-3 rounded-full">
      {badges.map((b, i) => (
        <Badge key={i} icon={b.icon} label={b.label} />
      ))}
    </div>
  );
};

export default BadgesBar;