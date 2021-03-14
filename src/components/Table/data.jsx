export const columns = [
  {
    Header: ' ',
    accesor: 'cover',
    Cell: props => {
      const { cover, trackName } = props.row.original
      return <img alt={trackName} src={cover} style={{ width: '36px', height: '36px', borderRadius: '4px' }} />
    }
  },
  {
    Header: 'Song',
    accessor: 'trackName'
  },
  {
    Header: 'Artist',
    accessor: 'artistName'
  },
  {
    Header: 'Price',
    accessor: 'price'
  },
  {
    Header: 'Album',
    accessor: 'album'
  },
  {
    Header: 'Genre',
    accessor: 'genre',
    color: 'orange'
  },
  {
    Header: 'Duration',
    accessor: 'duration',
    color: 'orange'
  },
  {
    Header: 'Id',
    accessor: 'trackId'
  }
]

const millisToMinutesAndSeconds = (millis) => {
  const minutes = Math.floor(millis / 60000)
  const seconds = ((millis % 60000) / 1000).toFixed(0)
  const durantion = minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  const isDurantionAvailable = millis ? durantion : ''
  return isDurantionAvailable
}

const applyEllipsis = (data) => {
  const needsEllipsis = data && data.length > 10
  const dataFormat = needsEllipsis ? data.substring(0, 10) + '...' : data
  const isDataAvailable = dataFormat || ''
  return isDataAvailable
}

const formatter = (number) => {
  const euros = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(number)
  const isPriceAvailable = euros || ''
  return isPriceAvailable
}

export const makeData = (data) => {
  return data.map(d => ({
    artistName: applyEllipsis(d.artistName),
    cover: d.artworkUrl100,
    duration: millisToMinutesAndSeconds(d.trackTimeMillis),
    album: applyEllipsis(d.collectionName),
    genre: d.primaryGenreName,
    price: formatter(d.collectionPrice),
    trackId: d.trackId,
    trackName: applyEllipsis(d.trackName)
  }))
}
