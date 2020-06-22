import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.05);
  min-width: 200px;
  transition: 0.25s all;
  &:hover {
    box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.1);
  }
`;

const Title = styled.h3`
  font-weight: 400;
  margin: 0.75rem 1rem;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  border-top: 1px solid #f2f4f6;
  color: #3f3f3f;
  font-size: 14px;
  padding: 0.75rem 1rem;
`;

const Pets = ({ title, items }) => (
  <Wrapper>
    <Title data-testid="PetList-Title">{title}</Title>
    <List data-testid="PetList-List">
      {items.map((item) => (
        <ListItem data-testid="PetList-ListItem" key={item.name}>
          {item.name}
        </ListItem>
      ))}
    </List>
  </Wrapper>
);

Pets.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
    })
  ),
};

export default Pets;
