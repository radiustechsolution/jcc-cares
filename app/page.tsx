"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  // Redirect to /dashboard
  useEffect(() => {
    location.href = "/dashboard";
  }, []);

  return (
    <section>
      <p>Welcome to JCC Cares - This page leads to the staff user dashboard</p>
      <Link className="text-blue-500 hover:underline" href="/dashboard">
        Go to Dashboard
      </Link>
    </section>
  );
}
