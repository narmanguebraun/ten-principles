import Link from "next/link";

export function Footer() {
  return (
    <footer className="p-8 text-sm">
      Built by Nina Armangué Braun &mdash;{" "}
      <Link href="https://github.com/narmanguebraun/ten-principles">
        View Source
      </Link>
    </footer>
  );
}
