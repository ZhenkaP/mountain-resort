function Card({ icon: Icon, name, text }) {
  return (
    <div className="flex flex-col items-center gap-3 p-5 border-2 border-green-700 shadow-xl bg-green-50 rounded-xl">
      {Icon && (
        <div className="w-8 h-8 text-green-700">
          <Icon />
        </div>
      )}
      <h2 className="text-lg font-semibold text-green-800 md:text-xl lg:text-2xl">
        {name}
      </h2>
      <p className="text-sm text-green-800 md:text-lg lg:text-xl">{text}</p>
    </div>
  );
}

export default Card;

//icon - это функция, а name, text - это строки. Строки напрямую передаются как пропс, а функцию нужно обернуть в компонент Icon
