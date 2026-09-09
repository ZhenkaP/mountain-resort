import { format } from "date-fns";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      adults: 1,
      children: 0,
    },
  });

  const todayDate = format(new Date(), "yyyy-MM-dd"); //Определяем сегодняшнюю дату, чтобы корректно выбрать checkIn
  // Функция обработки отправки/ data - это данные с полей формы
  const onSubmit = (data) => {
    setTimeout(() => {
      reset();
    }, 1000);
    alert("Ваша заявка принята!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-full gap-1 p-4 space-y-4 lg:p-6 bg-green-700/40"
    >
      <h2 className="text-lg font-bold text-center lg:text-2xl ">
        Бронирование номеров
      </h2>
      <div className="grid justify-center grid-cols-1 gap-2 md:grid-cols-3">
        {/*Даты*/}
        <fieldset className="grid grid-cols-1 gap-3 p-0 m-0 border-none md:grid-cols-2">
          <div className="flex flex-col">
            <div className="relative flex flex-col justify-center px-2 py-2 transition-colors border border-slate-700 focus-within:border-slate-700">
              <label
                htmlFor="checkIn"
                className="text-xs font-semibold tracking-wider uppercase select-none text-slate-700"
              >
                Заезд
              </label>
              <input
                className="p-1 font-semibold bg-green-600/5 focus:outline-none focus:ring-2 focus:ring-slate-700"
                type="date"
                id="checkIn"
                min={todayDate}
                {...register("checkIn", { required: "Укажите дату заезда" })}
              />
            </div>
            {errors.checkIn && (
              <span className="text-xs text-red-600">
                {errors.checkIn.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <div className="relative flex flex-col justify-center px-2 py-2 transition-colors border border-slate-700 focus-within:border-slate-700">
              <label
                className="text-xs font-semibold tracking-wider uppercase select-none text-slate-700"
                htmlFor="checkOut"
              >
                Выезд
              </label>
              <input
                className="p-1 font-semibold bg-green-600/5 focus:outline-none focus:ring-2 focus:ring-slate-700"
                type="date"
                id="checkOut"
                {...register("checkOut", {
                  required: "Укажите дату выезда",
                  validate: (value, formValues) => {
                    // Если дата заезда не выбрана — пропускаем кастомную проверку
                    if (!formValues.checkIn) return true;
                    return (
                      value >= formValues.checkIn ||
                      "Дата выезда должна быть позже даты заезда"
                    );
                  },
                })}
              />
            </div>
            {errors.checkOut && (
              <span className="text-xs text-red-500">
                {errors.checkOut.message}
              </span>
            )}
          </div>
        </fieldset>

        {/*гости*/}
        <fieldset className="grid grid-cols-1 gap-3 p-0 m-0 border-none md:grid-cols-2">
          <div className="relative flex flex-col justify-center px-2 py-2 transition-colors border border-slate-700 focus-within:border-slate-700">
            <label
              htmlFor="adults"
              className="text-xs font-semibold tracking-wider uppercase select-none text-slate-700"
            >
              Взрослые
            </label>
            <select
              id="adults"
              className="p-1 font-semibold bg-green-700/5 focus:outline-none focus:ring-2 focus:ring-slate-700"
              {...register("adults", { valueAsNumber: true })}
            >
              <option value={1} className="text-white bg-slate-600">
                1
              </option>
              <option value={2} className="text-white bg-slate-600">
                2
              </option>
              <option value={3} className="text-white bg-slate-600">
                3
              </option>
              <option value={4} className="text-white bg-slate-600">
                4
              </option>
            </select>
          </div>

          <div className="relative flex flex-col justify-center px-2 py-2 transition-colors border bg-green-700/5 border-slate-700">
            <label
              htmlFor="children"
              className="text-xs font-semibold tracking-wider uppercase select-none text-slate-700"
            >
              Дети
            </label>

            <select
              id="children"
              className="p-1 font-semibold bg-green-700/5 focus:outline-none focus:ring-2 focus:ring-slate-700"
              {...register("children", { valueAsNumber: true })}
            >
              <option value={0} className="text-white bg-slate-600">
                Без детей
              </option>
              <option value={1} className="text-white bg-slate-600">
                1
              </option>
              <option value={2} className="text-white bg-slate-600">
                2
              </option>
              <option value={3} className="text-white bg-slate-600">
                3
              </option>
              <option value={4} className="text-white bg-slate-600">
                4
              </option>
            </select>
          </div>
        </fieldset>

        <button
          type="submit"
          className="w-full py-3.5 px-4 font-bold text-white transition-all bg-green-800 hover:bg-green-900 active:scale-[0.99] shadow-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 text-lg lg:text-xl"
        >
          Забронировать
        </button>
      </div>
    </form>
  );
}

export default Form;
