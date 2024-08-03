function Button({texts , onClick}){
return(
    <>
    <button onClick={onClick}>{texts}</button>
    </>
)
}
export default Button