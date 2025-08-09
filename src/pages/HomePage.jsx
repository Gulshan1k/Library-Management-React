import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section d-flex align-items-center">
        <Container className="text-center text-white">
          <h1 className="display-4">Welcome to Library Manager</h1>
          <p className="lead">
            Manage your authors, books, and categories seamlessly.
          </p>
          <Button as={Link} to="/books" size="lg" variant="light">
            Browse Books
          </Button>
        </Container>
      </div>

      {/* Feature Cards */}
      <Container className="py-5">
        <Row className="text-center mb-4">
          <Col>
            <h2>Features</h2>
            <p>Explore the core modules of your library</p>
          </Col>
        </Row>

        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <i className="bi bi-journal-bookmark text-primary" style={{ fontSize: '2rem' }} />
                <Card.Title className="mt-3">Authors</Card.Title>
                <Card.Text className="flex-grow-1">
                  Add, view, and manage your authors.
                </Card.Text>
                <Button as={Link} to="/authors" variant="primary">
                  Go to Authors
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <i className="bi bi-book text-success" style={{ fontSize: '2rem' }} />
                <Card.Title className="mt-3">Books</Card.Title>
                <Card.Text className="flex-grow-1">
                  Browse, add, or update book entries.
                </Card.Text>
                <Button as={Link} to="/books" variant="success">
                  View Books
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <i className="bi bi-tags text-warning" style={{ fontSize: '2rem' }} />
                <Card.Title className="mt-3">Categories</Card.Title>
                <Card.Text className="flex-grow-1">
                  Organize books by categories.
                </Card.Text>
                <Button as={Link} to="/categories" variant="warning">
                  Manage Categories
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
