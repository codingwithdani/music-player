export const columns = [
  {
    Header: ' ',
    accesor: 'cover',
    Cell: props => {
      const { cover, trackName } = props.row.original
      return (
        <div style={{ width: '65px', textAlign: 'right' }}>
          <img alt={trackName} src={cover} style={{ width: '36px', height: '36px', borderRadius: '4px' }} />
        </div>
      )
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
    Header: 'Album',
    accessor: 'album'
  },
  {
    Header: 'Duration',
    accessor: 'duration',
    color: 'orange'
  },
  {
    Header: 'Genre',
    accessor: 'genre',
    color: 'orange'
  },
  {
    Header: 'Price',
    accessor: 'price',
    color: 'orange',
    minWidth: true
  },
  {
    Header: 'Id',
    accessor: 'trackId',
    show: false
  }
]

const millisToMinutesAndSeconds = (millis) => {
  const minutes = Math.floor(millis / 60000)
  const seconds = ((millis % 60000) / 1000).toFixed(0)
  const duration = minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  return millis ? duration : ''
}

const formatter = (number) => {
  const euros = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(number)
  const isPriceAvailable = euros || ''
  return isPriceAvailable
}

export const makeData = (data) => {
  return data.map(d => ({
    artistName: d.artistName,
    cover: d.artworkUrl100,
    duration: millisToMinutesAndSeconds(d.trackTimeMillis),
    album: d.collectionName,
    genre: d.primaryGenreName,
    price: formatter(d.collectionPrice),
    trackId: d.trackId,
    trackName: d.trackName
  }))
}
