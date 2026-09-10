import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, Compass } from 'lucide-react';
import DynamicMedia from '@/components/dynamic-media';

export const metadata: Metadata = {
  title: 'Página no encontrada | GreyLion Maritime',
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#060d1c]">
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <DynamicMedia
          src="/background_404.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,13,28,0.1)_0%,rgba(6,13,28,0.02)_35%,rgba(6,13,28,0.25)_62%,rgba(6,13,28,0.82)_85%,rgba(6,13,28,0.97)_100%)]" />
      </div>

      {/* Kicker */}
      <div className="relative z-10 mt-12 flex items-center justify-center gap-4 px-5">
        <span className="h-px w-16 bg-white/25" aria-hidden="true" />
        <span className="text-[11px] font-extrabold uppercase tracking-[0.35em] text-white/70">
          Página No Encontrada
        </span>
        <span className="h-px w-16 bg-white/25" aria-hidden="true" />
      </div>

      {/* Handwritten-style annotations over the photo */}
      <div className="pointer-events-none absolute left-[6%] top-[15%] z-10 max-w-[160px] -rotate-3 text-left max-[860px]:hidden">
        <p className="font-[family-name:var(--font-inter)] text-[14px] italic leading-snug text-white/85">
          Ups...
          <br />
          Parece que esta ruta no existe
        </p>
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" className="mt-1 text-white/50" aria-hidden="true">
          <path d="M4 4C6 18 16 30 32 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M24 32L32 34L31 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="pointer-events-none absolute right-[6%] top-[19%] z-10 max-w-[160px] rotate-2 text-left max-[860px]:hidden">
        <p className="font-[family-name:var(--font-inter)] text-[14px] italic leading-snug text-white/85">
          Pero siempre hay un nuevo destino
        </p>
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" className="mt-1 ml-auto -scale-x-100 text-white/50" aria-hidden="true">
          <path d="M4 4C6 18 16 30 32 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M24 32L32 34L31 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Bottom content, pinned to the base of the viewport */}
      <div className="relative z-10 mt-auto flex flex-col items-center px-5 pb-16 pt-40 text-center max-[600px]:pt-28">
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(24px,3.4vw,38px)] font-extrabold leading-[1.25] text-white">
          Parece que este contenedor
          <br className="max-[600px]:hidden" /> <span className="text-primary-hover">no llegó a su destino.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-[500px] text-[14px] leading-[1.7] text-text-gray">
          La página que buscas no existe o ha sido movida, pero tu próxima gran oportunidad sí está aquí.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white no-underline shadow-[0_8px_24px_rgba(15,76,129,0.35)] transition-all duration-300 ease-[ease] hover:-translate-y-0.5 hover:bg-primary-hover"
          >
            <Home className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            Volver al inicio
          </Link>
          <Link
            href="/#servicios"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-bold text-white no-underline transition-all duration-300 ease-[ease] hover:-translate-y-0.5 hover:bg-white/10"
          >
            <Compass className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
            Explorar nuestros servicios
          </Link>
        </div>
      </div>
    </main>
  );
}
