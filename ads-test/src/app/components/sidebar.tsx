import Link from 'next/link';

interface SidebarProps {
  activeSection: string;
}

export default function Sidebar({ activeSection }: SidebarProps) {
  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 px-4 bg-white border-l overflow-y-auto hidden md:block">
      <nav className="p-6 w-full flex flex-col space-y-4">
        <Link href="#get-started">
          <span
            className={`block ${
              activeSection === 'get-started' ? 'text-blue-600' : 'text-gray-800'
            } hover:text-blue-600`}
          >
            Get Started
          </span>
        </Link>
        <Link href="#broadcast">
          <span
            className={`block ${
              activeSection === 'broadcast' ? 'text-blue-600' : 'text-gray-800'
            } hover:text-blue-600`}
          >
            Broadcast
          </span>
        </Link>
        <Link href="#campaign">
          <span
            className={`block ${
              activeSection === 'campaign' ? 'text-blue-600' : 'text-gray-800'
            } hover:text-blue-600`}
          >
            Campaign
          </span>
        </Link>
        <Link href="#auto-reply">
          <span
            className={`block ${
              activeSection === 'auto-reply' ? 'text-blue-600' : 'text-gray-800'
            } hover:text-blue-600`}
          >
            Auto Reply
          </span>
        </Link>
        <Link href="#opportunity">
          <span
            className={`block ${
              activeSection === 'opportunity' ? 'text-blue-600' : 'text-gray-800'
            } hover:text-blue-600`}
          >
            Opportunity
          </span>
        </Link>
        <Link href="#pricing">
          <span
            className={`block ${
              activeSection === 'pricing' ? 'text-blue-600' : 'text-gray-800'
            } hover:text-blue-600`}
          >
            Pricing
          </span>
        </Link>
        <Link href="#faq">
          <span
            className={`block ${
              activeSection === 'faq' ? 'text-blue-600' : 'text-gray-800'
            } hover:text-blue-600`}
          >
            FAQ
          </span>
        </Link>
        <Link href="#contact-us">
          <span
            className={`block ${
              activeSection === 'contact-us' ? 'text-blue-600' : 'text-gray-800'
            } hover:text-blue-600`}
          >
            Contact Us
          </span>
        </Link>
      </nav>
    </aside>
  );
}
