import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export const Footer = () => {
  return (
    <div>
      <Navbar
        fixed='bottom'
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant='dark'
      >
        <Nav className='ml-auto mr-auto'>
          <Nav.Link href='https://github.com/shawn220a'>
            <FiGithub />
          </Nav.Link>
          <Nav.Link href='https://www.linkedin.com/in/shawn-tschoepe/'>
            <FiLinkedin />
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
