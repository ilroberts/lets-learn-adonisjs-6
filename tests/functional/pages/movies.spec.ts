import { test } from '@japa/runner'

test.group('Movies page', () => {
  test('welcome message', async ({ visit }) => {
    const page = await visit('/movies')
    await page.assertTextContains('body', 'Welcome to My Website')
  })
})
