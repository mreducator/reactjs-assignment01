function List({items}){
   
    
return(
    <>
      <h2>Unordered List display with single props</h2>
       <ul>
        {items.map((list)=>(<li>{list}</li>))}
       </ul>
    
    </>
)
}

export default List