import React from 'react'
import { render, screen } from '@testing-library/react'
import Characters from '../Characters/Characters'

test('render h1 element', () => {
    render(<Characters />)
    expect(screen.getByText('The Rick and Morty')).toBeInTheDocument()
})