import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
const categories = [
  { name: 'all', text: '전체보기' },
  { name: 'business', text: '비즈니스' },
  { name: 'entertainment', text: '엔터테인먼트' },
  { name: 'health', text: '건강' },
  { name: 'science', text: '과학' },
  { name: 'sports', text: '스포츠' },
  { name: 'technology', text: '기술' },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

/* HTML 요소가 아닌 특정 컴포넌트에 styled-components를 사용할 때는 styled(컴포넌트)``형식이다. */
const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;

// styled 컴포넌트에 프롭스 값으로 해당 css를 정하고 싶을 떄 쓰는 방법
// ${props =>
//   props.active &&
//   css`
//     font-weight: 600;
//     border-bottom: 2px solid #22b8cf;
//     color: #22b8cf;
//     &:hover {
//       color: #3bc9db;
//     }
//   `}

const Categories = ({ onSelect, category }) => {
  return (
    <CategoriesBlock>
      {categories.map(c => {
        return (
          <Category
            key={c.name}
            activeClassName="active"
            to={c.name === 'all' ? '/' : `/${c.name}`}
            exact={c.name === 'all'}
          >
            {c.text}
          </Category>
        );
      })}
    </CategoriesBlock>
  );
};

export default Categories;
