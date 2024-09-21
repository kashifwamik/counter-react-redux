import { useRef } from "react";
import { useDispatch } from "react-redux";

import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";
const Controls = () => {
  const input = useRef();
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const handleReset = () => {
    dispatch(counterActions.reset());
  };
  const handleAdd = () => {
    dispatch(counterActions.add(input.current.value));
    input.current.value = "";
  };
  const handleSubtract = () => {
    dispatch(counterActions.subtract(input.current.value));
    input.current.value = "";
  };
  const handleToggle = () => {
    dispatch(privacyActions.toggle());
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary "
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success "
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleToggle}
        >
          Primary Toggle
        </button>
        <button type="button" className="btn btn-danger" onClick={handleReset}>
          Reset
        </button>
      </div>
      <div
        className="d-grid gap-2 d-sm-flex justify-content-sm-center"
        style={{ marginTop: "4%" }}
      >
        <input type="number" placeholder="Enter your number:" ref={input} />
        <button type="button" className="btn btn-info" onClick={handleAdd}>
          ADD
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleSubtract}
        >
          SUBTRACT
        </button>
      </div>
    </>
  );
};
export default Controls;
