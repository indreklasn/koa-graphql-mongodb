const { GraphQLSchema } = require('graphql');

const RootQuery = require('./queries/rootQuery');
const Mutations = require('./mutations');


module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
});