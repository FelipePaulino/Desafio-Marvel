import { render, screen } from '@testing-library/react'

import InputText from '.'

describe('<InputText />', () => {

    it('should render the InputText', () => {
        render(<InputText labelText='value' />)

        expect(screen.getAllByText('value')[0]).toBeInTheDocument()
    })
})