import React from 'react'; 


const List=()=>{
    return <ul
    style={{
        display: "flex",
        justifyContent: "space-between",
        listStyle: "none",
        paddingRight: "10px",
        position: "fixed",
            top: 0,
            
    }}
 >
        <li> Home </li>
             <li> Contacts </li>
        <li> Users </li>
        <li> Gallery </li>
     </ul>
}


const Navbar = ()=>{
    return(
        <nav
        style={{
            display: "grid",
            gridTemplateColumns: "50% 50%",
            alignItems: "center",
            
   }}
        >
        <h1>Login Form </h1>
        <List />
            </nav>
            );
    };     
       
    export default Navbar