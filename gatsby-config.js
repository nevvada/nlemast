const siteMetadata = {
    authorName: `Nathan Le Master`,
    description: `This is my personal site where I write about coding, things, and stuff.`,
    siteLanguage: `en-US`,
    siteLocale: `en_us`,
    siteUrl: `nlemast.me`,
    title: `Nathan Le Master's Personal Site`,
};

module.exports = {
    siteMetadata,
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-typescript`,
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 580,
                        },
                    },
                ],
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
