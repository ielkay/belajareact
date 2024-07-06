import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center; 
  align-items: center;
`

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); 
  gap: 20px;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const List = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 2px solid #fff;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor || "white"};
  text-align: center; 
  text-transform: capitalize; 
  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    transform: scale(1.1);
    background-color: lightblue;
  }

  img {
    width: 100px;
    height: auto;
    margin-bottom: 10px;
  }
`;
