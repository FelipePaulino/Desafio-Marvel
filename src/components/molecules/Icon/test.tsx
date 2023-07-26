import { render, screen } from '@testing-library/react'

import Icon from '.'

describe('<Link />', () => {

    it('should render the Icon', () => {
        render(<Icon type='back' typeParagraph='p' text='value'/>)

        expect(screen.getByText('value')).toBeInTheDocument()
    })
})