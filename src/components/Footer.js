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
          <Nav.Link href='#github'>
            <FiGithub />
          </Nav.Link>
          <Nav.Link href='#linkedin'>
            <FiLinkedin />
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
