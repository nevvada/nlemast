import Highlight, { defaultProps } from 'prism-react-renderer';
import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import theme from 'prism-react-renderer/themes/github';

import Code from './src/components/Code/Code';

const components = {
	'p.inlineCode': props => (
		<code style={{ backgroundColor: 'lightgray' }} {...props} />
	),
    pre: ({ children: { props } }) => {
		if (props.mdxType === 'code') {
			return (
				<Code 
					codeString={props.children.trim()}
					language="javascript"
					{...props}
				/>
			)
		}
	},
};

export const wrapRootElement = ({ element }) => (
    <MDXProvider components={components}>{element}</MDXProvider>
);
