import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import TodoList from './pages/TodoList/';
import { GlobalStyles } from './styles/GlobalStyles';
import { darkTheme, lightTheme } from './styles/theme';


function Main() {
	const [ darkMode, setDarkMode ] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem('darkMode')
		if (savedTheme) {
			setDarkMode(JSON.parse(savedTheme))
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('darkMode', JSON.stringify(darkMode))
	}, [darkMode]);

	return (
		<StrictMode>
			<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
				<GlobalStyles />
				<TodoList darkMode={darkMode} setDarkMode={setDarkMode} />
			</ThemeProvider>
	   	</StrictMode>
	)
}


createRoot(document.getElementById("root")).render(<Main />);