function Person({userDetails}){
    const {name,age} = userDetails;
    return(
        <>
        <h2>Hello my  name is {name} and age is {age}</h2>
        </>
    )
  
}
export default Person