import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background-color: white;
  width: 30%;
  border-radius: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
  font-size: 16px;
  cursor: pointer;
  color: #333;
  margin-bottom: 10px; 
  margin-right: 10px; 
`;

export const FavoriteButton = styled.button`
  align-self: flex-end;
  margin-top: 10px; 
  margin-right: 10px; 
  background-color: transparent;
  border: none;
  color: #555;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #007bff;
  }
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px; 
  width: 100%; 
  font-size: 16px;
  color: #555;
`;

export const BuySellButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 10px 20px; 
  margin: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;
