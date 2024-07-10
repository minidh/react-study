import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  let [shoes] = useState(data)

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      <div className="Container">
        <div className='row'>
          <Card shoes={shoes[0]} i={1}></Card>
          <Card shoes={shoes[1]} i={2}></Card>
          <Card shoes={shoes[2]}>i={3}</Card>
        </div>
      </div>
    </div>
  );
}
function Card(props) {
  return (
    <div className='row'>
          <div className='col-md-4'>
            <img src={process.env.PUBLIC_URL + '/shoe'+'props.i'+'.png'} width="80%"></img>
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </div>
        </div>
  )
}
export default App;
