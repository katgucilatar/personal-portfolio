// Name (left), [home, projects, resume, contact] (right)

import { Navbar, Nav } from 'rsuite';

const Navbar = () => (
  <Navbar>
    <Navbar.Brand>Katrina Gucilatar</Navbar.Brand>
    <Nav>
      <Nav.Item>Home</Nav.Item>
      <Nav.Item>Projects</Nav.Item>
      <Nav.Item>Resume</Nav.Item>
      <Nav.Item>Contact</Nav.Item>
    </Nav>
  </Navbar>
);

export default Navbar;