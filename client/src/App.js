import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeList from './components/EmployeeList';
import Navbar from './components/Navbar';
import Store from './redux/store';



function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" Component={EmployeeList} />
          </Routes>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
