const AuthenticationController = require('../controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy')
const SongsController = require('../controllers/SongsController')
const BookmarksController = require('../controllers/BookmarksController')
const HistoriesController = require('../controllers/HistoriesController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  // Songs
  app.get('/songs',
    SongsController.index)

  app.get('/songs/:songId',
    SongsController.show)

  app.put('/songs/:songId',
    SongsController.put)

  app.post('/songs',
    SongsController.post)

  // Bookmarks
  app.get('/bookmarks',
    BookmarksController.index)

  app.post('/bookmarks',
    BookmarksController.post)

  app.delete('/bookmarks/:bookmarkId',
    BookmarksController.delete)

  // Histories
  app.get('/histories',
    HistoriesController.index)

  app.post('/histories',
    HistoriesController.post)
}
