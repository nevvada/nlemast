import { Helmet } from 'react-helmet';
import React from 'react';

import useSiteMetadata from '../../hooks/useSiteMetadata';

const SEO = () => {
	const {
		description = '',
		siteLanguage = '',
		title = '',
	} = useSiteMetadata();

    return (
        <>
            <Helmet
				title={title}
			>
				<html lang={siteLanguage} />
                <meta name="description" content={description} />
            </Helmet>
        </>
    );
};

export default SEO;
