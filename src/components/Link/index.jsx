import React, { type Node } from 'react';
import styled from 'styled-components';


export type Props = {
  active: boolean,
  children?: Node,
  onClick: () => void
};
const StyledLink = styled.a`
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
    &:hover{
      border-color: rgba(175, 47, 47, 0.1);
      cursor: pointer;
    }
`;

const ActiveLink = styled.span`
    margin: 3px;
    padding: 3px 7px;
    border: 1px solid transparent;
    border-color: rgba(175, 47, 47, 0.1);
`;

const Link = ({ active, children, onClick }: Props) => {
  if (active) {
    return <ActiveLink>{children}</ActiveLink>;
  }

  return (
    <StyledLink
      href="#"
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </StyledLink>
  );
};
Link.defaultProps = {
  children: '',
};

export default Link;

