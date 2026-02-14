export const BILLING_PERIODS = [
  {
    label: 'Monthly',
    key: 'monthly',
    saving: null,
  },
] as const;

const AMOUNTS = {
  starter: {
    monthly: 29,
    yearly: 29,
  },
  growth: {
    monthly: 79,
    yearly: 79,
  },
  enterprise: {
    monthly: null,
    yearly: null,
  },
};

export type TBILLING_PLAN = (typeof BILLING_PLANS)[number];
export const BILLING_PLANS = [
  {
    name: 'Starter',
    description:
      'For solo founders and small businesses automating inbound calls.',
    pricing: {
      monthly: {
        amount: AMOUNTS['starter']['monthly'],
        formattedPrice: '£' + AMOUNTS['starter']['monthly'],
        stripeId: null,
      },
      yearly: {
        amount: AMOUNTS['starter']['yearly'],
        formattedPrice: '£' + AMOUNTS['starter']['yearly'],
        stripeId: null,
      },
    },
    features: [
      'Up to 500 call minutes / month',
      'AI-powered call handling',
      'Appointment booking & rescheduling',
      'Basic call analytics',
      'Email support',
    ],
    cta: 'Start Automating',
    popular: false,
  },
  {
    name: 'Growth',
    description:
      'For growing businesses handling higher call volumes.',
    pricing: {
      monthly: {
        amount: AMOUNTS['growth']['monthly'],
        formattedPrice: '£' + AMOUNTS['growth']['monthly'],
        stripeId: null,
      },
      yearly: {
        amount: AMOUNTS['growth']['yearly'],
        formattedPrice: '£' + AMOUNTS['growth']['yearly'],
        stripeId: null,
      },
    },
    features: [
      'Up to 2,000 call minutes / month',
      'Everything in Starter',
      'CRM & calendar integrations',
      'Advanced call flows & routing',
      'Lead qualification automation',
      'Priority support',
      'Exportable call logs & reports',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    description:
      'For high-volume teams and multi-location businesses.',
    pricing: {
      monthly: {
        amount: AMOUNTS['enterprise']['monthly'],
        formattedPrice: 'Custom pricing',
        stripeId: null,
      },
      yearly: {
        amount: AMOUNTS['enterprise']['yearly'],
        formattedPrice: 'Custom pricing',
        stripeId: null,
      },
    },
    features: [
      'Unlimited call minutes (custom)',
      'Dedicated onboarding',
      'Custom integrations',
      'SLA & priority infrastructure',
      'White-label options',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];
