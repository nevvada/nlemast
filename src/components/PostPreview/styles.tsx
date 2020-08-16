import styled from 'styled-components';

export const StyledPost = styled.article`
	border-radius: 1em;
	min-height: 110px;
	padding: 1em;

	> * > * {
		padding: 0.1em 0;
	}

	> a {
		color: #000;
		display: flex;
		height: 100%;
		justify-content: space-between;
		min-height: inherit;
		text-decoration: none;
	}

	&:hover {
		border: 1px dashed #000;
	}
`;
