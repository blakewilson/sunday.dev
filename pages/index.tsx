import Head from "next/head";
import Link from "../components/Link";
import config from "../config.mjs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>{config.siteTitle ?? config.siteName}</title>

        {config.siteDescription && (
          <meta name="description" content={config.siteDescription} />
        )}
      </Head>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="max-w-xl px-6">
          <div className="flex flex-col items-center justify-center mb-8">
            <img
              width={80}
              height={80}
              className="block h-20 w-20 rounded-full mb-4"
              src={config.avatarUrl}
              alt="My Avatar"
            />

            {config.logoDarkUrl === undefined &&
              config.logoLightUrl === undefined && (
                <h1 className="text-4xl font-bold">{config.siteName}</h1>
              )}

            {config.logoWidth && config.logoHeight && (
              <>
                {config.logoLightUrl && (
                  <Image
                    src={config.logoLightUrl}
                    className="hidden dark:block max-w-full"
                    alt="My Logo"
                    width={config.logoWidth}
                    height={config.logoHeight}
                  />
                )}

                {config.logoDarkUrl && (
                  <Image
                    src={config.logoDarkUrl}
                    className="dark:hidden block max-w-full"
                    alt="My Logo"
                    width={config.logoWidth}
                    height={config.logoHeight}
                  />
                )}
              </>
            )}
          </div>

          {config.links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              showFavicon={config.showLinkFavicons}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
