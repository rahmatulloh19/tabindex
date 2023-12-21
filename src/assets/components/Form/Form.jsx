// import Buttons from "../Buttons/Buttons";

import { useState } from "react";

function Form() {
  const Tab_Texts = ["Positive", "Negative", "Neutral"];

  let [index, setIndex] = useState(1);
  function indexFunc(evt) {
    evt.preventDefault();

    const elInputValue = evt.target[0].value.trim();

    if (elInputValue) {
      if (elInputValue == 1) {
        setIndex(1);
        evt.target[0].value = "";
      } else if (elInputValue == 2) {
        setIndex(2);
        evt.target[0].value = "";
      } else if (elInputValue == 3) {
        setIndex(3);
        evt.target[0].value = "";
      } else {
        alert("Index is invalid");
      }
    }
  }

  function swapClass(index) {
    setIndex(index);
    evt.target.parentElement.childNodes.forEach((item) => {
      item.classList.remove("active-btn");
    });
    evt.target.classList.add("active-btn");
  }
  return (
    <>
      <form onSubmit={indexFunc} className="flex mb-8">
        <input
          className="grow outline-none border-b-2 transition hover:border-gray-300 focus:border-black mr-2 font-medium"
          type="text"
          placeholder="Enter tab index"
        />
        <button
          className="bg-gray-100  p-3 rounded transition hover:bg-gray-200 focus:bg-gray-300 font-medium"
          type="submit"
        >
          Change tab
        </button>
      </form>
      <div className="inner-wrapper space-x-3">
        <button
          className="font-bold opacity-50 active-btn hover:opacity-80 transition-opacity focus:opacity-100"
          type="button"
          onClick={(evt) => {
            setIndex(1);
            evt.target.parentElement.childNodes.forEach((item) => {
              item.classList.remove("active-btn");
            });
            evt.target.classList.add("active-btn");
          }}
        >
          Positive
        </button>
        <button
          className="font-bold opacity-50 hover:opacity-80 transition-opacity focus:opacity-100"
          type="button"
          onClick={(evt) => {
            setIndex(2);
            evt.target.parentElement.childNodes.forEach((item) => {
              item.classList.remove("active-btn");
            });
            evt.target.classList.add("active-btn");
          }}
        >
          Negative
        </button>
        <button
          className="font-bold opacity-50 hover:opacity-80 transition-opacity focus:opacity-100"
          type="button"
          onClick={(evt) => {
            setIndex(3);
            evt.target.parentElement.childNodes.forEach((item) => {
              item.classList.remove("active-btn");
            });
            evt.target.classList.add("active-btn");
          }}
        >
          Neutral
        </button>
      </div>
      <p className="mt-5 font-medium">{Tab_Texts[index - 1]} content</p>
    </>
  );
}

export default Form;
