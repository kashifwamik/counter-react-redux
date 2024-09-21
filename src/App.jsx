import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import PrivacyToggle from "./components/PrivacyToggle";
function App() {
  const privacyToggle = useSelector((store) => store.privacy);
  return (
    <center>
      <Container>
        <Header />
        {privacyToggle ? <PrivacyToggle /> : <DisplayCounter />};
        <Controls />
      </Container>
    </center>
  );
}

export default App;
