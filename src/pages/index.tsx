import React from 'react';

import Home from '../components/Home/Home';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';

import useSiteMetadata from '../hooks/useSiteMetadata';

const App = () => {
	const {
		description = '',
		siteLanguage = '',
		title = '',
	} = useSiteMetadata();

	return (
		<Layout>
			<SEO 
				description={description}
				siteLanguage={siteLanguage}
				title={title}
			/>
			<Home />
		</Layout>
	)
};

export default App;
