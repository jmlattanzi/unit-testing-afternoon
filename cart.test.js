const cart = require('./cart')
const cars = require('./data/cars')

describe('Cart Properties: ', () => {
	test('Cart should default to empty array', () => {
		expect(Array.isArray(cart.cart)).toEqual(true)
		expect(cart.cart.length).toEqual(0)
	})

	test('Cart should have a total of 0', () => {
		expect(Number.isInteger(cart.total)).toEqual(true)
		expect(cart.total).toEqual(0)
	})
})

describe('Cart Methods: ', () => {
	afterEach(() => {
		cart.cart = []
		cart.total = 0
	})

	test('addToCart should increment the cart length', () => {
		cart.addToCart(cars[0])
		cart.addToCart(cars[1])

		expect(cart.cart.length).toEqual(2)
		expect(cart.cart[0]).toEqual(cars[0])
		expect(cart.cart[1]).toEqual(cars[1])
	})

	test('addToCart should increase the cart total', () => {
		cart.addToCart(cars[0])
		cart.addToCart(cars[1])

		expect(cart.total).toEqual(cars[0].price + cars[1].price)
	})

	test('removeFromCart should decrement the carts length by 1', () => {
		cart.addToCart(cars[0])
		cart.addToCart(cars[1])
		cart.addToCart(cars[2])
		cart.removeFromCart(1, cars[1].price)

		expect(cart.cart.length).toEqual(2)
		expect(cart.cart[0]).toEqual(cars[0])
		expect(cart.cart[1]).toEqual(cars[2])
	})

	test('removeFromCart should decrease the cart total', () => {
		cart.addToCart(cars[0])
		cart.removeFromCart(0, cars[0].price)

		expect(cart.total).toEqual(0)
	})

	test('checkout should clear the cart and total', () => {
		cart.addToCart(cars[0])
		cart.addToCart(cars[0])
		cart.addToCart(cars[0])
		cart.checkout()

		expect(cart.total).toEqual(0)
		expect(cart.cart.length).toEqual(0)
	})
})
