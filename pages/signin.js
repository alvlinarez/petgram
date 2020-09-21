import React, { useContext } from 'react';
import Layout from '../components/layout/Layout';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Form,
  FormDiv,
  Title,
  Input,
  Button,
  Error,
  AuthLink
} from '../styles/components/layout/form/AuthForm';
import Link from 'next/link';
import { AuthContext } from '../context/auth/AuthContext';
import { useRouter } from 'next/router';

const SignIn = () => {
  const authContext = useContext(AuthContext);
  const { authLoading, signIn, error } = authContext;

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: yup.object({
      email: yup.string().email('Invalid Email').required('Email is required'),
      password: yup
        .string()
        .required('Password is required')
        .min(6, 'Password must contain at least 6 characters')
    }),
    onSubmit: async (values) => {
      signIn(values, router);
    }
  });
  return (
    <Layout>
      <Form disabled={authLoading} onSubmit={formik.handleSubmit}>
        <Title>Sign In</Title>

        <FormDiv>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={authLoading}
          />
          {formik.touched.email && formik.errors.email && (
            <Error>{formik.errors.email}</Error>
          )}
        </FormDiv>

        <FormDiv>
          <label htmlFor="password">Password</label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Your Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={authLoading}
          />
          {formik.touched.password && formik.errors.password && (
            <Error>{formik.errors.password}</Error>
          )}
        </FormDiv>

        {error && <Error>{error}</Error>}

        <Button type="submit" disabled={authLoading}>
          Sign In
        </Button>

        <AuthLink>
          Don't you have an account?{' '}
          <Link href="/signup">
            <a>Sign Up</a>
          </Link>
        </AuthLink>
      </Form>
    </Layout>
  );
};

export default SignIn;
