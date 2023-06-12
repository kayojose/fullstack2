import { GlobalStyle } from './GlobalStyle';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'; 


const App = () => {
  return (
    <>
      <GlobalStyle />
        <Router>
          <Routes>
            <Route 
              path="/" 
              element={<Home />}
            /> 
          </Routes>
        </Router>
      
    </>
  );
}

export default App;