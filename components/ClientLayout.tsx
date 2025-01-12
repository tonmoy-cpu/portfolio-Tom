// components/ClientLayout.tsx
"use client"
import React from 'react'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#030014] overflow-y-scroll overflow-x-hidden">
      {children}
    </div>
  );
}