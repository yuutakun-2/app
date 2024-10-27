// import React from "react";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Counter />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <span>
//           <span>Learn </span>
//           <a
//             className="App-link"
//             href="https://reactjs.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux-toolkit.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           ,<span> and </span>
//           <a
//             className="App-link"
//             href="https://react-redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//         </span>
//       </header>
//     </div>
//   );
// }

// export default App;

import FruitList from "./features/fruits/FruitList";
import AddFruit from "./features/fruits/AddFruit";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";

const users = [
  { id: 1, name: "Alice", gender: "f" },
  { id: 2, name: "Bob", gender: "m" },
  { id: 3, name: "Tom", gender: "m" },
  { id: 4, name: "Mary", gender: "f" },
];

function User() {
  const { name } = useParams();
  return <h1>Profile: {name}</h1>;
}

// function Male(props) {
//   return (
//     <ul>
//       {users
//         .filter((u) => u.gender === "m")
//         .map((u) => (
//           <li key={u.id}>{u.name}</li>
//         ))}
//     </ul>
//   );
// }

// function Female(props) {
//   return (
//     <ul>
//       {users
//         .filter((u) => u.gender === "f")
//         .map((u) => (
//           <li key={u.id}>{u.name}</li>
//         ))}
//     </ul>
//   );
// }

export default function App() {
  const navigate = useNavigate();
  return (
    <div>
      <FruitList />
      <AddFruit />
      <h1>FruitList and AddFruit test</h1>

      {/* React Router */}
      <div>
        {/* <ul>
          <li>
            <Link to="/male">Male</Link>
          </li>
          <li>
            <Link to="/female">Female</Link>
          </li>
        </ul>
        Not using useNavigate(), just using Link */}
        <div>
          {users.map((u) => (
            <button onClick={() => navigate(`/user/${u.name}`)}>
              {u.name}
            </button>
          ))}
        </div>
        <div style={{ background: "cyan", padding: 20 }}>
          <Routes>
            {/* <Route path="/male" element={<Male />} />
            <Route path="/female" element={<Female />} /> */}
            <Route path="/user/:name" element={<User />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
