import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "Apa itu Forwardin?",
      answer:
        "Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak Google.",
    },
    {
      question: "Apakah Forwardin cocok untuk saya?",
      answer:
        "Jika Anda membutuhkan pengelolaan pesan yang lebih efektif dan efisien di WhatsApp, maka Forwardin adalah solusi yang tepat untuk Anda.",
    },
    {
      question: "Apakah Forwardin perlu di-install ke komputer?",
      answer:
        "Tidak, Forwardin adalah layanan berbasis cloud yang dapat diakses melalui web browser tanpa perlu instalasi tambahan di komputer Anda.",
    },
  ];

  return (
    <section id="faq" className="flex flex-col items-center p-6 min-h-screen bg-blue-600 text-white">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="w-full max-w-3xl">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-3 rounded-lg text-gray-900"
          />
        </div>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white text-gray-900 rounded-lg p-4"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold">{item.question}</h3>
                {openFAQ === index ? (
                  <FiChevronUp className="w-6 h-6 text-blue-600" />
                ) : (
                  <FiChevronDown className="w-6 h-6 text-blue-600" />
                )}
              </div>
              {openFAQ === index && (
                <p className="mt-3 text-gray-700">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
