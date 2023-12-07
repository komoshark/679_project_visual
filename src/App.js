import './App.css';
import React, { useState } from 'react';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import GptTimeline from './GptTimeline'
import GptPie from './GptPie'
import GptPricing from './GptPricing';
import GptUserDistribution from './GptUserDistribution';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>
          <GptTimeline />

        </Toast.Body>
      </Toast>
    </>
  );
};

const App = () => (
  <Container className="p-3">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header">Komo's Data Visualization</h1>
      <div className='container'>
      <GptTimeline />
      </div>
      <div className='container'>
      <GptPricing></GptPricing>
      </div>
      <div className='container'>
      <GptPie></GptPie>
      </div>
      <div className='container'>
        <GptUserDistribution></GptUserDistribution>
      </div>
    </Container>
  </Container>
);

export default App;
