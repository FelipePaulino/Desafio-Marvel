import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Home from '.';


jest.mock('next/router', () => require('next-router-mock'));


const mockStore = configureStore([]);

describe('<Home />', () => {
  it('should render Home', () => {
    const initialState = {
      test:''
    };

    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(screen.getByText(/Characters/i)).toBeInTheDocument();
  });
});
