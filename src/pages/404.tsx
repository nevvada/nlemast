import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout/Layout';

const NotFound = () => {
    return (
        <Layout>
            <p>
                Nope, go
                <Link to="/"> home</Link>
            </p>
        </Layout>
    );
};

export default NotFound;
