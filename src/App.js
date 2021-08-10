import './App.css';
import Home from './pages';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { useDarkMode } from './components/DarkMode/UseDarkMode';
import { GlobalStyle, lightTheme, darkTheme } from './components/DarkMode/GlobalStyle';

function App() {

  const Container = styled.div`
    width: 100%;
  `
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <Container>
        <GlobalStyle />
        <Router>
          <Home theme={theme} toggleTheme={toggleTheme} />
        </Router>
      </Container>
    </ThemeProvider>
    
  );
}

export default App;
