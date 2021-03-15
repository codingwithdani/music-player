import styled from 'styled-components'

export const SingleTrackDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding-top: 30px;
`

export const TrackImage = styled.img`
    width: 200px;
    height: 250px;
    border-radius: 4px;
    border: 1px solid #ffff;
`

export const TrackName = styled.h1`
    color: #ffffff;
    margin: 0;
    font-size: 20px;
    font-weight: 500;
    max-width: 300px;
    text-align: center;
    padding: 5px 0;
`

export const TrackSinger = styled.h2`
    color: #ffffff;
    margin: 0;
    font-size: 20px;
    font-weight: 200;
`
export const NotFoundMessage = styled.p`
    color: #ffff;
`
