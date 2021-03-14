export default async function getMusicList (musicTerm) {
  const response = await window.fetch(`https://itunes.apple.com/search?term=${musicTerm}&limit=5&entity=musicTrack`)
  const json = await response.json()
  return json.results
}