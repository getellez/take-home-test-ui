import { render, screen } from "@testing-library/react"
import { Error } from "./Error"

describe('<Error />', () => {
  test('Should show error message', () => {
    render(<Error />)
    screen.getByText('Oops!')
    screen.getByText("You're not supposed to be here")
  })
})