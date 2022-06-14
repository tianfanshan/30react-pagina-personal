import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import UserForm from './Components/UserForm/UserForm'
import {BrowserRouter,Route, Routes} from 'react-router-dom'


function App() {
  const miInfo = [
    {
      id:1,
      name: "Shan",
      job:"Developer",
      age:27,
      email:"undefined",
      phoneNumber:"null"
    }
  ]
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/'element={<Home info={miInfo}/>}/>
          <Route path='/userForm'element={<UserForm />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
