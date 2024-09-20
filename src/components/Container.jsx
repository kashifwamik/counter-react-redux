const Container = ({ children }) => {
  return (
    <div
      class="card"
      style={{
        width: "50%",
        height: "50%",
        marginTop: "10%",
        padding: "20px",
      }}
    >
      {children}
    </div>
  );
};
export default Container;
