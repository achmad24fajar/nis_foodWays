import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header.js'

// import Landing from './pages/Landing.js'

import DetailProduct from './pages/detailProduct.js'

import './Styles.css';


function App() {
  return (
    <div className="mb-5">
      <Header />
      
      <DetailProduct />
    </div>

  );
}

export default App;
