export default function usePoster() {
  function getLargePosterUrl(path: string): string {
    return getPosterUrl(path, 500)
  }
  function getSmallPosterUrl(path: string): string {
    return getPosterUrl(path, 500)
  }

  function getPosterUrl(path: string, size: number): string {
    return `https://image.tmdb.org/t/p/w${size}/${path}`
  }

  return {
    getLargePosterUrl,
    getSmallPosterUrl,
  }
}
