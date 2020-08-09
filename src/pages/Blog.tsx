export const query = graphql`
    query SITE_INDEX_QUERY {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
            nodes {
                id
				excerpt(pruneLength: 200)
				fields {
					slug
				}
				frontmatter {
					date
					title
				}
			}
        }
    }
`;

