import React, { useContext } from 'react';
import Layout from '../components/layout/Layout';
import { AuthContext } from '../context/auth/AuthContext';
import { Button } from '../styles/components/layout/form/AuthForm';
import { useRouter } from 'next/router';
import { P } from '../styles/pages/user';

const User = () => {
  const router = useRouter();
  // Get user info
  const authContext = useContext(AuthContext);
  const { user, authenticated, authLoading, signOut } = authContext;
  if (!authenticated) {
    router.push('/signin');
  }
  return (
    <Layout>
      <h1>User info</h1>
      <P>Name: {user.name}</P>
      <P>Email: {user.email}</P>

      <Button type="button" onClick={() => signOut()} disabled={authLoading}>
        Sign Out
      </Button>
    </Layout>
  );
};

export default User;
