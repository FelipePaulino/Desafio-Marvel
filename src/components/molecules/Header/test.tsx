import { render, screen } from '@testing-library/react'

import Header from '.'

describe('<Header />', () => {

    it('should render the Footer', () => {
        render(<Header>value</Header>)

        expect(screen.getByText('value')).toBeInTheDocument()
    })
})