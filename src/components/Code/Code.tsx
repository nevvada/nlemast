import Highlight, { defaultProps } from 'prism-react-renderer';
import React from 'react';
import theme from 'prism-react-renderer/themes/nightOwlLight';

const Code = ({ codeString, language }) => {
    return (
        <Highlight {...defaultProps} code={codeString} language={language} theme={theme}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => {
                return (
                    <pre className={className} style={style}>
                        {tokens.map((line, index) => {
                            return (
                                <div {...getLineProps({ line, key: index })}>
                                    {line.map((token, key) => {
                                        return <span {...getTokenProps({ token, key })} />;
                                    })}
                                </div>
                            );
                        })}
                    </pre>
                );
            }}
        </Highlight>
    );
};

export default Code;