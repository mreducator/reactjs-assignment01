import Person from "./component/Person/Person.jsx";
function App(){
  const user = {
    name:'Raghu',
    age:25
  }
  return(
    <>
    <h1>Pw-Skills ReactJs- Assignment01 Que01</h1>
    <Person userDetails={user}/>
    </>
  )
}
export default App