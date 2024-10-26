import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFruits, add } from "./fruitSlice";

export default function NewFruit() {
  const nameRef = useRef();
  const priceRef = useRef();
  const fruits = useSelector(selectFruits);
  const dispatch = useDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          add({
            id: fruits[fruits.length - 1].id + 1,
            name: nameRef.current.value,
            price: priceRef.current.value,
          })
        );
      }}
    >
      <input ref={nameRef} placeholder="Name" />
      <input ref={priceRef} placeholder="Price" />
      <button>Add</button>
    </form>
  );
}
