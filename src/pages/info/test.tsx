import { fireEvent, render, screen } from '@testing-library/react'
import { store } from '../../storeConfig'

import Info from '.'
import { Provider } from 'react-redux';

jest.mock('next/router', () => require('next-router-mock'));

describe('<Info />', () => {

    it('should render Info', () => {
        render(<Provider store={store}><Info /></Provider>)

        const buttonReturn = screen.getByText(/Return/i)

        fireEvent.click(buttonReturn)

        expect(buttonReturn).toBeInTheDocument()
    })
})