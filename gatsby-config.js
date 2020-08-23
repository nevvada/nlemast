const siteMetadata = {
    authorName: `Nathan Le Master`,
    description: `This is my personal site where I write about coding, things, and stuff.`,
    siteLanguage: `en-US`,
    title: `nlemast`,
};

module.exports = {
    siteMetadata,
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-typescript`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                start_url: '/',
                background_color: '#fff',
                theme_color: '#000',
                display: 'standalone',
                icon: 'src/images/SquareFavicon.png',
                crossOrigin: `use-credentials`,
            },
        },
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
                    `gatsby-remark-copy-linked-files`,
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
