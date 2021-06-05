import React from 'react';
import { act, render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';

// Page
import EditCounterPage from '../EditCounterPage';

import store from '../../../store';

describe('EditCounterPage test', () => {
  jest.mock('../../../store/hooks', () => ({
    useAppSelector: () => ({ counter: { amount: 0 } }),
    useAppDispatch: () => jest.fn(),
  }));

  it('should render EditCounterPage', () => {
    const { getByText } = render(
      <Provider store={store}>
        <EditCounterPage />
      </Provider>,
    );

    expect(getByText('Update')).toBeTruthy();
    expect(getByText(/Back/i)).toBeTruthy();
  });

  it('should update Counter amount', async () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <EditCounterPage />
      </Provider>,
    );

    const input = getByPlaceholderText('e.g 1') as HTMLInputElement;

    await act(async () => {
      await fireEvent.change(input, { target: { value: 2 } });
    });

    expect(input.value).toBe('2');
  });
});
