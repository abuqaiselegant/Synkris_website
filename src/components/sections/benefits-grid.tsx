import Image from "next/image";
import Link from "next/link";

export default function BenefitsGrid() {
  return (
    <section className="bg-gray-900 py-14 md:py-28">
      <div className="wrapper">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="max-w-lg mx-auto mb-3 font-bold text-center text-white dark:text-white/90 text-3xl md:text-title-lg">
            Why Businesses Choose Synkris AI Voice Agents
          </h2>
          <p className="max-w-2xl mx-auto text-base font-normal leading-6 text-white/50">
            Automate customer calls, increase response speed, and scale
            operations without hiring more staff.
          </p>
        </div>

        <div className="max-w-[1008px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6">
              <div className="relative flex flex-col justify-between bg-primary-500 rounded-[20px] p-9 md:p-13 overflow-hidden">
                <div className="max-w-xl relative z-10">
                  <h3 className="font-bold text-white text-2xl md:text-3xl mb-4">
                    Turn Every Customer Call into Action - Automatically
                  </h3>
                  <p className="text-base text-white/80 mb-7">
                    Synkris AI voice agents answer calls instantly, understand
                    intent, book appointments, and update your CRM without human
                    intervention.
                  </p>

                  <ul className="space-y-4 mb-8">
                    <li className="text-white/90">
                      <p className="font-semibold mb-1">
                        ⚡ 24/7 Intelligent Call Handling
                      </p>
                      <p className="text-white/75 text-sm">
                        Never miss a lead. AI answers instantly and responds
                        naturally.
                      </p>
                    </li>
                    <li className="text-white/90">
                      <p className="font-semibold mb-1">
                        📅 Automated Appointment Booking
                      </p>
                      <p className="text-white/75 text-sm">
                        Schedule, confirm, and reschedule directly through
                        voice.
                      </p>
                    </li>
                    <li className="text-white/90">
                      <p className="font-semibold mb-1">
                        📊 Real-Time CRM Updates
                      </p>
                      <p className="text-white/75 text-sm">
                        Every conversation is logged, qualified, and stored
                        automatically.
                      </p>
                    </li>
                  </ul>

                  <Link
                    href="/contact"
                    className="font-medium inline-flex items-center justify-center text-sm text-white rounded-full bg-primary-600 hover:bg-primary-700 transition py-3 px-6"
                  >
                    Book a Demo Call
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="benefits-bg rounded-[20px] p-3 md:p-4 overflow-hidden h-full flex">
                <Image
                  src="/images/benefits/call-flow.svg"
                  alt="AI voice agent call flow: incoming call, agent responds, appointment booked, lead stored in CRM"
                  width={1200}
                  height={900}
                  className="w-full h-auto rounded-2xl object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
