import { render, screen } from '@testing-library/react'

import ButtonAction from '.'

describe('<ButtonAction />', () => {

    it('should render the ButtonAction', () => {
        render(<ButtonAction label='value'/>)

        expect(screen.getByText('value')).toBeInTheDocument()
    })
})