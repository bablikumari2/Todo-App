import './App.css';
import {Todo} from './components/Todo'
import {EditTodo} from './components/EditTodo'
import { Route, Routes ,Link} from "react-router-dom";
import { Details } from './components/Details';

function App() {
  return (
    
    <div className="App">
      <header>
        <Link to={"/"}>
        <img src='https://learn.masaischool.com/img/logo-navbar.svg'/>  
        </Link>
        TODOS-APP
  
      </header>
      <Routes>
      <Route path="/" element={<Todo/>}></Route> 
      <Route path="/todo/:id/edit" element={<EditTodo/>}></Route>
      <Route path="/todo/:id" element={<Details/>}></Route>
      </Routes>
    </div>
  );
}
export default App;