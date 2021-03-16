import { Player } from 'components/Player'
import { useSelector } from 'react-redux'
import { SingleTrackDetailsContainer, NotFoundMessage, TrackImage, TrackName, TrackSinger } from './styles'

export const SingleTrackDetails = ({ trackId }) => {
  const { musicList } = useSelector(state => state.music)

  const trackIndex = musicList.findIndex(song => song.trackId === Number(trackId))

  const getInfoFromMusicList = () => {
    return trackIndex >= 0
      ? musicList[trackIndex]
      : {}
  }

  const prevTrackId = trackIndex >= 1
    ? musicList[trackIndex - 1].trackId
    : undefined

  const nextTrackId = trackIndex >= 0 && trackIndex < musicList.length - 1
    ? musicList[trackIndex + 1].trackId
    : undefined

  const {
    artistName,
    artworkUrl100,
    previewUrl,
    trackName
  } = getInfoFromMusicList(trackIndex)

  return (
    <SingleTrackDetailsContainer>
      {trackIndex >= 0
        ? (
          <>
            <TrackImage src={artworkUrl100} alt={trackName} />
            <TrackName>{trackName}</TrackName>
            <TrackSinger>{artistName}</TrackSinger>
            <Player nextTrackId={nextTrackId} prevTrackId={prevTrackId} trackId={trackId} previewUrl={previewUrl} />
          </>
          )
        : <NotFoundMessage>Track not found</NotFoundMessage>}
    </SingleTrackDetailsContainer>
  )
}
