import { render, screen } from '@testing-library/react'

import TextParagraph from '.'

describe('<TextParagraph />', () => {

    it('should render the TextParagraph h1', () => {
        render(<TextParagraph text='value' type='h1' />)

        expect(screen.getByText('value')).toBeInTheDocument()
    })

    it('should render the TextParagraph h2', () => {
        render(<TextParagraph text='value' type='h2' />)

        expect(screen.getByText('value')).toBeInTheDocument()
    })

    it('should render the TextParagraph h3', () => {
        render(<TextParagraph text='value' type='h3' />)

        expect(screen.getByText('value')).toBeInTheDocument()
    })

    it('should render the TextParagraph h4', () => {
        render(<TextParagraph text='value' type='h4' />)

        expect(screen.getByText('value')).toBeInTheDocument()
    })

    it('should render the TextParagraph h5', () => {
        render(<TextParagraph text='value' type='h5' />)

        expect(screen.getByText('value')).toBeInTheDocument()
    })

    it('should render the TextParagraph h6', () => {
        render(<TextParagraph text='value' type='h6' />)

        expect(screen.getByText('value')).toBeInTheDocument()
    })

    it('should render the TextParagraph p', () => {
        render(<TextParagraph text='value' type='p' />)

        expect(screen.getByText('value')).toBeInTheDocument()
    })
})