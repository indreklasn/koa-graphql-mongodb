const { GraphQLObjectType } =  require('graphql');

const Gadget = require('../../models/gadget');
const queryAllGadgets = require('./queryAllGadgets')
const queryGadgetById = require('./queryGadgetById');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    queryGadgetById,
    queryAllGadgets,
  }
})

module.exports = RootQuery;

