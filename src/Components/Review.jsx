import { useState } from "react";

function ReviewCard({ name, age, text }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <li className="p-4 rounded-md shadow-xl bg-white/50">
      <p className="py-2 text-sm font-semibold mb:text-xl lg:text-2xl">
        {name}, {age} лет
      </p>
      <div>
        <p
          className={`text-sm mb:text-xl lg:text-2xl ${!isExpanded ? "line-clamp-4" : ""}`}
        >
          {text}
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-sm font-medium text-stone-600 hover:text-stone-800"
        >
          {isExpanded ? "Свернуть" : "Читать полностью"}
        </button>
      </div>
    </li>
  );
}

export default ReviewCard;
