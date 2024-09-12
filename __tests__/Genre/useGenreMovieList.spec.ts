import { renderHook, waitFor } from '@testing-library/react-native'
import axios from 'axios'
import useGenreMovieList from '@src/Genre/useGenreMovieList'
import moviesFixture from '../../Fixtures/moviesFixture'
import { API_KEY, API_URL } from '@env'

jest.mock('axios')

describe('useGenreMovieList', () => {
  beforeAll(() => {
    axios.get.mockImplementation(() => Promise.resolve({data: moviesFixture}))
  })

  it('should retrieve movies of the given genre', async () => {
    // Given
    const genreId = 12
    const expectedUrl = `${API_URL}/discover/movie?with_genres=${genreId}&sort_by=popularity.desc&page=1&api_key=${API_KEY}`

    // When
    renderHook(() => useGenreMovieList(genreId))

    // Then
    await waitFor(() => expect(axios.get).toHaveBeenCalledWith(expectedUrl))
  })

  it('should retrieve the next page on next page requested', async () => {
    // Given
    const genreId = 12
    const page2Url = `${API_URL}/discover/movie?with_genres=${genreId}&sort_by=popularity.desc&page=2&api_key=${API_KEY}`
    const { result } = renderHook(() => useGenreMovieList(genreId))
    await waitFor(() => expect(result.current.movies).toHaveLength(20))

    // When
    result.current.getNextPage()

    // Then
    await waitFor(() => expect(axios.get).toHaveBeenCalledWith(page2Url))
  })
})
