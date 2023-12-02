import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Crud } from './components/crudop/crud';
import { Update } from './components/update/update';
function App() {
return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={[<Crud/>]}/>
    <Route path='/update' element={[<Update/>]}/>
   </Routes>
   </BrowserRouter>
  </>
  );
}
export default App;
