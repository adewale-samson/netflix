import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from "../context/AuthContext";
import {useFormik} from 'formik';
import * as Yup from 'yup'

const Login = () => {
  const {signIn} = UserAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('email is not valid').required('Please enter a valid email'),
            password: Yup.string().required('Password is required')
        }),
        onSubmit: async (values) => {
            try {
                console.log(values)
                await signIn(values.email, values.password);
                navigate('/')
            } catch (error) {
                setError(error.message)
            }
        }
    })
    
  return (
    <div>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/83e8c151-107d-4e8f-b95a-d2ba99d49bb9/2a5c0b10-bcff-4555-8c6b-f4b46657636c/NG-en-20230213-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="netflix banner"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[550px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              {error ? <p className='p-2 bg-red-600 mt-2'>{error}</p> : null}
              <form onSubmit={formik.handleSubmit} className="w-full flex flex-col py-4">
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  name='email'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <button type='submit' className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign In
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" name="" id="" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">
                    New to Netflix?
                  </span>{" "}
                  <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login