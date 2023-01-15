import NextLink from "next/link";
import { PropsWithChildren } from "react";

export type LinkProps = PropsWithChildren<{
  href: string;
  showFavicon?: boolean;
}>;

export default function Link({
  href,
  showFavicon = true,
  children,
}: LinkProps) {
  const faviconUrl = `${new URL(href).origin}/favicon.ico`;

  return (
    <div className="w-full mb-4">
      <NextLink
        href={href}
        className="flex text-lg items-center rounded-md border border-transparent bg-stone-200 dark:bg-stone-900 px-4 py-2 font-medium text-stone-700 dark:text-stone-400 hover:bg-stone-300 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-900 dark:focus:ring-stone-300 focus:ring-offset-2"
      >
        {showFavicon && <img src={faviconUrl} className="w-8 h-8 mr-4" />}

        {children}
      </NextLink>
    </div>
  );
}
