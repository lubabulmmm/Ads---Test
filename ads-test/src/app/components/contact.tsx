import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <section
      id="contact-us"
      className="bg-blue-600 items-center text-white p-4 lg:p-16"
    >
      {/* Grid container */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Forwardin Info Section */}
        <div className="space-y-8">
          <div className="flex items-center justify-center lg:justify-start">
            <Image src="/logo2.png" width={32} height={32} alt="Logo" className="h-8 w-auto" />
            <h2 className="text-2xl font-bold ml-2">FORWARDIN</h2>
          </div>
          <p className="text-xs text-center lg:text-left">
            Forwardin is your ultimate communication management solution. We
            empower businesses of all sizes with efficient message forwarding,
            streamlined contact management, and powerful campaign scheduling. Our
            mission is to simplify your communication processes, helping you
            engage with your audience effectively and effortlessly. Join us in
            transforming your communication game today!
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="space-y-8 text-center lg:text-left">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="text-xs">
            Join our mailing list to receive updates, exclusive content, and early
            access to upcoming events. By signing up, you become an integral part
            of our community, spreading the message of compassion and making a
            difference.
          </p>
          <p>Email: info@forwardin.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>

        {/* Let's Talk Section */}
        <div className="space-y-2 text-center lg:text-left">
          <h3 className="text-xl font-semibold">Let's Talk</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-xs hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-xs hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="text-xs hover:underline">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Powered By Section */}
      <div className="mt-12 text-center">
        <p className="text-sm">
          Powered By <span className="font-bold">FORWARDIN</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
