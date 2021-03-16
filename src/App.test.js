/* global jest, beforeAll, afterEach, afterAll, test, describe, expect */

import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { Provider } from 'react-redux'
import App from '../src/App'
import { Header } from '../src/components/Header'
import { store } from './store'

const server = setupServer(
  rest.get('https://itunes.apple.com/search', (req, res, ctx) => {
    return res(ctx.json({
      resultCount: 5,
      results: [
        {
          wrapperType: 'track',
          kind: 'song',
          artistId: 104063,
          collectionId: 1440657117,
          trackId: 1440657702,
          artistName: 'Jackson 5',
          collectionName: 'Guardians of the Galaxy: Awesome Mix, Vol. 1 (Original Motion Picture Soundtrack)',
          trackName: 'I Want You Back',
          collectionCensoredName: 'Guardians of the Galaxy: Awesome Mix, Vol. 1 (Original Motion Picture Soundtrack)',
          trackCensoredName: 'I Want You Back',
          collectionArtistId: 4035426,
          collectionArtistName: 'Various Artists',
          artistViewUrl: 'https://music.apple.com/us/artist/jackson-5/104063?uo=4',
          collectionViewUrl: 'https://music.apple.com/us/album/i-want-you-back/1440657117?i=1440657702&uo=4',
          trackViewUrl: 'https://music.apple.com/us/album/i-want-you-back/1440657117?i=1440657702&uo=4',
          previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/ae/b9/f4/aeb9f43d-4bf2-3468-7163-d067ea0e38cb/mzaf_5189374696281070786.plus.aac.p.m4a',
          artworkUrl30: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/f7/02/18/f7021857-7966-973b-9d33-304ef57f0273/source/30x30bb.jpg',
          artworkUrl60: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/f7/02/18/f7021857-7966-973b-9d33-304ef57f0273/source/60x60bb.jpg',
          artworkUrl100: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/f7/02/18/f7021857-7966-973b-9d33-304ef57f0273/source/100x100bb.jpg',
          collectionPrice: 9.99,
          trackPrice: -1.00,
          releaseDate: '1969-10-07T12:00:00Z',
          collectionExplicitness: 'notExplicit',
          trackExplicitness: 'notExplicit',
          discCount: 1,
          discNumber: 1,
          trackCount: 12,
          trackNumber: 7,
          trackTimeMillis: 178813,
          country: 'USA',
          currency: 'USD',
          primaryGenreName: 'Pop',
          isStreamable: false
        },
        {
          wrapperType: 'track',
          kind: 'song',
          artistId: 104063,
          collectionId: 1440912101,
          trackId: 1440912105,
          artistName: 'Jackson 4',
          collectionName: 'The Ultimate Collection',
          trackName: 'I Want You Back',
          collectionCensoredName: 'The Ultimate Collection',
          trackCensoredName: 'I Want You Back',
          artistViewUrl: 'https://music.apple.com/us/artist/jackson-5/104063?uo=4',
          collectionViewUrl: 'https://music.apple.com/us/album/i-want-you-back/1440912101?i=1440912105&uo=4',
          trackViewUrl: 'https://music.apple.com/us/album/i-want-you-back/1440912101?i=1440912105&uo=4',
          previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/50/7c/82/507c821d-c7dc-b3af-b80a-0545038fea24/mzaf_472349834907186212.plus.aac.p.m4a',
          artworkUrl30: 'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/14/25/bd/1425bdc9-ff7a-1322-8a02-9090e5bcef63/source/30x30bb.jpg',
          artworkUrl60: 'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/14/25/bd/1425bdc9-ff7a-1322-8a02-9090e5bcef63/source/60x60bb.jpg',
          artworkUrl100: 'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/14/25/bd/1425bdc9-ff7a-1322-8a02-9090e5bcef63/source/100x100bb.jpg',
          collectionPrice: 10.99,
          trackPrice: 1.29,
          releaseDate: '1969-10-07T12:00:00Z',
          collectionExplicitness: 'notExplicit',
          trackExplicitness: 'notExplicit',
          discCount: 1,
          discNumber: 1,
          trackCount: 21,
          trackNumber: 1,
          trackTimeMillis: 178933,
          country: 'USA',
          currency: 'USD',
          primaryGenreName: 'Pop',
          isStreamable: true
        },
        {
          wrapperType: 'track',
          kind: 'song',
          artistId: 104063,
          collectionId: 159292399,
          trackId: 159292550,
          artistName: 'Jackson 5',
          collectionName: 'The Essential Michael Jackson',
          trackName: 'I Want You Back',
          collectionCensoredName: 'The Essential Michael Jackson',
          trackCensoredName: 'I Want You Back',
          collectionArtistId: 32940,
          collectionArtistName: 'Michael Jackson',
          collectionArtistViewUrl: 'https://music.apple.com/us/artist/michael-jackson/32940?uo=4',
          artistViewUrl: 'https://music.apple.com/us/artist/jackson-5/104063?uo=4',
          collectionViewUrl: 'https://music.apple.com/us/album/i-want-you-back/159292399?i=159292550&uo=4',
          trackViewUrl: 'https://music.apple.com/us/album/i-want-you-back/159292399?i=159292550&uo=4',
          previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview111/v4/45/bd/fc/45bdfc71-01f5-a730-83af-4650611e3ff0/mzaf_8726531587591019438.plus.aac.p.m4a',
          artworkUrl30: 'https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/ba/f3/15/baf315d1-9c3f-03e7-6deb-4e80be0dd66c/source/30x30bb.jpg',
          artworkUrl60: 'https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/ba/f3/15/baf315d1-9c3f-03e7-6deb-4e80be0dd66c/source/60x60bb.jpg',
          artworkUrl100: 'https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/ba/f3/15/baf315d1-9c3f-03e7-6deb-4e80be0dd66c/source/100x100bb.jpg',
          collectionPrice: 16.99,
          trackPrice: -1.00,
          releaseDate: '1969-10-07T07:00:00Z',
          collectionExplicitness: 'notExplicit',
          trackExplicitness: 'notExplicit',
          discCount: 2,
          discNumber: 1,
          trackCount: 21,
          trackNumber: 1,
          trackTimeMillis: 179414,
          country: 'USA',
          currency: 'USD',
          primaryGenreName: 'Pop',
          isStreamable: false
        },
        {
          wrapperType: 'track',
          kind: 'song',
          artistId: 104063,
          collectionId: 159292399,
          trackId: 159292669,
          artistName: 'Jackson 5',
          collectionName: 'The Essential Michael Jackson',
          trackName: 'ABC',
          collectionCensoredName: 'The Essential Michael Jackson',
          trackCensoredName: 'ABC',
          collectionArtistId: 32940,
          collectionArtistName: 'Michael Jackson',
          collectionArtistViewUrl: 'https://music.apple.com/us/artist/michael-jackson/32940?uo=4',
          artistViewUrl: 'https://music.apple.com/us/artist/jackson-5/104063?uo=4',
          collectionViewUrl: 'https://music.apple.com/us/album/abc/159292399?i=159292669&uo=4',
          trackViewUrl: 'https://music.apple.com/us/album/abc/159292399?i=159292669&uo=4',
          previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/76/41/47/764147be-a4c8-6f0a-062b-60cb4065690e/mzaf_1224913706455725605.plus.aac.p.m4a',
          artworkUrl30: 'https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/ba/f3/15/baf315d1-9c3f-03e7-6deb-4e80be0dd66c/source/30x30bb.jpg',
          artworkUrl60: 'https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/ba/f3/15/baf315d1-9c3f-03e7-6deb-4e80be0dd66c/source/60x60bb.jpg',
          artworkUrl100: 'https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/ba/f3/15/baf315d1-9c3f-03e7-6deb-4e80be0dd66c/source/100x100bb.jpg',
          collectionPrice: 16.99,
          trackPrice: -1.00,
          releaseDate: '1970-02-24T08:00:00Z',
          collectionExplicitness: 'notExplicit',
          trackExplicitness: 'notExplicit',
          discCount: 2,
          discNumber: 1,
          trackCount: 21,
          trackNumber: 2,
          trackTimeMillis: 177988,
          country: 'USA',
          currency: 'USD',
          primaryGenreName: 'Pop',
          isStreamable: false
        },
        {
          wrapperType: 'track',
          kind: 'song',
          artistId: 104063,
          collectionId: 159292399,
          trackId: 159292829,
          artistName: 'Jackson 5',
          collectionName: 'The Essential Michael Jackson',
          trackName: 'The Love You Save',
          collectionCensoredName: 'The Essential Michael Jackson',
          trackCensoredName: 'The Love You Save',
          collectionArtistId: 32940,
          collectionArtistName: 'Michael Jackson',
          collectionArtistViewUrl: 'https://music.apple.com/us/artist/michael-jackson/32940?uo=4',
          artistViewUrl: 'https://music.apple.com/us/artist/jackson-5/104063?uo=4',
          collectionViewUrl: 'https://music.apple.com/us/album/the-love-you-save/159292399?i=159292829&uo=4',
          trackViewUrl: 'https://music.apple.com/us/album/the-love-you-save/159292399?i=159292829&uo=4',
          previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/82/11/07/8211074e-4cb7-57b0-ab40-eb2161f8938f/mzaf_8530483243832371722.plus.aac.p.m4a',
          artworkUrl30: 'https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/ba/f3/15/baf315d1-9c3f-03e7-6deb-4e80be0dd66c/source/30x30bb.jpg',
          artworkUrl60: 'https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/ba/f3/15/baf315d1-9c3f-03e7-6deb-4e80be0dd66c/source/60x60bb.jpg',
          artworkUrl100: 'https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/ba/f3/15/baf315d1-9c3f-03e7-6deb-4e80be0dd66c/source/100x100bb.jpg',
          collectionPrice: 16.99,
          trackPrice: -1.00,
          releaseDate: '1970-05-13T07:00:00Z',
          collectionExplicitness: 'notExplicit',
          trackExplicitness: 'notExplicit',
          discCount: 2,
          discNumber: 1,
          trackCount: 21,
          trackNumber: 3,
          trackTimeMillis: 184563,
          country: 'USA',
          currency: 'USD',
          primaryGenreName: 'Pop',
          isStreamable: false
        }]
    }))
  })
)

