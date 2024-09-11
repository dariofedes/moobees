import { API_KEY, API_URL } from '@env';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Genre } from '../Movie/types';

export default function useGenres() {
  const [genres, setGenres] = useState<Genre[]>()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      const { data: {genres: [gnere1, genre2, genre3]} } = await axios.get(`${API_URL}/genre/movie/list?api_key=${API_KEY}`)

      setGenres([gnere1, genre2, genre3])

      setIsLoading(false)
    })()
  }, [])

  return {
    genres,
    isLoading,
  }
}
