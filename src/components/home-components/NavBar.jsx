import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, NavDropdown, Nav, Image,  } from "react-bootstrap";
const NavBar = ()=>{

     const textColorNavBar = "text-white"
     const positionIconNavBar = "right-[4rem]"
     const iconPositionResponsive = ()=>{
          const width = document
          if (width <= 663){
              positionIconNavBar = ""
          }
     }
    
    useEffect(()=>{
        iconPositionResponsive();
    }, []) 

    return (
        <>
         <Navbar className=" bg-gray-900 " expand="lg">
            <Container>
               <Navbar.Brand className={`relative ${positionIconNavBar} w-auto`} href="/"><Image fluid className="w-12" src="https://cdn-icons-png.flaticon.com/512/1683/1683712.png" rounded  ></Image> </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto ">
                    <Nav.Link className={textColorNavBar} active >Home</Nav.Link>
                    <Nav.Link className={textColorNavBar}  href="#link"></Nav.Link>
                    <NavDropdown className={textColorNavBar} title="Eventos" id="basic-nav-dropdown">
                       <NavDropdown.Item href="#action/3.1">Lista de eventos</NavDropdown.Item>
                       <NavDropdown.Divider />
                       <NavDropdown.Item href="#action/3.2">Cadastrar Evento</NavDropdown.Item>
                    </NavDropdown>
              </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}

export default NavBar;