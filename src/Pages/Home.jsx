import { MapPinIcon } from "@heroicons/react/24/solid";
import ReviewCard from "../Components/Review";
import leasure from "../assets/leasure.webp";
import Form from "../Components/Form";

function Home() {
  const reviews = [
    {
      id: 1,
      name: "Алина",
      age: 29,
      text: "Это был самый романтичный уикенд в нашей жизни! Горный воздух здесь просто пьянит, после душного города мы наконец-то смогли    дышать полной грудью. Мы жили в уютном глэмпинге, и это стопроцентное попадание. Но больше всего мне понравилось просыпаться на рассвете: открываешь панорамное окно, а перед тобой — зеркальная гладь Маркаколя в окружении величественных гор. Вечером сидели у костра под огромными звездами. Обязательно вернемся!",
    },
    {
      id: 2,
      name: "Куаныш",
      age: 25,
      text: "Приехали с другом чисто порыбачить и отдохнуть от суеты. Решили проникнуться колоритом и заселились в юрту — очень крутой опыт, внутри тепло и есть всё необходимое. Горы вокруг Маркаколя — это мощь, энергетика невероятная, а воздух такой чистый, что с непривычки кружилась голова. Рыбалка здесь просто топовая, оправдала все ожидания на 100%. Мужики, если хотите крутого клева и дикой природы без отказа от комфорта —  вам сюда.",
    },
    {
      id: 3,
      name: "Дмитрий",
      age: 47,
      text: "Отличный семейный курорт. Свежий воздух и тишина Алтайских гор — то, что нужно, чтобы перезагрузиться. Семья в восторге! Мы арендовали просторный коттедж, места хватило всем с запасом. Огромный плюс организаторам за детскую зону отдыха — дети были постоянно заняты играми и квестами на улице, пока мы с женой отдыхали. Ну и моя личная отдушина — это рыбалка. Маркакольский ленок — это нечто! Улов получился отличный, вечером пожарили рыбу на мангале. Рекомендую для семейного отдыха.",
    },
    {
      id: 4,
      name: "Мадина",
      age: 36,
      text: "Искала место, где можно побыть наедине с природой и куда пускают с питомцами. Mountain Resort подошел идеально. Мы с моим ретривером жили в глэмпинге — очень стильно и комфортно. Отдых в горах — это лучшее лекарство от стресса. Мы часами гуляли по тропам вдоль озера, дышали ароматом хвои и лесных трав. Собака набегалась на свежем воздухе и была счастлива не меньше меня. Администрации отдельное спасибо за дружелюбное отношение к животным.",
    },
  ];
  return (
    <>
      <section className="relative  w-full h-[70vh]">
        {/* Фон с изображением */}
        <div
          className="absolute inset-0 z-0 bg-center bg-cover"
          style={{ backgroundImage: `url('${leasure}')` }}
        ></div>
        {/* Затемнение */}
        <div className="absolute inset-0 z-10 bg-black/30"></div>

        {/* Контент поверх фона (z-20) */}
        <div className="relative z-20 h-full px-4 mx-auto md:pt-24 max-w-[100rem]">
          <div className="relative grid grid-cols-1 gap-8 px-4 pt-16 mt-50 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl text-white md:text-5xl font-philosopher lg:text-[100px] max-w-[1040px]">
                Mountain Resort
              </h1>

              <div className=""></div>
              <div className="flex items-center gap-3">
                <MapPinIcon className="w-8 h-8 text-white md:w-16 md:h-16"></MapPinIcon>
                <hr className="w-full my-6 border-t border-white" />
                <p className="text-sm font-medium text-white md:text-lg lg:text-4xl">
                  {" "}
                  100 км от Коктобе
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <p className="text-sm leading-6 text-white md:text-lg lg:text-4xl">
                Добро пожаловать в райское место для Вашего отдыха, где
                спокойствие озера и тишина гор помогут забыть о суете большого
                города.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full scroll-mt-32" id="bookingForm">
        <Form />
      </section>
      <section className="h-full max-w-full gap-4 py-6 ">
        <div className="grid grid-cols-1 gap-4 px-4 mx-auto lg:grid-cols-2 lg:gap-6">
          <div className="">
            <h2 className="text-3xl lg:text-[60px] font-raleway text-green-800 py-4  text-center pb-4 lg:pb-8">
              Мы на карте
            </h2>

            {/* Контейнер с адаптивной высотой */}
            <div className="relative w-full h-[400px] lg:h-[930px] rounded-xl overflow-hidden shadow-lg ">
              <iframe
                src="https://yandex.kz/map-widget/v1/?ll=85.778172%2C48.741221&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgkxNjQzMzA3MzISpgHSmtCw0LfQsNKb0YHRgtCw0L0sINCo0YvSk9GL0YEg0prQsNC30LDSm9GB0YLQsNC9INC-0LHQu9GL0YHRiywg0JzQsNGA0pvQsNC606nQuyDQsNGD0LTQsNC90YssINCi06nRgdKb0LDQudGL0qMg0LDRg9GL0LvQtNGL0psg0L7QutGA0YPQs9GWLCDQnNCw0YDSm9Cw0LrTqdC7INC606nQu9GWIgoNUoWrQhW6-0JC&utm_source=share&z=11"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                title="Карта расположения Mountain Resort"
              />
            </div>
          </div>
          <div className="">
            <h2 className="text-3xl lg:text-[60px] font-raleway text-green-800 py-4  text-center pb-4 lg:pb-8">
              Отзывы
            </h2>
            <ul className="grid grid-cols-1">
              {reviews.map((review) => (
                <ReviewCard
                  key={review.id}
                  name={review.name}
                  age={review.age}
                  text={review.text}
                ></ReviewCard>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
