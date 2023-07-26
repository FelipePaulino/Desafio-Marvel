import { fireEvent, getByTestId, render, screen } from '@testing-library/react'

import CharacterOption from '.'

jest.mock('next/router', () => require('next-router-mock'));

describe('<CharacterOption />', () => {

    it('should render the CharacterOption', () => {
        render(<CharacterOption option={{
            id: '001',
            thumbnail: {
                path: '',
                extension: ''
            },
            name: 'Character'
        }} index={''} />)

        const button = screen.getByTestId('button-card')

        fireEvent.click(button)

        expect(screen.getByText(/Character/i)).toBeInTheDocument()
    })
})