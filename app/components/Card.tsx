'use client';

import React from 'react';

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 shadow-md bg-white rounded-xl">
      {children}
    </div>
  );
}
