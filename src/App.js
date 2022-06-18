import  './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import loader from './assets/loaders/mona.gif'
import MainMenu from "./components/MainMenu/MainMenu"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<MainMenu />} />
          </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
