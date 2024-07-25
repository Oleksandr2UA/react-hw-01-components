import { styled } from 'styled-components';

export const Container = styled.div`
  max-width: 300px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f4f7f9;
  text-align: center;
  font-family: Arial, sans-serif;
`;
export const Description = styled.div`
  margin-bottom: 20px;
`;
export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
`;
export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0;
`;
export const Tag = styled.p`
  color: #666;
  margin: 5px 0;
`;
export const Location = styled.p`
  color: #999;
  margin: 5px 0;
`;
export const Stats = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  flex: 1;
`;
export const Label = styled.span`
  font-size: 12px;
  color: #999;
`;
export const Quantity = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;
