const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
  {
    rickAndMorty {
      characters {
        results {
          id
          name
        }
      }
    }
  }
  `)
  data.rickAndMorty.characters.results.forEach(({ id }) => {
    actions.createPage({
      path: `/post/`+id,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        id: id,
      },
    })
  })
}