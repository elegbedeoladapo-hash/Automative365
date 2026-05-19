import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm w-fit"
        >
          <FiArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
      {children}
    </div>
  );
}