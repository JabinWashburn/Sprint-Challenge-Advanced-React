import React from 'react';
import App from './App';
import {render} from '@testing-library/react'

it('renders without crashing', () => {
  const wrapper = render(
    <App />
  )
  console.log(wrapper.debug())
});
