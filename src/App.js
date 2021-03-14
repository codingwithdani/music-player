import { Route, Switch } from 'wouter'
import { Error404 } from './pages/Error404'
import { Layout } from './styles-utils'
import { ContentLayout } from './components/ContentLayout'
import { SingleTrack } from './pages/SingleTrack'
import { SearchSongs } from './pages/SearchSongs'

function App () {
  return (
    <Layout className='App'>
      <ContentLayout>
        <Switch>
          <Route path='/'>
            <SearchSongs />
          </Route>
        <Route path='/detail/:trackId'>
          {(params) => <SingleTrack trackId={params.trackId} />}
        </Route>
          <Route>
            <Error404 />
          </Route>
        </Switch>
      </ContentLayout>
    </Layout>
  )
}

export default App
