import React from 'react';
import SEO from 'react-seo-component';

import Home from '../components/Home/Home';
import Layout from '../components/Layout/Layout';

import useSiteMetadata from '../hooks/useSiteMetadata';

const App = () => {
	const {
		description,
		siteLanguage,
		siteLocale,
		siteUrl,
		title
	} = useSiteMetadata();

	return (
		<Layout>
			<SEO
				description={description || `nothing`}
				pathname={siteUrl}
				siteLanguage={siteLanguage}
				siteLocale={siteLocale}
				title={title}
			/>
			<Home />
		</Layout>
	)
};

export default App;
