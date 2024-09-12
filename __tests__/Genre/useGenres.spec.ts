import { renderHook, waitFor } from '@testing-library/react-native'
import axios from 'axios'
import useGenres from '@src/Genre/useGenres'
import genresFixture from '../../Fixtures/genresFixture'

jest.mock('axios')

describe('useGenres', () => {
  beforeAll(() => {
    axios.get.mockImplementation(() => Promise.resolve({data: genresFixture}))
  })

  it('should set only 3 genres', async () => {
    // When
    const { result } = renderHook(() => useGenres())

    // Then
    await waitFor(() => expect(result.current.genres).toHaveLength(3))
  })
})
