import { render, screen } from '../../../test-utils/testing-library-utils'
import Options from '../Options'
import { OrderDetailsProvider } from '../../../context/OrderDetails'

test('displays image for each scoop from the server', async () => {
  render(<Options optionType='scoops' />, { wrapper: OrderDetailsProvider })

  // find images

  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i })
  expect(scoopImages).toHaveLength(2)

  // confirm alt text of images

  const altTexts = scoopImages.map((scoopImage) => scoopImage.alt)
  expect(altTexts).toEqual(['Chocolate scoop', 'Vanilla scoop'])
})

test('displays image for each topping from the server', async () => {
  render(<Options optionType='toppings' />)

  const toppingImages = await screen.findAllByRole('img', { name: /topping$/i })
  expect(toppingImages).toHaveLength(3)

  const altTexts = toppingImages.map((toppingImage) => toppingImage.alt)
  expect(altTexts).toEqual([
    'Cherries topping',
    'M&Ms topping',
    'Hot fudge topping'
  ])
})
