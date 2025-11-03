export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-20">
      <div className="container py-6 text-sm opacity-70">
        © {new Date().getFullYear()} Melquiades Farías · Hecho con Next.js +
        Tailwind
      </div>
    </footer>
  );
}
