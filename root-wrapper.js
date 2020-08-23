import { MDXProvider } from '@mdx-js/react';
import React from 'react';

import Code from './src/components/Code/Code';

const components = {
	a: props => <a {...props} target="_blank"/>,
	li: props => <li {...props} style={{ margin: '0 2em' }} />,
	img: props => (<div style={{ textAlign: 'center' }}><img {...props} /></div>),
	p: props => (<p {...props} style={{ margin: '2em 0' }}/>),
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
