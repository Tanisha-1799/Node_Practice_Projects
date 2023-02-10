import './App.css';
import Nav from './components/Nav';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import LogIn from './components/LogIn';

function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
    <Nav />     
        <Routes>

          <Route element={<PrivateComponent />}>
          <Route path='/' element={<h1>Product  Listing Component !</h1>}/>
          <Route path='/add' element={<h1>Add Product Component !</h1>}/>
          <Route path='/update' element={<h1>Update Product Component !</h1>}/>
          <Route path='/logout' element={<h1>Logout Component !</h1>}/>
          <Route path='/profile' element={<h1>Profile Component !</h1>}/>
          </Route>

          <Route path='/signUp' element={<SignUp />} />
          <Route path='/logIn' element={<LogIn />} />
        </Routes>
    </BrowserRouter>
    <Footer />
            
    </div>
  );
}

export default App;
