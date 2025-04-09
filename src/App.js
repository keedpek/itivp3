import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/itivp3/">
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
