"use client";

import { MinusIcon, PlusIcon } from "@/icons/icons";

// Define the FAQ item type
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FaqAccordion() {
  // FAQ data
  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "How does the AI Voice Agent handle real customer calls?",
      answer:
        "Our AI voice agents answer inbound calls instantly, understand customer intent in real time, and respond naturally using advanced speech recognition and conversational AI. They can book appointments, qualify leads, route calls, and update your CRM automatically.",
    },
    {
      id: 2,
      question: "Can the AI book appointments directly into my calendar?",
      answer:
        "Yes. Synkris integrates with your calendar system to check availability, schedule appointments, send confirmations, and handle rescheduling, all during the live call.",
    },
    {
      id: 3,
      question: "Does the AI sound natural or robotic?",
      answer:
        "Our voice agents use advanced natural-sounding speech models designed to sound human-like, professional, and clear. You can also customize tone and style to match your brand voice.",
    },
    {
      id: 4,
      question: "Can it integrate with my CRM or existing tools?",
      answer:
        "Absolutely. Synkris supports CRM integrations and API connections to automatically store lead details, call summaries, and booking information in your existing systems.",
    },
    {
      id: 5,
      question: "What happens if the AI cannot answer a question?",
      answer:
        "If the AI encounters a situation outside its configured flow, it can transfer the call to a human agent, take a message, schedule a callback, or escalate the issue automatically. You remain in full control of fallback behavior.",
    },
    {
      id: 6,
      question: "Is my customer data secure?",
      answer:
        "Yes. We prioritize security and data privacy. All conversations are processed securely, and you maintain control over your business data and integrations.",
    },
    {
      id: 7,
      question: "How quickly can I get started?",
      answer:
        "You can deploy your first AI voice agent within minutes. Setup includes configuring your call flow, connecting integrations, and defining business rules, with no complex development required.",
    },
  ];

  return (
    <section id="faq" className="relative z-30 py-14 md:py-28 dark:bg-[#171f2e]">
      <div className="wrapper">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="mb-3 font-bold text-center text-gray-800 text-3xl dark:text-white/90 md:text-title-lg">
            Frequently Asked Questions
          </h2>
          <p className="max-w-md mx-auto leading-6 text-gray-500 dark:text-gray-400">
            Got questions about how Synkris AI works? Here are answers to the
            most common business inquiries.
          </p>
        </div>
        <div className="max-w-[600px] mx-auto">
          <div className="space-y-4">
            {faqItems.map((item) => (
              <FAQItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Item Component
function FAQItem({
  item,
}: {
  item: FAQItem;
}) {
  return (
    <details className="group pb-5 border-b border-gray-200 dark:border-gray-800">
      <summary className="flex items-center justify-between w-full text-left list-none cursor-pointer">
        <span className="text-lg font-medium text-gray-800 dark:text-white/90">
          {item.question}
        </span>
        <span className="flex-shrink-0 ml-6">
          <span className="group-open:hidden">
            <PlusIcon />
          </span>
          <span className="hidden group-open:block">
            <MinusIcon />
          </span>
        </span>
      </summary>
      <div className="mt-5">
        <p className="text-base leading-7 text-gray-500 dark:text-gray-400">
          {item.answer}
        </p>
      </div>
    </details>
  );
}
