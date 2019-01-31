const { GraphQLObjectType, GraphQLString } = require('graphql');

const addGadget = require('./mutations/addGadget');
const updateGadget = require('./mutations/updateGadget');
const removeGadget = require('./mutations/removeGadget');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addGadget,
    updateGadget,
    removeGadget,
  }
})

module.exports = Mutation;