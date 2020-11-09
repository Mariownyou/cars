import './App.css';
import { Box, MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { yellow } from '@material-ui/core/colors/'
import Navbar from './components/ui/Navbar'
import Content from './components/ui/Content'

const theme = createMuiTheme({
  palette: {
    primary: yellow
  }
})

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Box>
        <Navbar />
        <Content />
     </Box>
    </MuiThemeProvider>
  );
}

export default App;
