import { ProfileCard } from "@/components/profile-card";

export default function Home() {
  return (
    <div 
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/back.jpg')"
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10">
        <ProfileCard />
      </div>
    </div>
  );
};