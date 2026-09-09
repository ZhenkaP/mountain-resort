import { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import logo from "../assets/greenlogo.jpg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuHandle = () => {
    setIsOpen((prev) => !prev);
  };
  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between px-4 bg-green-800/90 md:bg-green-800/15 lg:px-6 backdrop-blur-md">
      {/* Десктопная навигация */}
      <nav className="items-center hidden gap-4 font-bold text-white/80 md:flex font-raleway lg:text-3xl md:gap-6 lg:gap-8 ]">
        <Link to="/">
          <img src={logo} className="md:h-24 md:w-24 "></img>
        </Link>
        <Link to="/" className="transition-colors hover:text-green-700 ">
          Главная
        </Link>
        <Link to="prices" className="transition-colors hover:text-green-700">
          Проживание
        </Link>
        <Link to="services" className="transition-colors hover:text-green-700">
          Услуги
        </Link>
      </nav>
      {/* кнопка гамбургер или Х */}
      <div className="flex items-center gap-4">
        <Button
          onClick={menuHandle}
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          className="p-2 text-white md:hidden"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </Button>

        <Link to="/#bookingForm">
          <Button className="hidden px-4 py-2 uppercase transition-colors border border-solid shadow-lg text-white/80 lg:py-4 lg:px-6 lg:font-bold font-raleway hover:text-green-700 lg:text-2xl border-white/80 md:block shadov">
            Забронировать
          </Button>
        </Link>
      </div>
      {/* Мобильное выпадающее меню */}
      {isOpen && (
        <nav className="absolute left-0 right-0 flex flex-col items-center gap-2 py-4 font-bold text-green-800 shadow-2xl bg-white/90 top-full md:hidden font-raleway">
          <Link to="/" onClick={handleLinkClick}>
            <img src={logo} className="w-16 h-16"></img>
          </Link>
          <Link
            to="/"
            onClick={handleLinkClick}
            className="transition-colors hover:text-stone-700"
          >
            Главная
          </Link>

          <Link
            to="/prices"
            onClick={handleLinkClick}
            className="transition-colors hover:text-stone-700"
          >
            Проживание
          </Link>
          <Link
            to="/services"
            onClick={handleLinkClick}
            className="transition-colors hover:text-stone-700"
          >
            Услуги
          </Link>

          <Link to="/#bookingForm">
            <Button className="px-4 py-2 text-green-800 uppercase transition-colors border-2 border-green-800 border-solid lg:py-4 lg:px-6 lg:font-bold font-raleway hover:bg-slate-500 lg:text-2xl">
              Забронировать
            </Button>
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
