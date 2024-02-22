import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import ItemCount from './components/ItemCount/ItemCount.jsx';
import CartOrderForm from './components/cartOrderForm/cartOrderForm.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './context/globalContext.jsx';

function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="producto/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartOrderForm />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />

        </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
