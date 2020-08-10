const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const blogPostTemplate = path.resolve('src/templates/blogPostTemplate.tsx');

    return graphql(`
        {
            allMdx {
                nodes {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                    }
                }
            }
        }
    `).then((result) => {
        if (result.errors) {
            throw result.errors;
        }

        const posts = result.data.allMdx.nodes;

        posts.forEach((post) => {
            createPage({
                component: blogPostTemplate,
                context: {
                    slug: post.fields.slug,
                },
                path: post.fields.slug,
            });
        });
    });
};

exports.onCreateNode = ({ actions, getNode, node }) => {
	const { createNodeField } = actions;

    if (node.internal.type === `Mdx`) {
		const value = createFilePath({ node, getNode });

        createNodeField({
            name: `slug`,
            node,
            value,
        });
    }
};
