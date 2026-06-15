import Container from "./container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">
          
          <p>
            © 2026 Shubham Kumar. All rights reserved.
          </p>

          <p>
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
}