import React from 'react';
import styled from 'styled-components';

import FoodItem from '../molecules/FoodItem';

const items = [
  {
    id: 1,
    name: 'Veggie Burger',
    thumbnail: '',
    desc: 'Super Veggie Burger contains fresh',
  },
  {
    id: 2,
    name: 'Veggie Burger',
    thumbnail: '',
    desc: 'Super Veggie Burger contains fresh',
  },
  {
    id: 3,
    name: 'Veggie Burger',
    thumbnail: '',
    desc: 'Super Veggie Burger contains fresh',
  },
];

const StyledMenu = styled.div`
  border: 2px dashed gray;
  padding: 30px;

  & > div {
    margin-bottom: 20px;
  }
`;

const Menu = () => {
  return (
    <StyledMenu>
      {items.map((i) => (
        <FoodItem
          key={i.id}
          name={i.name}
          thumbnail={i.thumbnail}
          desc={i.desc}
        />
      ))}
    </StyledMenu>
  );
};

export default Menu;
