import Link from "next/link";
import { Container } from "./Container";
import { ROUTES } from "@/constants";
import { siteConfig } from "@/config";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href={ROUTES.HOME}
          className="flex items-center gap-2 text-lg font-bold"
        >
          <span className="rounded bg-zinc-900 px-2 py-1 text-white dark:bg-zinc-100 dark:text-zinc-900">
            NPN
          </span>
          <span>{siteConfig.name}</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <Link
            href={ROUTES.HOME}
            className="transition-colors hover:text-zinc-950 dark:hover:text-white"
          >
            Trang chủ
          </Link>
          <Link
            href="#architecture"
            className="transition-colors hover:text-zinc-950 dark:hover:text-white"
          >
            Kiến trúc
          </Link>
          <Link
            href="#features"
            className="transition-colors hover:text-zinc-950 dark:hover:text-white"
          >
            Cấu trúc Feature
          </Link>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-zinc-950 dark:hover:text-white"
          >
            GitHub
          </a>
        </nav>
      </Container>
    </header>
  );
}
