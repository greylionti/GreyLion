import React from 'react';
import DynamicMedia from '../dynamic-media';
import InvestmentHeader from './InvestmentHeader';
import InvestmentCharterModels from './InvestmentCharterModels';
import InvestmentSpecializedLines from './InvestmentSpecializedLines';
import InvestmentSynergy from './InvestmentSynergy';
import InvestmentReasons from './InvestmentReasons';
import InvestmentCTA from './InvestmentCTA';

export default function Investment() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '573000000000';
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@greylionmaritime.com';
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent('Hola GreyLion, quiero más información sobre la oportunidad de inversión en fletamento marítimo.')}`;

  return (
    <section
      id="oportunidad-inversion"
      className="relative overflow-hidden border-t border-white/5 bg-[#010c1c] py-[100px] scroll-mt-[100px]"
    >
      {/* Fleet-expansion background photo, fading into the section's solid backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[640px] max-h-full">
        <DynamicMedia
          src="/background_fleet_expansion.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,12,28,0.15)_0%,rgba(1,12,28,0.5)_45%,rgba(1,12,28,0.88)_78%,#010c1c_100%)]" />
      </div>
      <div className="pointer-events-none absolute top-[10%] left-[-10%] z-0 h-3/5 w-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,163,255,0.1)_0%,transparent_70%)] blur-[100px]" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5">
        <InvestmentHeader />
        <InvestmentCharterModels />
        <InvestmentSpecializedLines />
        <InvestmentSynergy />
        <InvestmentReasons />
        <InvestmentCTA email={email} whatsappUrl={whatsappUrl} />
      </div>
    </section>
  );
}
