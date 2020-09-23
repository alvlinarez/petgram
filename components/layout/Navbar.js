import React from 'react';
import { LinkNavbar, Nav } from '../../styles/components/layout/Navbar';
import Link from 'next/link';
import { MdFavoriteBorder, MdHome, MdPersonOutline } from 'react-icons/md';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const SIZE = '32px';

  return (
    <Nav>
      <Link href="/">
        <LinkNavbar current={router.pathname === '/'}>
          <MdHome size={SIZE} />
        </LinkNavbar>
      </Link>
      <Link href="/liked">
        <LinkNavbar current={router.pathname === '/liked'}>
          <MdFavoriteBorder size={SIZE} />
        </LinkNavbar>
      </Link>
      <Link href="/user">
        <LinkNavbar current={router.pathname === '/user'}>
          <MdPersonOutline size={SIZE} />
        </LinkNavbar>
      </Link>
    </Nav>
  );
};

export default Navbar;
