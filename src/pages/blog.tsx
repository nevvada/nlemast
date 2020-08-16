import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import PostPreview from '../components/PostPreview/PostPreview';
import PostPreviewContainer from '../components/PostPreviewContainer/PostPreviewContainer';

const renderPosts = (data) => {
    return data.allMdx.nodes.map((node) => {
        const { id, fields, frontmatter } = node;

        return (
            <PostPreview key={id}>
                <Link to={fields.slug}>
                    <h1>{frontmatter.title}</h1>
                    <h3>{frontmatter.date}</h3>
                </Link>
            </PostPreview>
        );
    });
};

const Blog = ({ data }) => {
    return (
        <>
            <Layout>
                <PostPreviewContainer>
                    {renderPosts(data)}
                </PostPreviewContainer>
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
                    date(formatString: "YYYY MMMM Do")
                    summary
                    title
                }
            }
        }
    }
`;

export default Blog;
