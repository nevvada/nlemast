import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import Layout from '../components/Layout/Layout';
import { StyledBlogPost } from '../components/BlogPost/styles';

const BlogPostTemplate = ({ data }) => {
    const { body, frontmatter } = data.mdx;

    return (
        <Layout>
            <StyledBlogPost>
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.date}</p>
                <MDXRenderer>{body}</MDXRenderer>
            </StyledBlogPost>
        </Layout>
    );
};

export const query = graphql`
    query PostsBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                date(formatString: "YYYY MMMM Do")
                title
            }
        }
    }
`;

export default BlogPostTemplate;