const performSearchSongs = () => {
  const rendered = render(
    <Provider store={store}>
      <App />
    </Provider>)

  // check input filter with search
  const inputNode = screen.getByTestId('input-search')
  fireEvent.change(inputNode, { target: { value: 'Michael Jackson' } })

  return rendered
}

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())

describe('<Header />', () => {
  test('show the user the title of the app', () => {
    render(<Provider store={store}><Header /></Provider>)
    screen.getByText('CornerJob Music Player')
  })
})

describe('App', () => {
  const pauseStub = jest
    .spyOn(window.HTMLMediaElement.prototype, 'pause')
    .mockImplementation(() => {})

  const playStub = jest
    .spyOn(window.HTMLMediaElement.prototype, 'play')
    .mockImplementation(() => {})

  test('allow the user to search songs', async () => {
    performSearchSongs()
    // check without search
    screen.getByText('Use the search bar to find results')
    // check input filter with search
    const inputNode = screen.getByTestId('input-search')
    fireEvent.change(inputNode, { target: { value: 'Michael Jackson' } })
    const elements = await screen.findAllByText('Jackson 5')
    expect(elements).toHaveLength(4)
  })

  test('allow the user to search and play a song', async () => {
    performSearchSongs()
    // check input filter with search
    const inputNode = screen.getByTestId('input-search')
    fireEvent.change(inputNode, { target: { value: 'Michael Jackson' } })
    const [firstElement] = await screen.findAllByText('I Want You Back')
    fireEvent.click(firstElement)

    const play = await screen.findByLabelText('Play')
    play.click()
    expect(playStub).toHaveBeenCalled()
    const pause = await screen.findByLabelText('Play')
    pause.click()
    expect(pauseStub).toHaveBeenCalled()
  })
  test('allow the user to play previous and next song', async () => {
    performSearchSongs()
    // check input filter with search
    const inputNode = screen.getByTestId('input-search')
    fireEvent.change(inputNode, { target: { value: 'Michael Jackson' } })
    const [firstElement] = await screen.findAllByText('I Want You Back')
    fireEvent.click(firstElement)

    const play = await screen.findByLabelText('Play')
    play.click()
    expect(playStub).toHaveBeenCalled()

    play.click()
    expect(pauseStub).toHaveBeenCalled()

    const nextSongButton = await screen.findByLabelText('PlayForward')
    fireEvent.click(nextSongButton)
    await screen.findByText('Jackson 4')

    const previousSongButton = await screen.findByLabelText('PlayBack')
    fireEvent.click(previousSongButton)
    await screen.findByText('Jackson 5')
  })
})
