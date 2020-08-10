import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';

const renderPosts = (data) => {
    return data.allMdx.nodes.map((node) => {
        const { id, excerpt, fields, frontmatter } = node;

        return (
            <div key={id}>
                <Link to={fields.slug}>
                    <h1>{frontmatter.title}</h1>
                    <p>{frontmatter.date}</p>
                    <p>{excerpt}</p>
                </Link>
            </div>
        );
    });
};

const Blog = ({ data }) => {
    return (
        <>
            <Layout>
				<h1>my blog?</h1>
				{renderPosts(data)}
            </Layout>
        </>
    );
};

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

export default Blog;
