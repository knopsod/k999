import React from 'react';
import { Link } from 'react-router';
import { Jumbotron } from 'react-bootstrap';

const Index = () => (
  <div className="Index">
    <Jumbotron className="text-center">
      <h2>ฝึกพิมพ์</h2>
      <p><Link to="/bets" className="btn btn-success">คลิ๊ก</Link></p>
      
    </Jumbotron>
  </div>
);

export default Index;
