const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    // get a single track by ID, for the track page
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id)
    },
    module: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getModule(id)
    }
  },

  Mutation: {
    incremetTrackViews: async (_, { id }, { dataSources }) => {
      try {
        const track = dataSources.trackAPI.incremetTrackViews(id)
        return {
          code: 200,
          success: true,
          message: `Successfuly incremented number of views for track ${id}`,
          track
        }
      } catch (err) {
        return {
          code: err.extentions.response.status,
          success: false,
          message: err.extentions.response.body,
          track: null
        }
      }

    }
  },

  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id)
    }
  },

  Module: {
    track: ({ trackId }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrack(trackId)
    }
  }
};

module.exports = resolvers;
