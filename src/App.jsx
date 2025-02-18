import "./assets/css/style.css";
import MainArea from "./ui/mainArea";
import PaintProvider from "./context/PaintContext";

function App() {
  return (
    <>
      <PaintProvider>
        <MainArea />
      </PaintProvider>
    </>
  );
}

export default App;
