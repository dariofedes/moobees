import { MovieResult } from '@src/Movie/types';
import { useEffect, useState } from 'react';
import { singletonHook } from 'react-singleton-hook';

export function useWishlist() {
  const [wishlist, setWishlist] = useState(new Map())
  const [moviesInWishlist, setMoviesInWishlist] = useState<MovieResult[]>([])

  useEffect(() => {
    setMoviesInWishlist(Array.from(wishlist).map(item => item[1]))
  }, [wishlist])

  function addToWishlist(movie: MovieResult) {
    setWishlist(prevWishlist => {
      const newWishlist = new Map(prevWishlist)
      newWishlist.set(movie.id, movie)

      return newWishlist
    })
  }

  function removeFromWishlist(movieId: number) {
    setWishlist(prevWishlist => {
      const newWishlist = new Map(prevWishlist)
      newWishlist.delete(movieId)

      return newWishlist
    })
  }

  function isMovieInWishlist(movieId: number): boolean {
    return wishlist.has(movieId)
  }

  return {
    addToWishlist,
    removeFromWishlist,
    moviesInWishlist,
    isMovieInWishlist,
  }
}

const initialState = {
  moviesInWishlist: [],
  addToWishlist: (movie: MovieResult) => null,
  removeFromWishlist: (movieId: number) => null,
  isMovieInWishlist: (movieId: number) => null,
}

export default singletonHook(initialState, useWishlist)
