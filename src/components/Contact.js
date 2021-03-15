import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='Name' required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' required />
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            required
            placeholder='Your message here ...'
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};
