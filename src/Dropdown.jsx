import { useState } from "react";

const Dropdown = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [selectedValue, setSelectedValue] = useState('Selected');

  const options= [
    {
      id:1,
      value: "YES",
    },
    {
        id:2,
      value: "PROBABLY_NOT",
    },
    {
        id:3,
      value: "ALWAYS",
    },
    {
        id:4,
      value: "ON_REQUIREMENT_BASIS",
    },
  ];
  

  // function to handle when user selects any option
  const handleClick = (option) => {
    setSelectedValue(option.value);
    setIsOpen(false);
  };

  return (
    <div
      className="relative inline-block text-left min-w-[400px]"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="bg-white border border-gray-300 rounded-md py-3 px-5 text-gray-700 flex items-center justify-between w-full"
      >
        <span className="text-xl font-semibold">
          {selectedValue}
        </span>
        <img src='/images/drop.png' alt='Not loaded' className="h-10 w-10"/>
      </button>

      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-md font-semibold text-xl">
          {options.map((option) => (
            <li
              key={option.id}
              onClick={() => handleClick(option)}
              className="cursor-pointer px-4 py-2 hover:bg-blue-500 hover:text-white"
            >
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;