"use client";
import Link from "next/link";
import { BiLogIn } from "react-icons/bi";
import Image from "next/image";
import {
  Button,
  Description,
  FieldError,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { useState } from "react";

const LogInPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-[44%] relative flex-col justify-between p-10">
        <Image
          src="https://images.unsplash.com/photo-1568794045709-edaad184e7da?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Qurbani livestock"
          fill
          className="object-cover rounded-r-4xl"
        />

        <p className="relative z-10 font-bold text-xl">QurbaniHat</p>

        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-3">
            Your Trusted <br /> Qurbani Marketplace
          </h2>
          <p className="text-sm font-semibold">
            Find the best livestock for your Eid-ul-Adha celebration
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-lg">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-gray-500 text-sm mb-8">
              Enter your email and password to access your account
            </p>
          </div>

          <form className="space-y-5 border p-5 lg:p-10 shadow-2xl rounded-2xl">
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input placeholder="you@example.com" />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              minLength={8}
              name="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label>Password</Label>
              <InputGroup>
                <InputGroup.Input
                  type={isVisible ? "text" : "password"}
                  placeholder="Enter your password"
                />
                <InputGroup.Suffix className="pr-0">
                  <Button
                    isIconOnly
                    aria-label={isVisible ? "Hide password" : "Show password"}
                    size="sm"
                    variant="ghost"
                    onPress={() => setIsVisible(!isVisible)}
                  >
                    {isVisible ? (
                      <Eye className="size-4" />
                    ) : (
                      <EyeSlash className="size-4" />
                    )}
                  </Button>
                </InputGroup.Suffix>
              </InputGroup>
              <Description>
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-green-700 w-4 h-4 rounded"
                />
                Remember me
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-emerald-700 font-medium hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <Button className="w-full bg-emerald-700 hover:bg-emerald-800 rounded-xl">
              <BiLogIn className="w-4 h-4" />
              Sign In
            </Button>

            <div className="flex items-center gap-3">
              <span className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400">or continue with</span>
              <span className="flex-1 h-px bg-gray-200" />
            </div>

            <Button className="w-full bg-slate-700 hover:bg-slate-800 rounded-xl">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Sign In with Google
            </Button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/register"
              className="text-orange-600 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
