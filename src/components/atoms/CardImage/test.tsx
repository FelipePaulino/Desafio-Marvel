import { render, screen } from '@testing-library/react'

import CardImage from '.'

describe('<CardImage />', () => {

    it('should render the CardImage', () => {
        render(<CardImage url='./shield'/>)

        expect(screen.getByTestId('cardImage')).toBeInTheDocument()
    })
})