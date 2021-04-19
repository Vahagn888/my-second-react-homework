import React,{Component} from 'react';
import {Header} from "./header";
import Content from "./content";
import {Footer} from "./footer";
class App extends Component {
  render(){
    return (
        <div>
            <Header/>
            <Content/>
            <Footer/>
        </div>

    )
  }
}
export default App
// const App = () =>{
//   return(
//       <div>
//         Functional Component
//       </div>
//   )
// };

//Example 2
// export const App2 = () =>{
//     return(
//         <div>
//             Functional Component
//         </div>
//     )
// };
