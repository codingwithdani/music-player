import styled from 'styled-components'

export const Icon = styled.i`
    color: #ffffff;
`

export const PlayerContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
`

export const PlayerAndSocialMediaContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #2c2e30;
    height: 50px;
    margin-top: 10px;
`

export const SocialMediaChannels = styled.div`
    align-items: center;
    bottom: 0;
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: flex-end;
    position: absolute;
    right: 32px;

    & > button + button {
        margin-left: 8px;
    }
`

export const PlayButton = styled.button`
    align-content: center;
    border: 0;
    background: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
`

export const StyledLink = styled.a`
    opacity: ${props => props.disabled ? 0.5 : 1};
    pointer-events:  ${props => props.disabled ? 'none' : 'auto'};
`
