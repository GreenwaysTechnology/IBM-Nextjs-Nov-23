import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from '@apollo/server/standalone'

//Define schema
const typeDefs = `
#Simple Query which returns Hello World
 type Query {
    hello:String    
 }`

//  2.Biz logic : write biz logic for Query: resolover 
//Define Resolver: biz logic
const resolvers = {
    //Query Implmentation
    Query: {
        hello() {
            return "Hello World"
        }
    }
    //Mutation

    //Subscription
}
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: {
        port: 4000
    }
})
console.log(`Apollo Server is Ready at ${url}`)