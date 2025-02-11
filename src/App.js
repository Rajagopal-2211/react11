// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"rafc
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
// // import React, { Component } from 'react'

// // export default class App extends Component {
// //   render() {
// //     return (
// //       <div>
        
// //       </div>
// //     )
// //   }
// // }
// import React,{Component} from 'react'
// import CBCPropEx1 from './propexample/CBCPropEx1';

// export default class App extends Component{
//   render() {
//     return (
//       <div>
//         App
//         <CBCPropEx1
//         username="RajaGopal"
//         age={21}
//         hobbies={["playing","cooking","sleeping"]}
//         address={{city:"Hyd",area:"misammaguda"}}
//         isMarried={function(){alert("Hii Pramodh")}}
//         />
//       </div>
//     )
//   }
// }
// import React from 'react'

// export default function App() {
//   return (
//     <div>
      
//     </div>
//   )
// }
// import React from 'react'
// import ProsChildrenex from './propexample/PropsChildrenex'
// import SubChildProps from './propexample/SubChildProps'

// const App =() => {
//   return (
//       <div>
//         <ProsChildrenex username="RajuGopal" company="Meta">
//           <h1>This data is Passing as a Props children to child company</h1>
//           <SubChildProps/>
//           </ProsChildrenex>
        
//       </div>
//     )
//   }
// export default App

// import React from 'react'
// import FunctionalComponents from './components/FunctionalComponents'

// const App = ()  {
//   return (
//     <div> className="App  "
//       <h1>Components App</h1>
//       <FunctionalComponents/>
//     </div>
//   )
// }

// export default App
import React from 'react'
import RefExample from './components/RefExample'

const App = () => {
  return (
    <div>
      
      <RefExample/>
      
    </div>
  )
}

export default App

