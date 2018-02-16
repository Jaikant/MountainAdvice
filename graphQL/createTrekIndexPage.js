const path = require('path');
const slash = require('slash');

const createTrekIndexPage = (createPage, graphql) => {
  return new Promise((resolve, reject) => {

    const trekIndexTemplate = path.resolve(
      `src/templates/trek-index.js`
    );
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(filter: {fields: {slug: { regex: "/trek/" }}}) {
              edges {
                node {
                  id
                  excerpt(pruneLength: 200)
                  timeToRead
                  frontmatter {
                    title
                    imgdesc
                    imagepath
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.error) {
          return Promise.reject(result.errors)
        }

        if (result.data.allMarkdownRemark != null) {
          const posts = result.data.allMarkdownRemark.edges;

            createPage({
              path: `\\trek`,
              component: slash(trekIndexTemplate),
              context: {
                data: result.data
              }
            });
        }
      })
   );
  });
}

module.exports = createTrekIndexPage;
