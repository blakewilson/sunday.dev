import NextLink from "next/link";
import { PropsWithChildren } from "react";
import Image from "next/image";

export type LinkProps = PropsWithChildren<{
  href: string;
  showFavicon?: boolean;
}>;

export default function Link({
  href,
  showFavicon = true,
  children,
}: LinkProps) {
  const url = new URL(href);
  const faviconUrl = `${url.origin}/favicon.ico`;

  return (
    <div className="w-full mb-4">
      <NextLink
        href={href}
        target="_blank"
        className="flex text-lg items-center rounded-md border border-transparent bg-stone-200 dark:bg-stone-900 px-4 py-2 font-medium text-stone-700 dark:text-stone-400 hover:bg-stone-300 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-900 dark:focus:ring-stone-300 focus:ring-offset-2"
      >
        {showFavicon && (
          <Image
            src={faviconUrl}
            width={32}
            height={32}
            alt={`${url.host} favicon`}
            className="w-8 h-8 mr-4"
          />
        )}

        {children}
      </NextLink>
    </div>
  );
}
