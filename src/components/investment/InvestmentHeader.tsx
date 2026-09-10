import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function InvestmentHeader() {
  return (
    <div className="flex flex-col items-center text-center gap-5 mb-16 max-w-[820px] mx-auto">
      <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,163,255,0.35)] bg-[rgba(0,163,255,0.08)] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#5fc1ff]">
        <TrendingUp className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
        Oportunidad de Inversión
      </span>

      <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(30px,4vw,50px)] font-extrabold leading-[1.12] tracking-[-1px] text-white">
        Expansión de Flota y <span className="text-primary-hover">Operaciones de Fletamento Marítimo</span>
      </h2>

      <div className="mt-2 w-full rounded-2xl border border-[rgba(70,117,163,0.4)] bg-[rgba(6,13,26,0.55)] p-7 text-left max-[600px]:p-5">
        <p className="text-[13px] font-extrabold uppercase tracking-[0.1em] text-primary-hover mb-3">
          Estimado Inversionista,
        </p>
        <p className="text-[15px] leading-[1.7] text-text-gray">
          Nos dirigimos a usted para presentarle una oportunidad estratégica de inversión en el negocio central
          del comercio global: el <strong className="text-white">Fletamento de Buques y Barcos (Chartering)</strong>.
          Nos posicionamos como el socio estratégico que conecta la capacidad naval con la demanda comercial del
          mundo, operando un modelo de negocio altamente estructurado que maximiza el uso de activos marítimos.
        </p>
        <p className="text-[15px] leading-[1.7] text-text-gray mt-4">
          Nuestra propuesta se centra en la explotación y optimización de buques a través de tres modalidades
          clave de fletamento, diseñadas para equilibrar el riesgo y garantizar flujos de caja constantes.
        </p>
      </div>
    </div>
  );
}
