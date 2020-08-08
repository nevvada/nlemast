module.exports = {
    siteMetadata: {
        title: `nathan le master`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
		`gatsby-plugin-typescript`,
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/posts`,
                name: `posts`,
            },
        },
    ],
};
