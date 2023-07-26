import { render, screen } from '@testing-library/react'
import { useRouter } from "next/router";

import List from '.'

describe('<List />', () => {

    it('should render the List', () => {
        render(<List title={'titleList'} data={{
            items: [{
                length: 1,
                map: function (arg0: (item: any, index: string) => JSX.Element): any {},
                name: 'test'
            }]
        }}  />)

        expect(screen.getByText(/titleList/i)).toBeInTheDocument()
    })

    it('should render the List length === 0', () => {
        render(<List title={'titleList'} data={{
            items: {
                length: 0,
                map: function (arg0: (item: any, index: string) => JSX.Element): any {},
                name: 'test'
            }
        }}  />)

        expect(screen.getByText(/No info/i)).toBeInTheDocument()
    })

})