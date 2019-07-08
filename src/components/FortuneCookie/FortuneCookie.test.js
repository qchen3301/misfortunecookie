import React from 'react';
import ReactDOM from 'react-dom';
import FortuneCookie from './FortuneCookie';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FortuneCookie />, div);
  ReactDOM.unmountComponentAtNode(div);
});
