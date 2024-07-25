import { styled } from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  border-radius: 5px;
`;
export const Status = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${({ $isOnline }) => {
    if ($isOnline) return 'green';
    else return 'red';
  }};
`;
export const Image = styled.img`
  border-radius: 50%;
  margin-right: 10px;
`;
export const Name = styled.p`
  font-size: 16px;
  font-weight: bold;
`;
