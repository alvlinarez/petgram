import React from 'react';
import Head from 'next/head';
import { Div, Subtitle, Title } from '../../styles/components/layout/Layout';
import Logo from './Logo';
import Navbar from './Navbar';

const Layout = ({ title, subtitle, children }) => {
  return (
    <>
      <Head>
        {title ? (
          <title>{title} | Petgram 🐶</title>
        ) : (
          <title>Petgram 🐶</title>
        )}

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {subtitle ? (
          <meta name="description" content={subtitle} />
        ) : (
          <meta
            name="description"
            content="Petagram, an instagram lite for pets!"
          />
        )}

        <link rel="preconnect" href="https://aws-alg-drive.s3.amazonaws.com" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" sizes="16x16" />
      </Head>

      <Logo />

      <Div>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Div>

      <Navbar />
    </>
  );
};

export default Layout;
