import { API_KEY, API_URL } from '@env';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { MovieResult } from '../Movie/types';

export default function useGenreMovieList(genreId: number) {
  const [movies, setMovies] = useState<MovieResult[]>()
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const getMoviesPaginated = useCallback(() => {
    const getMoviesUrl = `${API_URL}/discover/movie?with_genres=${genreId}&sort_by=popularity.desc&page=${page}&api_key=${API_KEY}`

    return axios.get(getMoviesUrl)
  }, [genreId, page])

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)

        const movies = await getMoviesPaginated()

        setMovies(prevMovies => prevMovies ? [...prevMovies, ...movies.data.results] : movies.data.results)
      } catch(error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [genreId, getMoviesPaginated, page])

  function getNextPage() {
    setPage(prevPage => prevPage + 1)
  }

  return {
    movies,
    getNextPage,
    isLoading,
  }
}
