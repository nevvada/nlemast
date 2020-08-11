import styled from 'styled-components';

export const StyledPost = styled.article`
	border-radius: 1em;
	min-height: 110px;
	padding: 1em;

	> * > * {
		padding: 0.1em 0;
	}

	&:hover {
		border: 1px dashed #000;
	}
`;
