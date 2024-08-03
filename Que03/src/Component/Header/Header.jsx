function Header({title}){
    console.log(title)
    return(
        <>
        <header>
            <h2>This is a displaying heading with title props</h2>
            <h3> Title is:{title}</h3>
        </header>

        </>
    )
}
export default Header