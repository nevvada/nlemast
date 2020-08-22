import { Helmet } from 'react-helmet';
import React from 'react';

const SEO = ({
	description,
	siteLanguage,
	title,
}) => {
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
