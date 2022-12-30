
import Header from './Components/Header';
import ProductDetails from './Components/ProductDetails';
import ProductListing from './Components/ProductListing';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
     <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<ProductListing />} />
          <Route path='/product/:productId' element={<ProductDetails />} />
          <Route>404 Not Found</Route>
        </Routes>
     </Router>
    </div>
  );
}

export default App;
