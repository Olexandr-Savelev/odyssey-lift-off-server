const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const TrackAPI = require('./datasources/track-api');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      trackAPI: new TrackAPI(),
    };
  },
});

async function startApolloServer(server) {
  const { url } = await server.listen({ port: process.env.PORT || 4000 })
  console.log(`Server starts on ${url} port`)
}

startApolloServer(server)

// server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
//   console.log(` 🚀  Server is running!
//   🔉  Listening on port ${url}`)
// })
