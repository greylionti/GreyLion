import React from 'react';
import DynamicMedia from '../dynamic-media';
import { INVESTMENT_REASONS } from './data';

export default function InvestmentReasons() {
  return (
    <div className="mb-16">
      <h3 className="mb-8 text-center font-[family-name:var(--font-space-grotesk)] text-[clamp(21px,2.4vw,28px)] font-extrabold text-white">
        ¿Por qué invertir en nuestro proyecto de fletamento?
      </h3>

      <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
        {INVESTMENT_REASONS.map((reason) => (
          <div key={reason.num} className="relative isolate min-h-[320px] overflow-hidden rounded-[20px]">
            <DynamicMedia
              src={reason.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />

            <div className="flex min-h-full flex-col p-7">
              <div className="flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-full border border-[#2f6fb0]/70 bg-[rgba(6,20,38,0.55)] text-[#5fc1ff] backdrop-blur-sm [&>svg]:h-6 [&>svg]:w-6">
                  <reason.icon strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span
                  className="font-[family-name:var(--font-space-grotesk)] text-[44px] font-extrabold leading-none text-white/15"
                  aria-hidden="true"
                >
                  {reason.num}
                </span>
              </div>

              <div className="mt-auto">
                <span className="mb-3 block h-[2px] w-8 bg-[#2f8fe0]" aria-hidden="true" />
                <h4 className="mb-2 text-[18px] font-bold text-white">{reason.title}</h4>
                <p className="text-[13px] leading-[1.6] text-[#c3d3e2]">{reason.desc}</p>
                <p className="mt-4 text-[10px] font-bold uppercase leading-[1.7] tracking-[0.14em] text-[#5a86ab]">
                  {reason.tag[0]}
                  <br />
                  {reason.tag[1]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
