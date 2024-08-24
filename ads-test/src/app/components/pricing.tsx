import React, { useState } from "react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);

  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };

  const pricingPlans = [
    {
      title: "Starter",
      price: "Gratis",
      description:
        "Mulai perjalanan Anda dengan paket Starter selama 14 hari. Nikmati pesan otomatis, siaran pesan, dan manajemen kontak yang efisien.",
      features: [
        "100 Auto reply",
        "500 Broadcast",
        "50 Campaign",
        "500 Contact",
        "50 Device",
        "Excel / CSV Contact Import",
        "Google Contact Sync",
      ],
      buttonText: "Start Now",
    },
    {
      title: "Basic",
      price: isYearly ? "Rp. 650.000 / tahun" : "Rp. 65.000 / bulan",
      description:
        "Dapatkan akses selama 1 bulan dengan paket ini. Manfaatkan fitur pesan otomatis, siaran pesan, dan manajemen kontak yang ditingkatkan.",
      features: [
        "100 Auto reply",
        "500 Broadcast",
        "50 Campaign",
        "500 Contact",
        "50 Device",
        "Excel / CSV Contact Import",
        "Google Contact Sync",
      ],
      buttonText: "Get Started",
    },
    {
      title: "Premium",
      price: isYearly ? "Rp. 800.000 / tahun" : "Rp. 76.000 / bulan",
      description:
        "Perpanjang pengalaman Anda dengan paket ini. Nikmati fitur yang lebih luas dengan sinkronisasi Google dan WhatsApp.",
      features: [
        "100 Auto reply",
        "500 Broadcast",
        "50 Campaign",
        "500 Contact",
        "50 Device",
        "Excel / CSV Contact Import",
        "Google Contact Sync",
      ],
      buttonText: "Get Started",
    },
    {
      title: "Pro",
      price: isYearly ? "Rp. 900.000 / tahun" : "Rp. 86.000 / bulan",
      description:
        "Jelajahi seluruh fitur dengan paket Pro selama 1 bulan. Dapatkan keuntungan lebih dengan sinkronisasi yang lengkap.",
      features: [
        "100 Auto reply",
        "500 Broadcast",
        "50 Campaign",
        "500 Contact",
        "50 Device",
        "Excel / CSV Contact Import",
        "Google Contact Sync",
      ],
      buttonText: "Get Started",
    },
  ];

  return (
    <section id="pricing" className="flex flex-col p-4 min-h-screen bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-96 text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Our Pricing
          </h2>
          <div className="flex justify-center mb-4">
            <button
              className={`px-4 py-2 rounded-l-lg border ${
                !isYearly
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-900"
              }`}
              onClick={toggleBilling}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-r-lg border ${
                isYearly
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-900"
              }`}
              onClick={toggleBilling}
            >
              Yearly
            </button>
          </div>
          <p className="mb-4 font-light text-blue-500 sm:text-base bg-gray-200 rounded-lg">
            Save up to 25% with yearly plans
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col p-6 text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
            >
              <h3 className="mb-4 text-2xl font-semibold">{plan.title}</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                {plan.description}
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-3xl font-extrabold">
                  {plan.price}
                </span>
              </div>
              <a
                href="#"
                className="mb-4 text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
              >
                {plan.buttonText}
              </a>
              <ul role="list" className="mb-8 space-y-4 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
