import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/Index/Index';
import ContactsPage from './pages/Contacts/Contacts';
import DefaultLayout from './layouts/DefaultLayout';
import ProductPage from './pages/Product/Product';

function App() {

  return (

    <Routes>
      <Route path={ '/' } element={ <DefaultLayout></DefaultLayout> }>
        <Route index element={ <IndexPage></IndexPage> }></Route>
        <Route path={ 'contacts' } element={ <ContactsPage></ContactsPage> }></Route>
        <Route path={ 'products' } element={ <ProductPage></ProductPage> }>
          <Route path={ ':userId' } element={ <ProductPage></ProductPage> }></Route>
        </Route>
      </Route>
    </Routes>

  );
}

export default App;
