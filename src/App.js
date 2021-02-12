import React, { Component } from 'react';
import './App.css';

//import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/dist/cosmo/bootstrap.css';
import { Navbar, NavItem, ListGroup, Container, Row, Col, ListGroupItem} from 'react-bootstrap';
import WeatherDisplay from './weather/weather';

const PLACES = [
  {name: "Mexico City", zip: "94303"},
  {name: "Sunnyvale", zip: "94088"},
  {name: "Santa Cruz", zip: "95062"},
  {name: "Honolulu", zip: "96803"}
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0
    };
  }
  render () {
    const activePlace = this.state.activePlace;
    return (
      <div>
        <Navbar bg='light'>
            <Navbar.Brand className="title">
              React Simple Weather App
            </Navbar.Brand>
        </Navbar>
        <Container>
          <Row>
            <Col md={4} sm={4}>
              <h3>Select city</h3>
              <ListGroup
                bsStyle="pills"
                activeKey={activePlace}
                onSelect={index => {
                  this.setState({activePlace: index});
                }}
              >
                {PLACES.map((place, index) => (
                  <ListGroup.Item key={index} eventKey={index}>{place.name}</ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <Col md={8} sm={8}>
              <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} />
            </Col>
          </Row>
        </Container>
      </div>
    ); 

  }
}

export default App;
