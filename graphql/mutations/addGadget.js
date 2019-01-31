const { GraphQLObjectType, GraphQLString } = require('graphql');
const gadgetGraphQLType = require('./../types/gadgetType');
const Gadget = require('./../../models/gadget');

module.exports = {
  type: gadgetGraphQLType,
  args: {
    name: { type: GraphQLString }, 
    release_date: { type: GraphQLString },
    by_company: { type: GraphQLString },
    price: { type: GraphQLString }
  },
  resolve(parent, args) {
    const newGadget = new Gadget({
      name: args.name,
      release_date: args.release_date,
      by_company: args.by_company,
      price: args.price,
    })

    return newGadget.save();
  }
};

