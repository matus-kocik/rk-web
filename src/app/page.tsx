import { ProfileImage } from "@/components/ProfileImage";
import { SocialLink } from "@/components/SocialLink";

type Profile = {
  fullName: string;
  profileImage: string;
};

type Social = {
  name: string;
  url: string;
  icon: string;
  info: string;
};

type Data = {
  profile: Profile;
  social: Social[];
};

export default async function HomePage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://matus-kocik-web-fe.vercel.app";
  const res = await fetch(`${baseUrl}/data.json`, { cache: "no-store" });

  if (!res.ok) {
    return <div className="text-red-500">Failed to fetch data.</div>;
  }

  const data: Data = await res.json();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200 p-4">
      <div className="container mx-auto max-w-xl">
        {/* Welcome Section */}
        <section className="py-12">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Hello, I am {data.profile.fullName}
            </h1>
          </div>
        </section>

        {/* Profile Section */}
        <section className="py-8">
          <div className="flex flex-col items-center justify-center">
            <ProfileImage src={data.profile.profileImage} alt={`Profile of ${data.profile.fullName}`} />
          </div>
        </section>

        {/* Links Section */}
        <section className="py-8">
          <div className="flex flex-col items-center space-y-6 max-w-lg mx-auto">
            {data.social.map((social, index) => (
              <SocialLink key={index} {...social}/>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}