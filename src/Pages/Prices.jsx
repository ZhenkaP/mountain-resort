import glamping from "../assets/glamping.webp";

function Prices() {
  return (
    <>
      <section className="relative w-full h-[70vh]">
        {/* 2. Фон на весь блок */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url('${glamping}')`,
          }}
        />

        {/* Градиент для плавного перехода в белый цвет 
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white/100"></div>*/}
        <div className="absolute inset-0 z-10 flex items-end justify-center lg:items-center">
          <h1 className="px-4 text-4xl  text-white md:text-4xl font-philosopher lg:text-[100px] pb-4">
            Цены на проживание
          </h1>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="w-full max-w-full px-4 py-6 mx-auto md:py-16 md:px-16 lg:px-[100px]">
          <div className="grid md:grid-cols-[1fr_3fr_1fr] gap-6 grid-cols-1 items-start py-8 border-b border-stone-200 md:justify-between">
            <h3 className="text-xl font-bold text-stone-900 font-philosopher md:text-2xl lg:text-[60px] whitespace-nowrap">
              Коттедж
            </h3>
            <div className="min-w-0">
              <ul className="py-2 text-sm text-stone-700 md:text-xl lg:text-4xl">
                <li className="py-2">С верандой в скандинавском стиле</li>
                <li className="">Площадь: 40 кв.м.</li>
                <li className="">
                  <strong>Вместимость:</strong> до 4 человек
                </li>
              </ul>
              <p className="text-sm leading-6 text-stone-700 md:text-xl lg:text-4xl">
                Большая гостиная с дровяной печкой, складным диваном и обеденным
                столом. Кухонная зона со всем необходимым, набор посуды и
                столовых приборов, холодильник, плита и микроволновая печь,
                музыкальный центр. Санузел с ванной. Сейф для ценных вещей.
                Спальня с двуспальной кроватью. Кондиционирование коттеджа и
                москитные сетки на всех окнах.
              </p>
            </div>
            <div className="flex flex-col text-right md:items-end whitespace-nowrap">
              <span className="text-lg font-bold text-stone-900 md:text-2xl lg:text-4xl">
                50 000 ₸
              </span>
              <span className="text-xs text-stone-500 md:text-lg lg:text-2xl">
                за ночь
              </span>
            </div>

            <h3 className="text-xl font-bold text-stone-900 font-philosopher md:text-2xl lg:text-[60px]">
              Глэмпинг
            </h3>
            <div className="">
              <ul className="py-2 text-stone-700 md:text-xl lg:text-4xl">
                <li>Площадь: 25 кв.м.</li>
                <li className="">
                  <strong>Вместимость</strong>: до 3 человек
                </li>
              </ul>
              <p className="text-sm leading-6 text-stone-700 md:text-xl lg:text-4xl">
                Большая двуспальная кровать + дополнительная кровать,
                мини-холодильник, чайник, собственная терраса со столом на 4
                человека.Туалет и душ в административном комплексе. Вешалка для
                одежды.
              </p>
            </div>
            <div className="flex flex-col md:items-end whitespace-nowrap">
              <span className="text-lg font-bold text-right text-stone-900 md:text-xl lg:text-4xl ">
                30 000 ₸
              </span>
              <span className="text-xs text-right text-stone-700 md:text-lg lg:text-2xl">
                за ночь
              </span>
            </div>

            <h3 className="text-xl font-bold text-stone-900 font-philosopher md:text-2xl lg:text-[60px]">
              Юрта
            </h3>
            <div className="">
              <ul className="py-2 text-stone-700 md:text-xl lg:text-4xl">
                <li>Площадь: 22 кв. м.</li>
                <li className="">
                  <strong>Вместимость</strong>: до 6 человек
                </li>
              </ul>
              <p className="text-sm leading-6 text-stone-700 md:text-xl lg:text-4xl">
                Уютная и просторная юрта в национальном стиле.
              </p>
              <span className="text-sm leading-6 text-stone-700 md:text-xl lg:text-4xl">
                Что входит в стоимость:
              </span>
              <p className="text-sm leading-6 text-stone-700 md:text-xl lg:text-4xl">
                {" "}
                Что входит в стоимость • жер стол• корпе• подушки• 6 спальных
                мест. Можно брать свои продукты питания и напитки.
              </p>
            </div>
            <div className="flex flex-col text-right md:items-end whitespace-nowrap">
              <span className="text-lg font-bold text-stone-900 md:text-xl lg:text-4xl">
                45 000 ₸
              </span>
              <span className="text-xs text-stone-500 md:text-lg lg:text-2xl">
                за ночь
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Prices;
