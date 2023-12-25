import { useState, useEffect, useRef } from 'react';

export default function ThemeSwitcher() {
 const [theme, setTheme] = useState<string>('light');
 const btnSwitch = useRef<HTMLButtonElement>(null!);

 const changeTheme = () => {
  setTheme(theme == 'light' ? 'dark' : 'light');
 };

 useEffect(() => {
  localStorage.setItem('theme', theme == 'dark' ? 'light' : 'dark');
  document.documentElement.setAttribute('data-theme', theme);
  if (theme == 'dark') {
   btnSwitch.current.classList.remove('bg-theme-dark');
   btnSwitch.current.classList.add('bg-theme-light');
  } else {
   btnSwitch.current.classList.remove('bg-theme-light');
   btnSwitch.current.classList.add('bg-theme-dark');
  }
 }, [theme]);

 return (
  <button
   ref={btnSwitch}
   className={`w-[24px] h-[24px]`}
   onClick={changeTheme}
  ></button>
 );
}
