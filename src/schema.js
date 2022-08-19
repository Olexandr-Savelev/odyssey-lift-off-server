const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
    "Query to get single track"
    track(id: ID!): Track!
    module(id: ID!): Module!
  }

  type Mutation {
    incremetTrackViews(id:ID!): IncremetTrackViewsRequest!
  }

  type IncremetTrackViewsRequest {
    "Similar to HTTP status code, represents the mutation status"
    code: Int!
    "Indicates wether the mutation was successful"
    success: Boolean!
    "User-readable massage for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    track: Track
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main Author"
    author: Author!
    "The track's illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
    "Each track have a description"
    description: String
    "Nomber of views of each track"
    numberOfViews:Int
    "Modules array"
    modules: [Module!]!
  }

  "A Module is a single unit of teaching. Multiple Modules compose a Track."
  type Module {
    id: ID!
    "Title of every module"
    title: String
    "The module length in minutes"
    length: Int
    trackId: String
    authorId: String
    topic: String
    content: String
    videoUrl: String
    track: Track
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture"
    photo: String
  }
`;

module.exports = typeDefs;
