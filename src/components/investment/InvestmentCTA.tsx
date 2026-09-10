import React from 'react';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';
import DynamicMedia from '../dynamic-media';
import { CTA_HIGHLIGHTS } from './data';

interface InvestmentCTAProps {
  email: string;
  whatsappUrl: string;
}

export default function InvestmentCTA({ email, whatsappUrl }: InvestmentCTAProps) {
  const mailUrl = `mailto:${email}?subject=${encodeURIComponent('Oportunidad de Inversión - Fletamento Marítimo')}`;

  return (
    <div className="relative isolate overflow-hidden rounded-[28px] border border-white/10 bg-[#04182f]">
      {/* Background: aerial ship photo, bleeding in from the right */}
      <div className="absolute inset-0 z-0">
        <DynamicMedia
          src="/ready_to_explore_this_oportunity.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#04182f_0%,#04182f_46%,rgba(4,24,47,0.75)_66%,rgba(4,24,47,0.15)_100%)]" />
      </div>

      {/* Vertical corner label, echoing the reference design */}
      <span
        aria-hidden="true"
        className="absolute right-5 top-1/2 z-10 -translate-y-1/2 whitespace-nowrap text-[10px] font-extrabold uppercase tracking-[0.32em] text-white/55 [writing-mode:vertical-rl] max-[860px]:hidden"
      >
        Nuevos Horizontes · Mayores Posibilidades
      </span>

      <div className="relative z-10 grid grid-cols-[1.5fr_1fr] items-center gap-10 p-10 max-[860px]:grid-cols-1 max-[860px]:gap-8 max-[600px]:p-6">
        {/* Left: heading + CTAs */}
        <div>
          <span className="mb-3 block text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#5fc1ff]">
            El Momento Es Ahora
          </span>
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(26px,3.4vw,38px)] font-extrabold leading-[1.15] text-white">
            ¿Listo para explorar
            <br />
            <span className="text-primary-hover">esta oportunidad?</span>
          </h3>
          <p className="mt-4 max-w-[460px] text-[14px] leading-[1.7] text-text-gray">
            Nuestro equipo directivo está disponible para compartir el detalle financiero y operativo completo de
            esta propuesta de inversión.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href={mailUrl}
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#0a56a0,#1f8fe0)] px-7 py-3.5 text-sm font-bold text-white no-underline shadow-[0_8px_24px_rgba(15,76,129,0.4)] transition-all duration-300 ease-[ease] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(31,143,224,0.45)]"
            >
              <Mail className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
              Solicitar Propuesta de Inversión
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-bold text-white no-underline transition-all duration-300 ease-[ease] hover:-translate-y-0.5 hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
              Hablar por WhatsApp
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right: trust highlights */}
        <div className="flex flex-col gap-5">
          {CTA_HIGHLIGHTS.map((item) => (
            <div key={item.title} className="flex items-center gap-3.5">
              <span className="grid h-11 w-11 flex-none place-items-center rounded-full border border-primary-hover/50 bg-[rgba(15,76,129,0.25)] text-primary-hover [&>svg]:h-[18px] [&>svg]:w-[18px]">
                <item.icon strokeWidth={2} aria-hidden="true" />
              </span>
              <div>
                <p className="text-[13.5px] font-bold leading-tight text-white">{item.title}</p>
                <p className="mt-0.5 text-[12px] leading-tight text-text-gray">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
