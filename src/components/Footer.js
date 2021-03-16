import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { IconContext } from 'react-icons';
import {
  IoDocumentTextOutline,
  IoLogoLinkedin,
  IoLogoGithub,
} from 'react-icons/io5';

export const Footer = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Nav className='ml-auto mr-auto'>
          <Nav.Link href='https://github.com/shawn220a'>
            <IconContext.Provider value={{ color: '#fff', size: '2rem' }}>
              <IoLogoGithub />
            </IconContext.Provider>
          </Nav.Link>
          <Nav.Link href='https://www.linkedin.com/in/shawn-tschoepe/'>
            <IconContext.Provider value={{ color: '#fff', size: '2rem' }}>
              <IoLogoLinkedin />
            </IconContext.Provider>
          </Nav.Link>
          <Nav.Link href='#resume'>
            <IconContext.Provider value={{ color: '#fff', size: '2rem' }}>
              <IoDocumentTextOutline />
            </IconContext.Provider>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
