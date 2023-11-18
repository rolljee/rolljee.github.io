import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import ListGroup from "react-bootstrap/ListGroup";
import listGroupItem from "../components/ListGroupItem";
import blogs from "./blogs.json";

function Blog() {
  const [blogItems, setBlogItems] = useState(blogs);
  const [search, setSearch] = useState("");

  function onSearchChange(event) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    const filteredBlogs = blogs.filter((blog) => {
      return blog.tags.some((tag) => tag.includes(search));
    });

    setBlogItems(filteredBlogs);
  }, [search]);

  return (
    <Row>
      <Form>
        <Form.Group>
          <Form.Control
            onChange={onSearchChange}
            type="text"
            placeholder="Search for tags"
          />
        </Form.Group>
      </Form>
      <Col>
        <ListGroup variant="flush">
          {blogItems.map((item) => listGroupItem(item))}
        </ListGroup>
      </Col>
    </Row>
  );
}

export default Blog;
