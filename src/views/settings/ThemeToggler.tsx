import React, { FC } from 'react';
import { useTheme } from '../../hooks';
import './ThemeToggler.sass';

const ThemeToggler: FC = () => {
  const { theme, setTheme } = useTheme();
  const handleThemeToggle = () =>
    theme === 'dark' ? setTheme('light') : setTheme('dark');

  return (
    <button
      className="theme-toggle-btn"
      data-theme={theme}
      onClick={handleThemeToggle}
      title={theme === 'dark' ? 'Enable light mode' : 'Enable dark mode'}
    >
      <svg
        width="32"
        height="18"
        viewBox="0 0 32 18"
        fill="#ddd"
        xmlns="http://www.w3.org/2000/svg"
        className="toggle on"
      >
        <rect
          x="1"
          y="1"
          width="30"
          height="16"
          rx="8"
          className="frame"
        ></rect>
        <circle cx="10" cy="9" r="5" fill="white" className="circle"></circle>
      </svg>
    </button>
  );
};

export default ThemeToggler;