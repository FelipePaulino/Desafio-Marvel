import { render, screen } from '@testing-library/react'

import FooterDeveloper from '.'

describe('<FooterDeveloper />', () => {

    it('should render the FooterDeveloper', () => {
        render(<FooterDeveloper />)

        expect(screen.getByText(/Desenvolvido por Felipe Paulino/i)).toBeInTheDocument()
    })
})