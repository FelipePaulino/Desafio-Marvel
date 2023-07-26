import { render, screen } from '@testing-library/react'

import Card from '.'

describe('<Card />', () => {

    it('should render the Card', () => {
        render(<Card>value</Card>)

        expect(screen.getByText('value')).toBeInTheDocument()
    })
})