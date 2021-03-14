import { SingleTrackDetails } from 'components/SingleTrackDetails'
import { DetailsContainer } from './styles'

export const SingleTrack = ({ trackId }) => {
  return (
   <DetailsContainer>
    <SingleTrackDetails trackId={trackId} />
    </DetailsContainer> 
  )
}