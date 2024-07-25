import { styled } from 'styled-components';

export const Section = styled.section`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
  padding: 20px;
`;
export const Title = styled.h2`
  font-size: 20px;
  color: #333;
  margin-bottom: 20px;
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
`;
export const Item = styled.li`
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  margin: 0 5px;
  color: #fff;
  font-size: 14px;
`;
export const Label = styled.span`
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
`;
export const Percentage = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
