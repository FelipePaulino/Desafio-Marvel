import { render, screen } from '@testing-library/react'

import Footer from '.'

describe('<Footer />', () => {

    it('should render the Footer', () => {
        render(<Footer>value</Footer>)

        expect(screen.getByText('value')).toBeInTheDocument()
    })
})