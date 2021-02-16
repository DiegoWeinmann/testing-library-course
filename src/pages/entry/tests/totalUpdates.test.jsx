import { render, screen } from '../../../test-utils/testing-library-utils'
import userEvent from '@testing-library/user-event'
import { OrderDetailsProvider } from '../../../context/OrderDetails'
import Options from '../Options'

test('update scoop subtotal when scoops change', async () => {
  render(<Options optionType='scoops' />, {
    wrapper: OrderDetailsProvider
  })

  // make sure total starts out at $0.00
  const scoopSubtotal = screen.getByText('Scoops total: $', {
    exact: false
  })

  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla scoop'
  })

  // update vanilla scoop to 1 and check the subtotal
  userEvent.clear(vanillaInput)
  userEvent.type(vanillaInput, '1')

  expect(scoopSubtotal).toHaveTextContent('2.00')

  // update the chocolate scoops to 2 and check subtotal
  const chocolateInput = await screen.findByRole('spinbutton', {
    name: 'Chocolate scoop'
  })

  userEvent.clear(chocolateInput)
  userEvent.type(chocolateInput, '2')

  expect(scoopSubtotal).toHaveTextContent('6.00')
})
