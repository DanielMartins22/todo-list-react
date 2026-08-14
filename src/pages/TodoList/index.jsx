import { useState } from 'react';

import DeleteImg from '../../assets/delete.png';
import DoneImg from '../../assets/done.png';
import EditImg from '../../assets/edit.png';
import MoonImg from '../../assets/moon.png';
import SaveImg from '../../assets/save.png';
import SunImg from '../../assets/sun.png';

import ToastContainerCustom from '../../components/ToastContainer';
import { toastHelper } from '../../helpers/toastHelper';

import {
	ButtonAdd,
	ButtonToggleTheme,
	Container,
	ContainerButtons,
	DeleteButton,
	DoneButton,
	EditButton,
	Footer,
	GroupInput,
	Header,
	Input,
	InputLabel,
	SaveButton,
	Title,
	TodoForm,
	TodoLi,
	TodoMain,
	TodoSection,
	TodoUl,
} from './styles';

function TodoList({ darkMode, setDarkMode }) {
	const [inputValue, setInputValue] = useState('');

	const [listItens, setListItens] = useState([]);

	
	const handleClick = () => {
		if (inputValue.trim() === '') return;

		const newObjectItem = {
			id: crypto.randomUUID(),
			inputValue: inputValue,
			isEditing: false,
			editValue: inputValue,
			isDone: false,
		};

		setListItens([...listItens, newObjectItem]);

		setInputValue('');

		toastHelper.add();
	};

	function handleEdit(id) {
		setListItens(
			listItens.map((item) => {
				if (item.id === id) {
					return { ...item, isEditing: true, editValue: item.inputValue };
				}
				return item;
			})
		);
		toastHelper.editMode();
	}

	function handleEditChange(id, newValue) {
		setListItens(
			listItens.map((item) => {
				return item.id === id ? { ...item, editValue: newValue } : item;
			})
		);
	}

	function saveEdit(id) {
		setListItens(
			listItens.map((item) => {
				if (item.id === id) {
					return { ...item, inputValue: item.editValue, isEditing: false };
				}
				return item;
			})
		);
		toastHelper.save();
	}

	const deleteItem = (id) => {
		setListItens(listItens.filter((list) => list.id !== id));

		toastHelper.delete();
	};

	const toggleDone = (id) => {
		setListItens(
			listItens.map((item) => {
				return item.id === id ? { ...item, isDone: !item.isDone } : item;
			})
			
		);

		const item = listItens.find((item) => item.id === id);
		if (!item.isDone) {
			toastHelper.done();
		} else {
			toastHelper.undo();
		}
	};

	return (
		<>
			<Container>
				<Header>
					<Title>Lista de Tarefas</Title>
					<ButtonToggleTheme onClick={() => setDarkMode(!darkMode)}>
						{darkMode ? (
							<img src={SunImg} alt='Tema Claro'/>
						) : (
							<img src={MoonImg} alt='Tema Escuro'/>
						)}

					</ButtonToggleTheme>
				</Header>
			</Container>

			<TodoMain>
				<TodoForm>
					<GroupInput>
						<InputLabel>Nova tarefa</InputLabel>
						<Input
							type="text"
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							placeholder="Digite sua tarefa..."
						/>
					</GroupInput>
					<ButtonAdd onClick={handleClick} type="button">
						Adicionar
					</ButtonAdd>
				</TodoForm>
				<TodoSection>
					<TodoUl>
						{listItens.map((item) => (
							<TodoLi key={item.id} $turnGreen={item.isDone}>
								{item.isEditing ? (
									<>
										<Input
											type="text"
											value={item.editValue}
											onChange={(e) => handleEditChange(item.id, e.target.value)}
										/>
										<SaveButton type="button" onClick={() => saveEdit(item.id)}>
											<img src={SaveImg} alt="Salvar" />
										</SaveButton>
									</>
								) : (
									<>
										{item.inputValue}
										<ContainerButtons>
											<EditButton type="button" onClick={() => handleEdit(item.id)}>
												<img src={EditImg} alt="Editar" />
											</EditButton>

											<DeleteButton type="button" onClick={() => deleteItem(item.id)}>
												<img src={DeleteImg} alt="Excluir" />
											</DeleteButton>

											<DoneButton type="button" onClick={() => toggleDone(item.id)}>
												<img src={DoneImg} alt="Concluir" />
											</DoneButton>
										</ContainerButtons>
									</>
								)}
							</TodoLi>
						))}
					</TodoUl>
				</TodoSection>
			</TodoMain>

			<Footer>
				<p>
					Desenvolvido por
					<a
						href="https://www.linkedin.com/in/danielmartins-frontend/"
						rel="noopener noreferrer"
						target="_blank"
					>
						Daniel Martins
					</a>
				</p>
			</Footer>
			<ToastContainerCustom />
		</>
	);
}

export default TodoList;
