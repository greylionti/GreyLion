import React from 'react';
import { ArrowRight } from 'lucide-react';
import DynamicMedia from '../dynamic-media';
import { SPECIALIZED_LINES } from './data';

export default function InvestmentSpecializedLines() {
  return (
    <div className="mb-14">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <span className="mt-[13px] h-px w-8 flex-none bg-primary-hover/70" aria-hidden="true" />
          <div>
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-extrabold text-white">
              Líneas Especializadas de Operación Naval
            </h3>
            <p className="mt-1 max-w-[560px] text-[13.5px] leading-[1.6] text-text-gray">
              Para garantizar el despliegue total de nuestra capacidad de fletamento, operamos en los nichos más
              rentables del sector.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 max-[700px]:hidden">
          <p className="text-right text-[10px] font-extrabold uppercase leading-[1.7] tracking-[0.14em] text-text-muted">
            Capacidad Especializada
            <br />
            Para Un Mundo En Movimiento
          </p>
          <span className="mt-[13px] h-px w-8 flex-none bg-primary-hover/70" aria-hidden="true" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 max-[800px]:grid-cols-1">
        {SPECIALIZED_LINES.map((line) => (
          <div key={line.title} className="relative isolate min-h-[230px] overflow-hidden rounded-[20px]">
            <DynamicMedia
              src={line.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,12,24,0.88)_0%,rgba(4,12,24,0.6)_52%,rgba(4,12,24,0.15)_100%)]" />

            <div className="flex min-h-full flex-col justify-between p-7">
              <div>
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="grid h-9 w-9 flex-none place-items-center rounded-full border border-primary-hover/50 bg-[rgba(6,20,38,0.55)] text-primary-hover [&>svg]:h-4 [&>svg]:w-4">
                    <line.icon strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="text-[10.5px] font-extrabold uppercase tracking-[0.14em] text-primary-hover">
                    {line.kicker}
                  </span>
                </div>
                <h4 className="mb-2 max-w-[300px] text-[19px] font-bold text-white">{line.title}</h4>
                <p className="max-w-[300px] text-[13px] leading-[1.6] text-[#c3d3e2]">{line.desc}</p>
              </div>

              <a href="#servicios" className="group mt-5 inline-flex w-fit items-center gap-2.5 no-underline">
                <span className="grid h-8 w-8 flex-none place-items-center rounded-full border border-primary-hover/60 text-primary-hover transition-colors duration-300 ease-[ease] group-hover:bg-primary-hover group-hover:text-white">
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#5fc1ff]">
                  Explorar Servicio
                </span>
              </a>
            </div>

            <ul className="absolute right-6 top-1/2 z-10 m-0 flex -translate-y-1/2 list-none flex-col gap-2.5 p-0 max-[800px]:hidden">
              {line.tags.map((tag) => (
                <li
                  key={tag}
                  className="flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.08em] text-white/85"
                >
                  <span className="h-1.5 w-1.5 flex-none rounded-full bg-primary-hover" aria-hidden="true" />
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
