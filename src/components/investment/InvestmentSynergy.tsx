import React from 'react';
import { Handshake } from 'lucide-react';

export default function InvestmentSynergy() {
  return (
    <div className="mb-14 flex items-start gap-4 rounded-2xl border border-[rgba(0,163,255,0.25)] bg-[rgba(0,163,255,0.06)] p-7 max-[600px]:flex-col max-[600px]:p-5">
      <span className="grid h-12 w-12 flex-none place-items-center rounded-full bg-[rgba(0,163,255,0.15)] text-[#5fc1ff]">
        <Handshake className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
      </span>
      <div>
        <h4 className="mb-2 text-[15px] font-extrabold uppercase tracking-[0.04em] text-white">
          Sinergia Comercial y Control de Riesgos
        </h4>
        <p className="text-[14px] leading-[1.7] text-text-gray">
          Complementamos nuestras operaciones de fletamento con un servicio de{' '}
          <strong className="text-white">Corretaje de Buques (Shipbroking)</strong>, lo que nos permite mantener
          nuestras embarcaciones con niveles óptimos de ocupación y capturar comisiones adicionales al conectar a
          otros armadores con cargadores en el mercado internacional. Asimismo, controlamos estrictamente los
          costos en puerto mediante una gestión experta de tiempos de plancha y demoras.
        </p>
      </div>
    </div>
  );
}
