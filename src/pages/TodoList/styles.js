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
`;

export const TodoMain = styled.main`
     display: flex;
    gap: 20px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px; 
    padding: 20px;
    background: ${({ theme }) => theme.cardBackground};
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    width: 100%;
    min-height: 500px;
    max-width: 1000px;
`;

export const Header = styled.header`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
`;

export const Title = styled.h1`
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    color: ${({ theme }) => theme.text};
    flex: 1;
    text-align: center;
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
`;

export const GroupInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 70px;
`;

export const InputLabel = styled.label`
    font-size: 0.9rem;
    ${({ theme }) => theme.text};
    margin-bottom: 10px;
`;

export const Input = styled.input`
    padding: 10px;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    text-align: center;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const ButtonAdd = styled.button`
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    padding: 15px 5px;
    width: 140px;
    max-width: 140px;
    background: #28a745;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      background: #218838;
    }
`;

export const TodoSection = styled.section`
	width: 60%;
	background: #fff;
	border-radius: 12px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	margin-bottom: 20px;
	padding: 16px;
`;

export const TodoUl = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const TodoLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
	padding: 12px 14px;
	background: ${props => props.$turnGreen ? 'green' : '#f8f9fa'} ;
	border: 1px solid #e5e7eb;
	border-radius: 8px;
	color: ${props => props.$turnGreen ? '#f8f9fa' : '#333'} ;
	font-size: 24px;
`;

export const ContainerButtons = styled.div `
  display: flex;
  gap: 8px;
  margin-left: auto;
`

export const DeleteButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: #dc3545;       /* vermelho */
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

  & + button {
    margin-left: 6px;
  }
`;

export const EditButton = styled(DeleteButton)`
  background: #ffc107;       /* amarelo */
  &:hover {
    background: #e0a800;
  }
`;

export const DoneButton = styled(DeleteButton)`
  background: #28a745;       /* verde */
  &:hover {
    background: #218838;
  }
`;

export const SaveButton = styled(DeleteButton)`
  background: #17a2b8;       /* azul turquesa */
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
	font-size: 0.9rem;
	z-index: 999;
	background: #222;
	color: white;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	padding: 20px;

	a {
		color: #007bff;
		text-decoration: none;
		cursor: pointer;
    margin-left: 10px;
	}

	a:hover {
		text-decoration: underline;
	}
`;
