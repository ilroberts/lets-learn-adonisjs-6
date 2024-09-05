/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const MoviesController = () => import('#controllers/movies_controller')

router.on('/').render('pages/home')

router.get('/movies', [MoviesController, 'index'])
