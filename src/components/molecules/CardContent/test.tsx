import { render, screen } from '@testing-library/react'

import CardContent from '.'

describe('<Card />', () => {

    it('should render the CardContent', () => {
        render(<CardContent>value</CardContent>)

        expect(screen.getByText('value')).toBeInTheDocument()
    })
})