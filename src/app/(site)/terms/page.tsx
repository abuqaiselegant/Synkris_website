import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
};

export default function TermsPage() {
  return (
    <section className="py-20">
      <div className="wrapper">
        <div className="max-w-[800px] mx-auto">
          <p className="text-gray-500 dark:text-gray-400 font-medium mb-2">
            Last Updated
            <span className="text-gray-800 ml-1 inline-block dark:text-white/90">
              16 Feb, 2026
            </span>
          </p>
          <h2 className="mb-12 text-4xl font-semibold text-gray-800 dark:text-white/90">
            Terms of Service
          </h2>

          <div className="mb-6">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white/90">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-normal leading-6 mb-6">
              By accessing and using Synkris AI services, you accept and agree
              to be bound by the terms and provision of this agreement. If you
              do not agree to these terms, please do not use our services.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white/90">
              2. Description of Service
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-normal leading-6 mb-4">
              Synkris AI provides AI-powered voice agent services for automated
              call handling, appointment booking, lead qualification, and
              customer conversation management. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li className="text-gray-500 dark:text-gray-400 font-normal leading-6">
                24/7 automated call handling
              </li>
              <li className="text-gray-500 dark:text-gray-400 font-normal leading-6">
                Smart appointment booking and scheduling
              </li>
              <li className="text-gray-500 dark:text-gray-400 font-normal leading-6">
                Lead qualification and follow-up management
              </li>
              <li className="text-gray-500 dark:text-gray-400 font-normal leading-6">
                Multi-language conversation support
              </li>
              <li className="text-gray-500 dark:text-gray-400 font-normal leading-6">
                Analytics and performance insights
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white/90">
              3. User Accounts
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-normal leading-6 mb-4">
              To use our services, you must:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li className="text-gray-500 dark:text-gray-400 font-normal leading-6">
                Be at least 18 years old or the age of majority in your
                jurisdiction
              </li>
              <li className="text-gray-500 dark:text-gray-400 font-normal leading-6">
                Provide accurate, current, and complete information during
                registration
              </li>
              <li className="text-gray-500 dark:text-gray-400 font-normal leading-6">
                Maintain the security of your account credentials
              </li>
              <li className="text-gray-500 dark:text-gray-400 font-normal leading-6">
                Notify us immediately of any unauthorized access to your account
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white/90">
              4. Subscription and Billing
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-normal leading-6 mb-4">
              Synkris AI offers subscription-based services with different
              pricing tiers. By subscribing, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li className="text-gray-500 dark:text-gray-400 font-normal leading-6">
                Pay all fees associated with your chosen subscription plan
              </li>
              <li className="text-gray-500 dark:text-gray-400 font-normal leading-6">
                Automatic renewal of your subscription unless cancelled
              </li>
              <li className="text-gray-500 dark:text-gray-400 font-normal leading-6">
                Provide valid payment information and authorize recurring
                charges
              </li>
              <li className="text-gray-500 dark:text-gray-400 font-normal leading-6">
                Subscription fees are billed in advance on a monthly or annual
                basis
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white/90">
              5. Acceptable Use Policy
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-normal leading-6 mb-4">
              You agree not to use our services to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li className="text-gray-500 dark:text-gray-400 font-normal leading-6">
                Violate any applicable laws or regulations
              </li>
              <li className="text-gray-500 dark:text-gray-400 font-normal leading-6">
                Harass, abuse, or harm others
              </li>
              <li className="text-gray-500 dark:text-gray-400 font-normal leading-6">
                Transmit spam, malware, or malicious code
              </li>
              <li className="text-gray-500 dark:text-gray-400 font-normal leading-6">
                Impersonate any person or entity
              </li>
              <li className="text-gray-500 dark:text-gray-400 font-normal leading-6">
                Interfere with or disrupt our services or servers
              </li>
              <li className="text-gray-500 dark:text-gray-400 font-normal leading-6">
                Attempt to gain unauthorized access to our systems
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white/90">
              6. Data and Privacy
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-normal leading-6">
              Your use of our services is also governed by our{' '}
              <Link
                href="/privacy"
                className="text-primary-500 hover:underline"
              >
                Privacy Policy
              </Link>
              . We collect, use, and protect your data as described in that
              policy. By using our services, you consent to such processing and
              warrant that all data provided by you is accurate.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white/90">
              7. Intellectual Property
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-normal leading-6 mb-4">
              All content, features, and functionality of Synkris AI services
              are owned by us and are protected by international copyright,
              trademark, and other intellectual property laws. You may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li className="text-gray-500 dark:text-gray-400 font-normal leading-6">
                Copy, modify, or distribute our software or content
              </li>
              <li className="text-gray-500 dark:text-gray-400 font-normal leading-6">
                Reverse engineer or attempt to extract source code
              </li>
              <li className="text-gray-500 dark:text-gray-400 font-normal leading-6">
                Remove or alter any copyright notices or trademarks
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white/90">
              8. Service Availability
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-normal leading-6">
              While we strive for 99.9% uptime, we do not guarantee that our
              services will be uninterrupted or error-free. We reserve the right
              to modify, suspend, or discontinue any part of our services at any
              time with or without notice.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white/90">
              9. Cancellation and Refunds
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-normal leading-6 mb-4">
              You may cancel your subscription at any time through your account
              settings. Cancellations take effect at the end of the current
              billing period. We offer refunds under the following conditions:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li className="text-gray-500 dark:text-gray-400 font-normal leading-6">
                Service outages lasting more than 24 consecutive hours
              </li>
              <li className="text-gray-500 dark:text-gray-400 font-normal leading-6">
                Critical bugs that prevent service usage, reported within 7 days
              </li>
              <li className="text-gray-500 dark:text-gray-400 font-normal leading-6">
                Cancellation within 14 days of initial subscription (pro-rated)
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white/90">
              10. Limitation of Liability
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-normal leading-6">
              To the maximum extent permitted by law, Synkris AI shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, or any loss of profits or revenues, whether
              incurred directly or indirectly, or any loss of data, use,
              goodwill, or other intangible losses.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white/90">
              11. Indemnification
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-normal leading-6">
              You agree to indemnify and hold harmless Synkris AI and its
              officers, directors, employees, and agents from any claims,
              damages, losses, liabilities, and expenses arising out of your use
              of our services or violation of these terms.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white/90">
              12. Changes to Terms
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-normal leading-6">
              We reserve the right to modify these terms at any time. We will
              notify you of any material changes by email or through our
              services. Your continued use of our services after such
              modifications constitutes acceptance of the updated terms.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white/90">
              13. Governing Law
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-normal leading-6">
              These terms shall be governed by and construed in accordance with
              the laws of the jurisdiction in which Synkris AI operates, without
              regard to its conflict of law provisions.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white/90">
              14. Contact Information
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-normal leading-6 mb-4">
              If you have any questions about these Terms of Service, please
              contact us:
            </p>
            <ul className="space-y-2">
              <li className="text-gray-500 dark:text-gray-400 font-normal leading-6">
                Email:{' '}
                <Link
                  href="/contact"
                  className="text-primary-500 hover:underline"
                >
                  support@synkris.com
                </Link>
              </li>
              <li className="text-gray-500 dark:text-gray-400 font-normal leading-6">
                Website:{' '}
                <Link href="/" className="text-primary-500 hover:underline">
                  synkris.com
                </Link>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              By using Synkris AI services, you acknowledge that you have read,
              understood, and agree to be bound by these Terms of Service and
              our Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
