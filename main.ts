import {Server} from './server/server'
import {usersRouter} from './users/users.router'
import {restaurantsRouter} from './restaurants/restaurants.router'
import {reviewsRouter} from './reviews/reviews.router'
import {mainRouter} from './main.router'
import { handleError } from './server/error.handler'

const server =  new Server()

server.bootstrap([
    mainRouter,
    usersRouter,
    restaurantsRouter,
    reviewsRouter
]).then(server =>{
    console.log('Server is listening on:', server.application.address())
    // process.on('unhandledRejection', up => { throw ` Erro de unhandledRejection ${up}` })
}).catch(error=>{
    console.log('Server Failed To Start')
    console.error(error)
    process.exit(1)
})


