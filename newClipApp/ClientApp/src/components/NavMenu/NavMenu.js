import React from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export default props => (
  <Navbar inverse fixedTop fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={'/'}>newClipApp</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to={'/'} exact>
          <NavItem>
            <Glyphicon glyph='list' /> Home
          </NavItem>
        </LinkContainer>
        <LinkContainer to={'/player'}>
          <NavItem>
            <Glyphicon glyph='play' /> Player
          </NavItem>
        </LinkContainer>
        <LinkContainer to={'/upload'}>
          <NavItem>
            <Glyphicon glyph='upload' /> Upload
          </NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
