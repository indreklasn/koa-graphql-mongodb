const { GraphQLObjectType, GraphQLString } = require('graphql');
const gadgetGraphQLType = require('./../types/gadgetType');
const Gadget = require('./../../models/gadget');

module.exports = {
  type: gadgetGraphQLType,
  args: {
    id: { type: GraphQLString },
    name: { type: GraphQLString }, 
    release_date: { type: GraphQLString },
    by_company: { type: GraphQLString },
    price: { type: GraphQLString }
  },
  resolve(parent, args) {
    return Gadget.findById(args.id)
      .then(gadget => {
        gadget.name = args.name
        gadget.release_date = args.release_date,
        gadget.by_company = args.by_company,
        gadget.price = args.price

        return gadget.save()

      })
      .then(updatedGadget => updatedGadget)
      .catch(err => console.log(err))
  }
};