const Mutations = {
  async createItem(parent, args, ctx, info) {
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          // title: args.title,
          // description: args.desc,
          // image: args.image,
          // largeImage: args.largeImage,
          // price: args.price,
          ...args,
        },
      },
      info
    );
    // console.log(item)
    return item;
  },
};

module.exports = Mutations;
