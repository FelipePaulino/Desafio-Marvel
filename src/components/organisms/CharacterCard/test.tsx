import { render, screen } from '@testing-library/react'

import CharacterCard from '.'

describe('<CharacterCard />', () => {

    it('should render the CharacterCard', () => {
        render(<CharacterCard data={{
            thumbnail: {
                path: '',
                extension: ''
            },
            name: 'Character',
            description: ''
        }} />)

        expect(screen.getByText(/Character/i)).toBeInTheDocument()
    })

    it('should render the CharacterCard with description', () => {
        render(<CharacterCard data={{
            thumbnail: {
                path: '',
                extension: ''
            },
            name: 'Character',
            description: 'description true'
        }} />)

        expect(screen.getByText(/description true/i)).toBeInTheDocument()
    })
})