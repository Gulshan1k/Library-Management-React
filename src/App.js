import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import AuthorsPage from './pages/AuthorsPage';
import BooksPage from './pages/BooksPage';
import BookDetailPage from './pages/BookDetailPage';
import CategoriesPage from './pages/CategoriesPage';
import HomePage from './pages/HomePage';


export default function App() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand>Library Manager</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="me-auto">
              <NavLink to="/authors" className="nav-link">
                Authors
              </NavLink>
              <NavLink to="/books" className="nav-link">
                Books
              </NavLink>
              <NavLink to="/categories" className="nav-link">
                Categories
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="my-4">
        <Routes>
                <Route path="/" element={<HomePage />} />

          <Route path="/authors" element={<AuthorsPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/books/:id" element={<BookDetailPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
      </Container>

      <footer className="bg-light text-center py-3 mt-auto">
        © 2025 Library Management
      </footer>
    </BrowserRouter>
  );
}
