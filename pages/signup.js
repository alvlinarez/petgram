import React, { useContext } from 'react';
import Layout from '../components/layout/Layout';
import Link from 'next/link';
import { AuthContext } from '../context/auth/AuthContext';
import { useRouter } from 'next/router';
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

const Signup = () => {
  const authContext = useContext(AuthContext);
  const { authLoading, signUp, error } = authContext;

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validationSchema: yup.object({
      name: yup.string().required('Name is required'),
      email: yup.string().email('Invalid Email').required('Email is required'),
      password: yup
        .string()
        .required('Password is required')
        .min(6, 'Password must contain at least 6 characters')
    }),
    onSubmit: async (values) => {
      signUp(values, router);
    }
  });
  return (
    <Layout>
      <Form disabled={authLoading} onSubmit={formik.handleSubmit}>
        <Title>Sign Up</Title>

        <FormDiv>
          <label htmlFor="name">Name</label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={authLoading}
          />
          {formik.touched.name && formik.errors.name && (
            <Error>{formik.errors.name}</Error>
          )}
        </FormDiv>

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
          Sign Up
        </Button>

        <AuthLink>
          Already have an account?{' '}
          <Link href="/signin">
            <a>Sign In</a>
          </Link>
        </AuthLink>
      </Form>
    </Layout>
  );
};

export default Signup;
