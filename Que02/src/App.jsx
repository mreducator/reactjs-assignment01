import Button from './Component/Button/Button.jsx';
function App(){
  let text = 'ITS A Simple a Texts.'
  const handleOnClick=()=>{
    alert('Button was clicked');
  }
  return(
    <>
    <h1>React JS Assignment01 Que02</h1>
    <Button texts={text} onClick={handleOnClick}/>
    </>
  )
}

export default App