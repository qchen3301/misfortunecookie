import React from 'react';
import ReactDOM from 'react-dom';
import Fortune from './Fortune';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Fortune />, div);
  ReactDOM.unmountComponentAtNode(div);
});
