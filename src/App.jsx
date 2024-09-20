import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/displayCounter";
import Container from "./components/Container";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import PrimaryToggle from "./components/PrimaryToggle";
function App() {
  const primaryToggle = useSelector((store) => store.primary);
  return (
    <center>
      <Container>
        <Header />
        {primaryToggle ? <PrimaryToggle /> : <DisplayCounter />};
        <Controls />
      </Container>
    </center>
  );
}

export default App;
