import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, NavDropdown, Nav, Image, DropdownButton,Dropdown  } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
const NavBar = ()=>{

     const [textColorNavBar, setTextColorNavBar] = useState("text-white");
     const [positionIconNavBar, setPositionNavbar] = useState("right-[4rem]");


     const iconPositionResponsive = ()=>{
         console.log("entrou")
          let widthPage = window.screen.width  
          if (widthPage <= 663){
              console.log("yes")
              setPositionNavbar("left-[9rem]")
          }
     }
    
    useEffect(()=>{
        iconPositionResponsive();
    }, []) 

    return (
        <>
         <Navbar className=" bg-gray-900 " expand="lg">
            <Container>
               <Navbar.Brand className={`relative ${positionIconNavBar} w-auto`}
                href="/">
                    <Image fluid className="w-12"
                     src="https://cdn-icons-png.flaticon.com/512/1683/1683712.png"
                      rounded 
                     ></Image>
                     </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto ">
                    <Nav.Link className={textColorNavBar} active >Home</Nav.Link>
                    <Nav.Link className={textColorNavBar}  href="#link"></Nav.Link>
                    <NavDropdown className="border border-" variant="outline-secondary" title="Eventos" >
                        <DropdownItem href="/Eventos" >Lista de eventos</DropdownItem>
                    </NavDropdown>
              </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}

export default NavBar;