import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, NavDropdown, Nav, Image, Dropdown,NavItem,NavLink,DropdownButton, Button   } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";




const NavBar = ()=>{

     const [positionIconNavBar, setPositionNavbar] = useState("right-[4rem]");
     
     const [marginLeftBtn, setMarginLeftBtn] = useState("ml-3")
     const [marginEventosBtn, setMarginEventosBtn] = useState("mr-1")

     const [marginCadastrarBtn, setMarginCadastrarBtn] = useState("relative left-[39rem]");
     const [marginLoginBtn, setMarginLoginBtn] = useState("relative left-[40rem]");

     const [marginBtnHome, setMarginBtnHome] = useState("");
     
    
     const responsiveScripts = ()=>{
          let widthPage = window.screen.width  
          let buttonDropdown = document.getElementById("dropdownMenuEvento")

          if (widthPage <= 663){
              setPositionNavbar("left-[9rem]")
          }
         
          if (widthPage <= 980){
              setMarginLeftBtn("")
              setMarginEventosBtn("mt-3 mb-3")
              setMarginBtnHome("mt-3")
              setMarginCadastrarBtn("relative left-[9rem] bottom-[10.5rem] mt-3")
              setMarginLoginBtn("relative left-[9rem] bottom-[10.5rem] mt-3")
          
        //  if (widthPage >= 1400){
        //     setMarginCadastrarBtn("relative left-[9rem] bottom-[10.5rem] mt-3")
        //     setMarginLoginBtn("relative left-[12rem] bottom-[10.5rem] mt-3")
        //  }

              buttonDropdown.addEventListener("focus", ()=>{
                  setMarginCadastrarBtn("relative left-[9rem] bottom-[16.6rem] mt-3")
                  setMarginLoginBtn("relative left-[9rem] bottom-[16.6rem] mt-3")
              })
              buttonDropdown.addEventListener("blur", ()=>{
                setMarginCadastrarBtn("relative left-[9rem] bottom-[10.5rem] mt-3")
                setMarginLoginBtn("relative left-[9rem] bottom-[10.5rem] mt-3")
                  
                    

            })

              

          }
        
       

   

     }
     
     
     

    useEffect(()=>{
        responsiveScripts();
    }, []) 

    return (
        <>
         <Navbar className="fixed w-full bg-gradient-to-r z-10 from-indigo-500 to-purple-900 " expand="lg">
            <Container>
               <Navbar.Brand className={`relative ${positionIconNavBar} w-auto`}
                href="/home">
                    <Image fluid className="w-12"
                     src="https://cdn-icons-png.flaticon.com/512/1683/1683712.png"
                      rounded 
                     ></Image>
                     </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse  id="basic-navbar-nav">
               <Nav className={"me-auto "}>
                    <NavItem className={"mr-3 "+ marginBtnHome}>
                       <button onClick={()=>window.location.href = "/home"} className={"text-white bg-dark" +
                       " transition-all ease-in-out delay-150  p-2 rounded-[15px] w-20 " +
                       "hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300"}>
                           Home
                       </button>
                    </NavItem>
                    <NavItem className="dropdown ">
                    <button id="dropdownMenuEvento"
                     data-bs-toggle="dropdown"
                     aria-expanded="false"
                      className={marginLeftBtn + marginEventosBtn +" text-white bg-dark" +
                       " transition-all ease-in-out delay-150 h-10 p-2 rounded-[15px] w-[6.7rem]  " +
                       "hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300 dropdown-toggle"}>
                            Eventos 
                       </button>
                          <ul class="dropdown-menu mb-3" aria-labelledby="dropdownMenuEvento">
                             <li><a class="dropdown-item" href="/lista-eventos">Lista de eventos</a></li>
                             <li><a class="dropdown-item" href="/cadastrar-eventos">Adicionar evento</a></li>
                          </ul> 
                    </NavItem>
                    <NavItem className="mr-3">
                       <button onClick={()=>window.location.href = "/sobre"} className={marginLeftBtn+" text-white bg-dark" +
                       " transition-all ease-in-out delay-150  p-2 rounded-[15px] w-20 " +
                       "hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300"}>
                           Sobre
                       </button>
                    </NavItem>
                    <NavItem>
                        <button onClick={()=>window.location.href = "/cadastro"} className={marginCadastrarBtn+" text-white bg-cyan-500" +
                        " transition-all ease-in-out delay-150  p-2 rounded-[15px] w-[5.7rem] " +
                        "hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300"}>
                           Cadastrar
                        </button>
                    </NavItem>
                    <NavItem>
                        <button onClick={()=>window.location.href = "/login"} className={marginLoginBtn+" text-white  bg-cyan-500" +
                        " transition-all ease-in-out delay-150  p-2 rounded-[15px] w-[5.7rem] " +
                        "hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300"}>
                           Logar
                        </button>
                    </NavItem>
              </Nav>
    </Navbar.Collapse>

  </Container>
</Navbar>
{/*<img className="w-5 relative left-[4.8rem] bottom-5" src="https://cdn-icons-png.flaticon.com/512/6704/6704925.png" alt="" >*/}
        </>
    )
}

export default NavBar;