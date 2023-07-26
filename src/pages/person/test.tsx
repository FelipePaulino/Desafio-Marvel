import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux';
import { store } from '../../storeConfig'

import Person from '.'

jest.mock('next/router', () => require('next-router-mock'));

describe('<Person />', () => {
    it('should render Person', () => {
        render(<Provider store={store}><Person /></Provider>)

        expect(screen.getByText(/No characters found/i)).toBeInTheDocument()
    })
})