import React from 'react';

export function Wrapper({ children }: { children: React.ReactNode }) {
 return (
  <div className="font-sans font-400 text-16 leading-n text-t-black bg-b-white relative grid min-h-screen grid-cols-[minmax(300px,_1fr)] grid-rows-[auto,_1fr,_auto] overflow-hidden">
   {children}
  </div>
 );
}

export function Container({
 children,
 cls,
}: {
 children: React.ReactNode;
 cls: string;
}) {
 return <div className={`w-full ${cls} mx-auto px-[10px]`}>{children}</div>;
}

Container.defaultProps = {
 cls: 'max-w-[1130px]',
};

export function Main({
 children,
 cls,
}: {
 children: React.ReactNode;
 cls: string;
}) {
 return <main className={cls}>{children}</main>;
}

Main.defaultProps = {
 cls: '',
};
