import React from 'react';

import Home from '../components/Home/Home';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';

const App = () => {
	return (
		<Layout>
			<SEO />
			<Home />
		</Layout>
	)
};

export default App;
