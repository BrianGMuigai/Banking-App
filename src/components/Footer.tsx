import React from "react";
import Image from 'next/image';
import { logoutAccount } from "../../lib/actions/user.action";
import { useRouter } from "next/navigation";

const Footer = ({ user, type = 'desktop' }: FooterProps) => {
  const router = useRouter();

  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();

    if (loggedOut) router.push('/sign-in');
  };

  return (
    <footer className="footer relative flex items-center justify-between px-4 py-2 bg-white shadow-md">
      <div className={type === 'mobile' ? 'footer-name-mobile' : 'footer-name'}>
        <p className="text-xl font-bold text-gray-700">
          {user?.firstName[0]}
        </p>
      </div>
      
      <div className={type === 'mobile' ? 'footer-email-mobile' : 'footer-email'}>
        <h1 className="text-14 truncate text-gray-700 font-semibold">
          {user?.firstName}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user?.email}
        </p>
      </div>

      <div className="relative group">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded px-2 py-1">
          Logout
        </div>
        <div className="footer_image cursor-pointer" onClick={handleLogOut}>
          <Image src="/icons/logout.svg" fill alt="logout" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
