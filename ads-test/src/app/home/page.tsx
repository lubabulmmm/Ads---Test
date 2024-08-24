"use client"; 

import Sidebar from '../components/sidebar';
import Image from 'next/image';
import Pricing from '../components/pricing';
import FAQ from '../components/faq';
import Contact from '../components/contact';
import { useEffect, useState } from 'react';

type TabKeys = 'Bisnis dan Pemasaran' | 'Komersial dan Penjualan' | 'Organisasi Sosial';

const content: Record<TabKeys, { text: string; image: string }> = {
  'Bisnis dan Pemasaran': {
    text: 'Bidang ini dapat memanfaatkan fitur Broadcast untuk mengirim promosi, pengumuman, dan informasi produk kepada pelanggan dalam jumlah besar secara efisien. Selain itu, fitur Campaign dapat membantu merencanakan dan menyampaikan pesan iklan dengan waktu yang tepat kepada target audiens yang sesuai.',
    image: '/gambar5.png',
  },
  'Komersial dan Penjualan': {
    text: 'Komersial dan penjualan memanfaatkan fitur Broadcast untuk menjangkau lebih banyak pelanggan secara lebih cepat dan efisien. Dengan fitur Campaign, pesan iklan dapat disampaikan pada waktu yang paling efektif.',
    image: '/gambar5.png',
  },
  'Organisasi Sosial': {
    text: 'Organisasi sosial dapat menggunakan fitur Broadcast untuk menyebarkan informasi penting kepada komunitas dengan cepat dan merata. Fitur Campaign memungkinkan pengaturan kampanye yang tepat sasaran dan efisien.',
    image: '/gambar5.png',
  },
};



export default function Home() {
  const [activeTab, setActiveTab] = useState<TabKeys>('Bisnis dan Pemasaran');
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['get-started', 'broadcast', 'campaign', 'auto-reply', 'opportunity', 'pricing', 'faq', 'contact-us'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex">
      <Sidebar activeSection={activeSection} />

      <main className="flex-1 min-h-screen bg-white ml-0 md:ml-64 p-4">
        <section id="get-started" className="flex flex-col p-4 min-h-screen bg-white">
          <div className="flex-1 px-4 lg:px-8 py-4">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 w-full lg:pr-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  Elevate Your Messaging Efficiency with Our Innovative Admin Tools
                </h1>
                <p className="text-lg text-gray-700 mb-4">
                  Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami.
                </p>
                <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300">
                  Daftar Sekarang →
                </button>
              </div>
              <div className="lg:w-1/2 w-full mt-6 lg:mt-0 flex justify-center items-center">
                <Image src="/gambar1.png" alt="Admin Dashboard" width={500} height={500} className="w-full max-w-lg shadow-lg rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        <section id="broadcast" className="flex flex-col p-4 min-h-screen">
          <div className="flex-1 px-4 lg:px-8 py-4">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 w-full mt-6 lg:mt-0 flex justify-center items-center">
                <Image src="/gambar2.png" alt="Admin Dashboard" width={500} height={500} className="w-full max-w-lg shadow-lg rounded-lg" />
              </div>
              <div className="lg:w-1/2 w-full lg:pl-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  Reach Further with Ease
                </h1>
                <p className="text-lg text-gray-700 mb-4">
                  Fowardin memberikan Anda akses cepat untuk memperluas jangkauan komunikasi Anda. Dengan fitur Broadcast kami, Anda dapat mengirim pesan kepada banyak kontak dan grup sekaligus. Menjangkau audiens Anda tidak pernah semudah ini.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="campaign" className="flex flex-col p-4 min-h-screen">
          <div className="flex-1 px-4 lg:px-8 py-4">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 w-full lg:pr-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  Right Time, Effective Messages
                </h1>
                <p className="text-lg text-gray-700 mb-4">
                  Fowardin memungkinkan Anda untuk merencanakan pengiriman iklan yang tepat sasaran. Manfaatkan fitur Campaign kami untuk mengoptimalkan pesan iklan Anda sehingga hasilnya lebih akurat dan sukses. Dengan Fowardin, setiap pesan iklan memiliki dampak yang lebih besar.
                </p>
              </div>
              <div className="lg:w-1/2 w-full mt-6 lg:mt-0 flex justify-center items-center">
                <Image src="/gambar3.png" alt="Admin Dashboard" width={500} height={500} className="w-full max-w-lg shadow-lg rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        <section id="auto-reply" className="flex flex-col p-4 min-h-screen">
          <div className="flex-1 px-4 lg:px-8 py-4">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 w-full mt-6 lg:mt-0 flex justify-center items-center">
                <Image src="/gambar4.png" alt="Admin Dashboard" width={500} height={500} className="w-full max-w-lg shadow-lg rounded-lg" />
              </div>
              <div className="lg:w-1/2 w-full lg:pl-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  Respond Faster with the Convenience of Auto Reply
                </h1>
                <p className="text-lg text-gray-700 mb-4">
                  Fowardin mempermudah Anda untuk memberikan respon cepat kepada pesan dari banyak kontak dan grup sekaligus. Dengan fitur Auto Reply kami, Anda dapat menjawab pertanyaan atau memberikan respon otomatis, menghemat waktu dan energi Anda. Tanggap lebih cepat dengan Fowardin.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="opportunity" className="flex flex-col p-4 min-h-screen bg-white">
          <h1 className="text-center text-blue-700 text-3xl lg:text-4xl font-bold mb-4">
            "One Step Closer to More Effective and Connected Communication!"
          </h1>
          
          <div className="flex-1 px-4 lg:px-8 py-4 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 w-full flex justify-center items-center mb-6 lg:mb-0">
              <Image
                src={content[activeTab].image}
                alt="Content Image"
                width={500}
                height={500}
                className="w-2/3 max-w-xs lg:max-w-sm shadow-lg rounded-lg"
              />
            </div>
            
            <div className="lg:w-1/2 w-full lg:pl-6">
              <div className="flex justify-center lg:justify-start space-x-4 mb-4">
                {Object.keys(content).map((tab) => (
                  <button
                    key={tab}
                    className={`py-2 px-4 rounded-lg ${activeTab === tab ? 'bg-blue-600 text-white' : 'bg-blue-200 text-blue-600'}`}
                    onClick={() => setActiveTab(tab as TabKeys)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <p className="text-lg text-gray-700">
                {content[activeTab].text}
              </p>
            </div>
          </div>
        </section>

        <Pricing/>

        <FAQ/>
        
        <Contact/>
      </main>
    </div>
  );
}
