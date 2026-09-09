import { useState, useEffect } from "react";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility); //Мы «подписываемся» на событие прокрутки окна. Теперь каждый раз, когда пользователь крутит колесико мыши или свайпает экран, браузер будет запускать функцию toggleVisibility.

    return () => window.removeEventListener("scroll", toggleVisibility); //  функция очистки
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed z-50 p-3 transition-all duration-300 rounded-full shadow-lg focus:outline-none bg-slate-400 hover:bg-slate-600 hover:scale-110 bottom-8 right-8 focus:ring-2 focus:ring-blue-400"
          aria-label="Прокрутить наверх"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm37.66-101.66a8,8,0,0,1-11.32,11.32L136,107.31V168a8,8,0,0,1-16,0V107.31l-18.34,18.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0Z"></path>
          </svg>
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
