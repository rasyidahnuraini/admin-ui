import React, { useState } from 'react'
import LabeledInput from '../Elements/LabeledInput'
import Button from '../Elements/Button'

function FormSignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {/* Judul */}
      <div className="mt-6 text-center">
        <h2 className="text-xl font-bold text-gray-01">
          Create an account
        </h2>
      </div>

      {/* Form Sign Up */}
      <div className="mt-8">
        <form action="">
          <div className="mb-5">
            <LabeledInput
              label="Name"
              id="name"
              type="text"
              placeholder="Your name"
              name="name"
            />
          </div>

          <div className="mb-5">
            <LabeledInput
              label="Email Address"
              id="email"
              type="email"
              placeholder="hello@example.com"
              name="email"
            />
          </div>

          <div className="mb-4">
            <LabeledInput
              label="Password"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••••"
              name="password"
            />

            <div className="mt-2 flex items-center">
              <input
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
                className="accent-primary"
              />
              <label
                htmlFor="showPassword"
                className="text-xs text-gray-03 ml-2"
              >
                Show password
              </label>
            </div>
          </div>

          {/* Terms of Service */}
          <div className="mb-5 text-xs text-gray-03">
            By continuing, you agree to our
            <a href="#" className="text-primary ml-1">
              terms of service.
            </a>
          </div>

          <Button>Sign up</Button>
        </form>
      </div>

      {/* Or sign up with */}
      <div className="my-8 px-7 flex flex-col justify-center items-center text-xs text-gray-03">
        <div className="border border-gray-05 w-full"></div>
        <div className="px-2 bg-special-mainBg absolute">
          or sign up with
        </div>
      </div>

      {/* Google Button */}
      <div className="mb-8">
        <Button type="button" variant="secondary">
          <span className="flex items-center justify-center">
            <span className="font-bold text-xl mr-2">
              <span className="text-blue-500">G</span>
            </span>
            Continue with Google
          </span>
        </Button>
      </div>

      {/* Link Sign In */}
      <div className="flex justify-center text-sm">
        <span className="text-gray-03">
          Already have an account?
        </span>
        <a href="/" className="text-primary font-bold ml-1">
          Sign in here
        </a>
      </div>
    </>
  )
}

export default FormSignUp
