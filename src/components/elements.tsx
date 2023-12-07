import React from 'react';

export function Title1({ children }: { children: React.ReactNode }) {
 return (
  <h1 className="text-64 font-700 leading-[1.12] tracking-[-1.16px] capitalize">
   {children}
  </h1>
 );
}
