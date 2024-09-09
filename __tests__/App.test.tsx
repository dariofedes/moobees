import React from 'react'
import { render } from '@testing-library/react-native'
import { Header } from '@shared/components'

describe('App', () => {
  it('should render the app header', () => {
    // Given
    const headerTitle = 'Moobees'

    // When
    const { getByText } = render(<Header />)
    const header = getByText(headerTitle)

    // Then
    expect(header).toBeVisible()
  })
})
