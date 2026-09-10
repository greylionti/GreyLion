import React from 'react';
import { CHARTER_MODELS } from './data';

export default function InvestmentCharterModels() {
  return (
    <div className="mb-14">
      <h3 className="flex items-center gap-3 font-[family-name:var(--font-space-grotesk)] text-xl font-extrabold text-white mb-6">
        <span className="h-px w-10 flex-none bg-gradient-to-r from-primary-hover/70 to-transparent" />
        Modelos de Negocio en Fletamento
        <span className="text-[10.5px] font-bold uppercase tracking-[0.12em] text-text-muted">Core Business</span>
      </h3>

      <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-1">
        {CHARTER_MODELS.map((model) => (
          <article
            key={model.num}
            className="relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-6 transition-colors duration-300 hover:border-primary-hover/50"
          >
            <span
              className="absolute top-1 right-4 font-[family-name:var(--font-space-grotesk)] text-[52px] font-extrabold leading-none text-white/5 select-none"
              aria-hidden="true"
            >
              {model.num}
            </span>
            <span className="relative z-10 mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary-hover [&>svg]:h-6 [&>svg]:w-6">
              <model.icon strokeWidth={2} aria-hidden="true" />
            </span>
            <p className="relative z-10 mb-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-primary-hover">
              {model.subtitle}
            </p>
            <h4 className="relative z-10 mb-2 text-[17px] font-bold text-white">{model.title}</h4>
            <p className="relative z-10 text-[13px] leading-[1.6] text-text-gray">{model.desc}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
