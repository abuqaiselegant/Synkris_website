'use client';

import { BILLING_PLANS } from '@/components/sections/pricing/data';
import { PricingCard } from '@/components/sections/pricing/card';

export default function PricingSection() {
  return (
    <section className="py-14 md:py-30 bg-gray-50 dark:bg-[#171f2e] dark:bg-linear-180 dark:from-white/3 dark:from-[45.56%] dark:to-white/0">
      <div className="wrapper">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="mb-3 font-bold text-center text-gray-800 text-3xl dark:text-white/90 md:text-title-lg">
            Simple Pricing for AI Voice Agents
          </h2>
          <p className="max-w-xl mx-auto leading-6 text-gray-500 dark:text-gray-400">
            Choose the plan that fits your call volume and business needs.
            Scale effortlessly as your conversations grow.
          </p>
        </div>

        <div>
          <div className="mt-12 z-30 relative space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-6xl lg:mx-auto lg:grid-cols-3">
            {BILLING_PLANS.map((plan, index) => (
              <PricingCard key={index} plan={plan} billingPeriod="monthly" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
