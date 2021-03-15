import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
  IoDocumentTextOutline,
  IoLogoLinkedin,
  IoLogoGithub,
} from 'react-icons/io5';

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
            <IoLogoGithub />
          </Nav.Link>
          <Nav.Link href='https://www.linkedin.com/in/shawn-tschoepe/'>
            <IoLogoLinkedin />
          </Nav.Link>
          <Nav.Link href='#resume'>
            <IoDocumentTextOutline />
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
