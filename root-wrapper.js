import Highlight, { defaultProps } from 'prism-react-renderer';
import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import theme from 'prism-react-renderer/themes/github';

const components = {
	'p.inlineCode': props => (
		<code style={{ backgroundColor: 'lightgray' }} {...props} />
	),
    pre: (props) => {
		console.log('oi', props.children.props)
		const className = props.children.props.className || '';
		const matches = className.match(/language-(?<lang>.*)/);

		return (
			<Highlight
				{...defaultProps}
				code={props.children.props.children.trim()}
				language={
					matches && matches.groups && matches.groups.lang
						? matches.group.lang
						: ''
				}
				theme={theme}
			>
				{({
					className,
					style,
					tokens,
					getLineProps,
					getTokenProps,
				}) => {
					return (
						<pre className={className} style={style}>
							{tokens.map((line, index) => {
								return (
									<div {...getLineProps({ line, key: index })}>
										{line.map((token, key) => {
											return (
												<span {...getTokenProps({ token, key })} />
											)
										})}
									</div>
								)
							})}
						</pre>
					)
				}}
			</Highlight>
		)
	},
};

export const wrapRootElement = ({ element }) => (
    <MDXProvider components={components}>{element}</MDXProvider>
);
