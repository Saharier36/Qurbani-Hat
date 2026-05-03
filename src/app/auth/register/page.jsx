"use client";
import Link from "next/link";
import { BsPersonPlus } from "react-icons/bs";
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

const RegisterPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-[44%] relative flex-col justify-between p-10">
        <Image
          src="https://images.unsplash.com/photo-1560888126-5c13ad3f9345?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Qurbani livestock"
          fill
          className="object-cover rounded-r-4xl"
        />

        <p className="relative z-10 text-white font-bold text-xl">QurbaniHat</p>

        <div className="relative z-10">
          <h2 className="text-white text-3xl font-bold mb-3">
            Join Thousands of <br /> Buyers & Sellers
          </h2>
          <p className="text-white text-sm font-semibold">
            Register now to list or buy quality Qurbani animals
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-lg">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Create Account</h1>
            <p className="text-gray-500 text-sm mb-8">
              Fill in the details below to get started
            </p>
          </div>

          <form className="space-y-5 border p-5 lg:p-10 shadow-2xl rounded-2xl">
            <TextField
              isRequired
              name="name"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }
                return null;
              }}
            >
              <Label>Name</Label>
              <Input placeholder="Enter your Name" />
              <FieldError />
            </TextField>

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
              name="image"
              type="url"
              validate={(value) => {
                if (value && !/^https?:\/\/.+/.test(value)) {
                  return "Please enter a valid URL";
                }
                return null;
              }}
            >
              <Label>Photo URL</Label>
              <Input placeholder="https://example.com/photo.jpg" />
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

            <Button className="w-full bg-emerald-700 hover:bg-emerald-800 rounded-xl">
              <BsPersonPlus className="w-4 h-4" />
              Sign Up
            </Button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-orange-600 font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
