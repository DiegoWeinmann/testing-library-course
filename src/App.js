import Container from 'react-bootstrap/Container'
import { OrderDetailsProvider } from './context/OrderDetails'
import OrderEntry from './pages/entry/OrderEntry'

export default function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        <OrderEntry />
      </OrderDetailsProvider>
    </Container>
  )
}
