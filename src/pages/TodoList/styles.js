import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.headerBackground};
  color: ${({ theme }) => theme.text};
  display: flex;
  padding: 0 20px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.4);
  z-index: 1000;

  @media (max-width: 768px) {
    height: 50px;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    height: 45px;
    font-size: 14px;
  }
`;

export const TodoMain = styled.main`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 100px auto 0 auto;
  padding: 20px;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  width: 100%;
  min-height: 500px;
  max-width: 1000px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 60px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    margin-top: 50px;
    padding: 10px;
    min-height: auto;
  }
`;

export const Header = styled.header`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 32px;
  color: ${({ theme }) => theme.text};
  flex: 1;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const ButtonToggleTheme = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background: ${({ theme }) => theme.buttonBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;

  img {
    width: 28px;
    height: 28px;
  }

  &:hover {
    background: ${({ theme }) => theme.buttonHover};
  }

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

export const TodoForm = styled.form`
  display: flex;
  width: 40%;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  background: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
  padding: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const GroupInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;

  @media (max-width: 480px) {
    margin-top: 30px;
  }
`;

export const InputLabel = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  font-size: 16px;
  text-align: center;
  background: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.text};

  &:focus {
    border-color: ${({ theme }) => theme.focusBorder};
    outline: none;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px;
  }
`;

export const ButtonAdd = styled.button`
  margin: 10px auto 0 auto;
  padding: 15px 5px;
  width: 140px;
  background: ${({ theme }) => theme.doneBackground};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: ${({ theme }) => theme.buttonHover};
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 12px;
    font-size: 14px;
  }
`;

export const TodoSection = styled.section`
  width: 60%;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  padding: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Select = styled.select`
  width: 100%;
  max-width: 200px;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  font-size: 16px;
  background: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: border-color 0.3s ease, background 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.focusBorder};
    outline: none;
  }

  &:hover {
    background: ${({ theme }) => theme.buttonHover};
  }

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 14px;
    padding: 8px;
  }

  
  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px;
  }
`;

export const TodoUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  max-height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.border};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;

export const TodoLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background: ${({ theme, $turnGreen }) =>
    $turnGreen ? theme.doneBackground : theme.cardBackground};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 8px;
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-left: auto;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: flex-end;
  }
`;

export const DeleteButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: #dc3545;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;

  img {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background: #a71d2a;
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
  }
`;

export const EditButton = styled(DeleteButton)`
  background: #ffc107; /* amarelo */
  &:hover {
    background: #e0a800;
  }
`;

export const DoneButton = styled(DeleteButton)`
  background: ${({ theme }) => theme.doneBackground}; /* verde do tema */
  &:hover {
    background: #218838;
  }
`;

export const SaveButton = styled(DeleteButton)`
  background: #17a2b8; /* azul turquesa */
  &:hover {
    background: #117a8b;
  }
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  text-align: center;
  font-size: 14px;
  z-index: 999;
  background: ${({ theme }) => theme.headerBackground};
  color: ${({ theme }) => theme.text};
  box-shadow: 0 -2px 6px rgba(0,0,0,0.2);
  padding: 20px;

  a {
    color: ${({ theme }) => theme.focusBorder};
    text-decoration: none;
    margin-left: 10px;
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
  }
`;