import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./Users";
import UserShow from "./UserShow";
import UserCreate from "./UserCreate";
import UserEdit from "./UserEdit";
import Page404 from "./Page404";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/create" element={<UserCreate />} />
        <Route path="/usershow/:id" element={<UserShow />} />
        <Route path="/useredit/:id" element={<UserEdit />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
