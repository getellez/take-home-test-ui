import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('<Footer />', () => {
  
  const text = 'By Germán'

  test('Should match the snapshot', () => {
    const { container } = render(<Footer />)
    expect(container).toMatchSnapshot()
  })
  
  test('Should have the author name', () => {
    const { container } = render(<Footer />)
    expect(screen.getByText('By Germán')).toBeTruthy()
  })
  
})