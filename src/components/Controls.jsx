import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const input = useRef();
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleAdd = () => {
    dispatch({ type: "ADD", payload: {num:input.current.value} });
    input.current.value = "";
  };
  const handleSubtract = () => {
    dispatch({ type: "SUBTRACT", payload: {num:input.current.value} });
    input.current.value = "";
  };
  const handleToggle = () => {
    dispatch({ type: "TOGGLE" });
  };
  const handleStop = () => {
    dispatch({ type: "STOP" });
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
        <button type="button" class="btn btn-warning" onClick={handleToggle}>
          Primary Toggle
        </button>
        <button type="button" class="btn btn-danger" onClick={handleStop}>
          Stop
        </button>
      </div>
      <div
        className="d-grid gap-2 d-sm-flex justify-content-sm-center"
        style={{ marginTop: "4%" }}
      >
        <input type="number" placeholder="Enter your number:" ref={input} />
        <button type="button" class="btn btn-info" onClick={handleAdd}>
          ADD
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          onClick={handleSubtract}
        >
          SUBTRACT
        </button>
      </div>
    </>
  );
};
export default Controls;
