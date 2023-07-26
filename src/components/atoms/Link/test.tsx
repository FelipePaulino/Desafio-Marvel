import { render, screen } from '@testing-library/react'

import Link from '.'

describe('<Link />', () => {

    it('should render the Link text', () => {
        render(<Link href='/'>value</Link>)

        expect(screen.getByText('value')).toBeInTheDocument()
    })
})