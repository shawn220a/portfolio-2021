import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className='row'>
        <Card style={{ width: '18rem' }} className='mx-auto'>
          <Card.Img variant='top' src='holder.js/100px180' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button className='ml-5 mr-2' variant='primary'>
              Live
            </Button>
            <Button variant='primary'>GitHub</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className='mx-auto'>
          <Card.Img variant='top' src='holder.js/100px180' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button className='ml-5 mr-2' variant='primary'>
              Live
            </Button>
            <Button variant='primary'>GitHub</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className='mx-auto'>
          <Card.Img variant='top' src='holder.js/100px180' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button className='ml-5 mr-2' variant='primary'>
              Live
            </Button>
            <Button variant='primary'>GitHub</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
