import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import ViewUser from "./components/ViewUser";
import EditUser from "./components/EditUser";
import ListUser from "./components/ListUser";
import './App.css'

function App() {
  return ( 



  <BrowserRouter>
    
    
      <Navbar bg="primary" variant="dark" >
        <Container>
          <Navbar.Brand href="/"  className="NavBrand">API APPLICATION</Navbar.Brand>
          <Nav className="float-right">
            <Nav.Link href="/"  className="NavLink">HOME</Nav.Link>
            <Nav.Link href="/add"  className="NavLink">ADD NEW</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    <Container className="pt-5" >
      <Routes>
        <Route index element={<ListUser/>}/>
        <Route path="/add" element={<AddUser/>}/>
        <Route path="users/:userId/edit" element={<EditUser/>}/>
        <Route path="users/:userId" element={<ViewUser/>}/>
      </Routes>

    </Container>
      
    </BrowserRouter>
   
  );
}

export default App;
