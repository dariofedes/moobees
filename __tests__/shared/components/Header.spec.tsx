import { render } from '@testing-library/react-native'
import Header from '@src/shared/components/Header'

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
  useNavigationState: jest.fn(),
}))

describe('Header', () => {

  it('should render the right title', () => {
    // Given
    const expectedTitle = 'Moobees'

    // When
    const { getByText } = render(<Header />)
    const title = getByText(expectedTitle)

    // Then
    expect(title).toBeVisible()
  })
})
