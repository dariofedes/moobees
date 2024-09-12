import { renderHook, waitFor, act } from '@testing-library/react-native'
import { useWishlist } from '@src/Wishlist/useWishlist'
import moviesFixture from '../../Fixtures/moviesFixture'

describe('useWishlist', () => {
  it('should start empty', () => {
    // When
    const { result } = renderHook(() => useWishlist())

    // Then
    expect(result.current.moviesInWishlist).toHaveLength(0)
  })

  it('should add movies to the wishlist', async () => {
    // Given
    const movie = moviesFixture.results[0]
    const { result } = renderHook(() => useWishlist())

    // When
    act(() => result.current.addToWishlist(movie))

    // Then
    await waitFor(() => expect(result.current.moviesInWishlist).toHaveLength(1))
  })

  it('should remove movies to the wishlist', async () => {
    // Given
    const movie = moviesFixture.results[0]
    const { result } = renderHook(() => useWishlist())
    act(() => result.current.addToWishlist(movie))

    // When
    await waitFor(() => expect(result.current.moviesInWishlist).toHaveLength(1))
    act(() => result.current.removeFromWishlist(movie.id))

    // Then
    await waitFor(() => expect(result.current.moviesInWishlist).toHaveLength(0))
  })

  it('should say if a movie is in the wishlist', async () => {
    // Given
    const movie = moviesFixture.results[0]
    const { result } = renderHook(() => useWishlist())
    act(() => result.current.addToWishlist(movie))

    // When
    await waitFor(() => expect(result.current.moviesInWishlist).toHaveLength(1))

    // Then
    await waitFor(() => expect(result.current.isMovieInWishlist(movie.id)).toBeTruthy())
  })
})
