import { Routes, Route } from 'react-router-dom'
import HomePage from './Page/HomePage';
import AboutPage from './Page/AboutPage';
import ContactPage from './Page/ContactPage';
import ProductPage from './Page/ProductPage';

import LoginPage from './Page/LoginPage';
import Layout from './Components/Layout';

function App() {
  return (
    <Routes>
      <Route path='/home' element= {<Layout/>}>
        <Route path='' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='product/:productId' element={<ProductPage />} />
        <Route path='*' element={<h1>404! this page is not found!!!</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
