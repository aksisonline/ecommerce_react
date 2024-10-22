import React, { useState } from 'react';

export default function Legal() {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (panel) => {
    setExpanded(expanded === panel ? null : panel);
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-8">Legal Information</h1>

      <div className="space-y-4">
        <div className="border border-gray-200 rounded-lg">
          <button
            className="flex justify-between w-full p-4 bg-gray-100 hover:bg-gray-200"
            onClick={() => handleToggle('privacy')}
          >
            <h2 className="text-lg font-semibold">Privacy Policy</h2>
            <span
              className={`transform ${expanded === 'privacy' ? 'rotate-180' : ''} transition-transform`}
            >
              ▼
            </span>
          </button>
          {expanded === 'privacy' && (
            <div className="p-4 bg-white">
              <p className="mb-4">
                At Tenduzone, we are committed to protecting your privacy and
                ensuring the security of your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you use our website or services.
              </p>
              <p className="mb-4">
                1. Information We Collect: We collect personal information that
                you provide directly to us, such as your name, email address,
                shipping address, and payment information when you make a
                purchase or create an account.
              </p>
              <p className="mb-4">
                2. How We Use Your Information: We use your personal information
                to process orders, provide customer support, send promotional
                emails (if you opt-in), and improve our services.
              </p>
              <p>
                3. Data Security: We implement appropriate technical and
                organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or
                destruction.
              </p>
            </div>
          )}
        </div>

        <div className="border border-gray-200 rounded-lg">
          <button
            className="flex justify-between w-full p-4 bg-gray-100 hover:bg-gray-200"
            onClick={() => handleToggle('terms')}
          >
            <h2 className="text-lg font-semibold">Terms of Service</h2>
            <span
              className={`transform ${expanded === 'terms' ? 'rotate-180' : ''} transition-transform`}
            >
              ▼
            </span>
          </button>
          {expanded === 'terms' && (
            <div className="p-4 bg-white">
              <p className="mb-4">
                Welcome to Tenduzone. By accessing or using our website, you
                agree to comply with and be bound by the following terms and
                conditions of use.
              </p>
              <p className="mb-4">
                1. Use of the Website: You agree to use our website for lawful
                purposes only and in a way that does not infringe upon the
                rights of others or restrict their use of the website.
              </p>
              <p className="mb-4">
                2. Product Information: We strive to provide accurate product
                descriptions and pricing. However, we reserve the right to
                correct any errors or inaccuracies and to change or update
                information at any time without prior notice.
              </p>
              <p>
                3. Intellectual Property: All content on this website, including
                text, graphics, logos, and images, is the property of Tenduzone
                and protected by copyright laws.
              </p>
            </div>
          )}
        </div>

        <div className="border border-gray-200 rounded-lg">
          <button
            className="flex justify-between w-full p-4 bg-gray-100 hover:bg-gray-200"
            onClick={() => handleToggle('returns')}
          >
            <h2 className="text-lg font-semibold">Return Policy</h2>
            <span
              className={`transform ${expanded === 'returns' ? 'rotate-180' : ''} transition-transform`}
            >
              ▼
            </span>
          </button>
          {expanded === 'returns' && (
            <div className="p-4 bg-white">
              <p className="mb-4">
                We want you to be completely satisfied with your purchase. If
                you are not satisfied, you may return most items within 30 days
                of delivery for a full refund or exchange.
              </p>
              <p className="mb-4">
                1. Eligibility: Items must be unused, unworn, and in the same
                condition that you received them. They must also be in the
                original packaging.
              </p>
              <p className="mb-4">
                2. Process: To initiate a return, please contact our customer
                service team. You will receive instructions on how to ship the
                item back to us.
              </p>
              <p>
                3. Refunds: Once we receive and inspect the returned item, we
                will notify you of the approval or rejection of your refund. If
                approved, your refund will be processed, and a credit will
                automatically be applied to your original method of payment.
              </p>
            </div>
          )}
        </div>

        <div className="border border-gray-200 rounded-lg">
          <button
            className="flex justify-between w-full p-4 bg-gray-100 hover:bg-gray-200"
            onClick={() => handleToggle('shipping')}
          >
            <h2 className="text-lg font-semibold">Shipping Policy</h2>
            <span
              className={`transform ${expanded === 'shipping' ? 'rotate-180' : ''} transition-transform`}
            >
              ▼
            </span>
          </button>
          {expanded === 'shipping' && (
            <div className="p-4 bg-white">
              <p className="mb-4">
                We offer various shipping options to meet your needs. Please
                review our shipping policy to understand our practices and
                procedures.
              </p>
              <p className="mb-4">
                1. Processing Time: Orders are typically processed within 1-2
                business days after payment is received.
              </p>
              <p className="mb-4">
                2. Shipping Methods: We offer standard shipping (5-7 business
                days) and express shipping (2-3 business days) options.
              </p>
              <p>
                3. International Shipping: We ship to select countries
                internationally. Additional customs fees and taxes may apply and
                are the responsibility of the customer.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
