import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import { addTech } from '../../src/store/modules/techs/actions'

import TechList2 from '~/components/TechList2';

jest.mock('react-redux');

describe('TechList2 component', () => {
  
  it('should render tech list', () => {
    useSelector.mockImplementation(cb => cb({
      techs:[ 'Node.js', 'ReactJs']
    }));

    const { getByTestId, getByText } = render(<TechList2 />);

    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    expect(getByTestId('tech-list')).toContainElement(getByText('ReactJs'));
  })

  it('should be able to add new tech', () => {
    const { getByTestId, getByLabelText } = render(<TechList2 />);
    
    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
    fireEvent.submit(getByTestId('tech-form'));

    expect(dispatch).toHaveBeenCalledWith(addTech('Node.js'));
  })
})