import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { IoLogoGithub } from 'react-icons/io5';
import './Portfolio.css';

export const Portfolio = () => {
  return (
    <div className='Portfolio'>
      <h1>Portfolio</h1>
      <div className='row'>
        <Card style={{ width: '30rem' }} className='mx-auto project'>
          <Card.Img
            variant='top'
            src='./assets/SouthwestEducation.png'
            width='600'
            height='300'
          />
          <Card.Body>
            <Card.Title>Southwest Education</Card.Title>
            <Card.Text>
              The official website for southwest education to generate company
              presence and sales revenue.
            </Card.Text>
            <div className='links'>
              <Button variant='primary'>Live</Button>
              <Button variant='primary'>
                <IoLogoGithub className='mr-2 mb-1' />
                GitHub
              </Button>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: '30rem' }} className='mx-auto project'>
          <Card.Img
            variant='top'
            src='./assets/Jobless.png'
            width='600'
            height='300'
          />
          <Card.Body>
            <Card.Title>Jobless</Card.Title>
            <Card.Text>
              An application and interactive blog helping job seekers directly
              affected by the pandemic.
            </Card.Text>
            <div className='links'>
              <Button variant='primary'>Live</Button>
              <Button variant='primary'>
                <IoLogoGithub className='mr-2 mb-1' />
                GitHub
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
