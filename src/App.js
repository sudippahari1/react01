
import './App.css';
import Header from './Mycomponents/Header';
import {Todos} from "./Mycomponents/Todos";
import {Footer} from "./Mycomponents/Footer";

function App() {
  let todos = [
    {
      sno: 1,
      title  : "lets do this job",
      desc : "you have to do this job"
    },
    {
      sno: 2,
      title:  "a lets do this math",
      desc: "you have to do this math"
    },
    {
      sno: 2,
      title: "lets do this home",
      desc: "you have to do this home "
    }
  ]
  return (
    <>
      <Header title = 'My todos lists' serchBar = {false }/>
      <Todos/>
      <Footer/>
    </>
  );
}
export default App;
