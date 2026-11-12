import { Container } from "./Container";
import { siteConfig } from "@/config";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
      <Container>
        <p>
          © 2026 {siteConfig.name}. Built with Clean Architecture & Next.js 15+
          App Router.
        </p>
      </Container>
    </footer>
  );
}
