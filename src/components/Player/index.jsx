import { PlayerContainer, PlayerAndSocialMediaContainer, SocialMediaChannels, PlayButton, StyledLink } from './styles'
import { Link } from 'wouter'
import { useEffect, useRef, useState } from 'react'
import { IoPlaySharp, IoPauseSharp, IoPlayForwardSharp, IoPlayBackSharp, IoLogoFacebook, IoLogoTwitter } from 'react-icons/io5'
import { TwitterShareButton, FacebookShareButton } from 'react-share'
const iconCommonProps = { style: { color: 'white' } }

const Button = ({ children, disabled, href }) => {
  return (
    <Link href={href}>
      <StyledLink disabled={disabled}>
        {children}
      </StyledLink>
    </Link>
  )
}

export const Player = ({ prevTrackId, nextTrackId, previewUrl }) => {
  const [playAudio, setPlayAudio] = useState(true)
  const audio = useRef(new window.Audio(previewUrl))

  const runPlayAudio = () => {
    playAudio
      ? audio.current.play()
      : audio.current.pause()

    setPlayAudio(!playAudio)
  }

  useEffect(() => {
    audio.current.pause()
    audio.current = new window.Audio(previewUrl)
    if (!playAudio) audio.current.play()
  }, [previewUrl])

  return (
    <PlayerAndSocialMediaContainer>
      <PlayerContainer>
        <Button disabled={!prevTrackId} href={`/detail/${prevTrackId}`}>
          <IoPlayBackSharp {...iconCommonProps} />
        </Button>
        <PlayButton onClick={runPlayAudio}>
          {
                        playAudio
                          ? <IoPlaySharp {...iconCommonProps} />
                          : <IoPauseSharp {...iconCommonProps} />
                    }
        </PlayButton>
        <Button disabled={!nextTrackId} href={`/detail/${nextTrackId}`}>
          <IoPlayForwardSharp {...iconCommonProps} />
        </Button>

      </PlayerContainer>
      <SocialMediaChannels>
        <TwitterShareButton url={previewUrl} title='Play this song and start DANCING!!'>
          <IoLogoTwitter {...iconCommonProps} />
        </TwitterShareButton>
        <FacebookShareButton url={previewUrl} quote='Play this song and start DANCING!!'>
          <IoLogoFacebook {...iconCommonProps} />
        </FacebookShareButton>
      </SocialMediaChannels>
    </PlayerAndSocialMediaContainer>
  )
}
