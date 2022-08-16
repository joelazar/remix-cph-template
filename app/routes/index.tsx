import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="black_remixcph.svg"
                alt="Remix Copenhagen"
              />
            </div>
            <div className="relative space-y-32 px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
              <h1 className="pt-96 text-center text-3xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                <Link
                  to="problem"
                  className="block uppercase text-red-400 underline drop-shadow-md"
                >
                  Title of the talk
                </Link>
              </h1>
              <span />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
          <div className="mt-6 flex flex-wrap justify-center gap-8">
            {[
              {
                src: "meetup.svg",
                alt: "Meetup",
                href: "https://www.meetup.com/remix-copenhagen/",
              },
              {
                src: "discord.svg",
                alt: "Discord",
                href: "https://discord.gg/X8guzTTN",
              },
              {
                src: "slack.svg",
                alt: "Slack",
                href: "https://remixcopenhagen.slack.com/",
              },
            ].map((img) => (
              <a
                key={img.href}
                href={img.href}
                className="flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
              >
                <img alt={img.alt} src={img.src} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
