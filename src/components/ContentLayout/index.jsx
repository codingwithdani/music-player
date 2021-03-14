
import { Header } from 'components/Header'
import { ContentLayoutStyles } from './styles'

export const ContentLayout = ({ children }) => 
    <ContentLayoutStyles>
        <Header />
        {children}
    </ContentLayoutStyles>