import React, { Component } from 'react';
import styled from 'styled-components';
import {
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_COMPLETED,
} from 'actions/filter';
import FilterLink from 'containers/FilterLink';

const FooterContainer = styled.div`
    color: #777;
    padding: 10px 15px;
    height: 20px;
    text-align: center;
    border-top: 1px solid #e6e6e6;
    &:before{
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 50px;
      overflow: hidden;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
    }
`;

const FiltersList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    right: 0;
    left: 0;
`;

const Filter = styled.li`
    display: inline;
`;

type Props = {};

class Footer extends Component<Props> {
  render() {
    return (
      <FooterContainer>
        <FiltersList>
          <Filter>
            <FilterLink filter={SHOW_ALL}>
            All
            </FilterLink>
          </Filter>
          <Filter>
            <FilterLink filter={SHOW_ACTIVE}>
            Active
            </FilterLink>
          </Filter>
          <Filter>
            <FilterLink filter={SHOW_COMPLETED}>
            Completed
            </FilterLink>
          </Filter>
        </FiltersList>
      </FooterContainer>
    );
  }
}

export default Footer;