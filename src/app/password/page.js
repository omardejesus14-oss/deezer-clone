"use client";

import { Suspense } from "react";
import RegisterPassword from "../components/password-form";

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black"></div>}>
      <RegisterPassword />
    </Suspense>
  );
}