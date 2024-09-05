import type { HttpContext } from '@adonisjs/core/http'

export default class MoviesController {
  async index(ctx: HttpContext) {
    return ctx.response.send('Hello from MoviesController')
  }
}
