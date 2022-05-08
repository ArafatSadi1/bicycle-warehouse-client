import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Blogs = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col className="border shadow rounded p-3" lg={12}>
          <h3 className="text-center mb-3">
            Difference between javascript and nodejs?
          </h3>
          <p>
            1. JavaScript is a programming language, NodeJS is a Javascript
            runtime environment.
            <br />
            2. Javascript can only be run in the browsers, NodeJS can run
            Javascript outside the browser.
            <br />
            3. Javascript mainly using for any client-side activity for a web
            application, NodeJS used on the server-side.
            <br />
            4. Javascript is capable enough to add HTML and play with the DOM,
            Nodejs does not have capability to add HTML tags.
            <br />
            5. JavaScript running any engine like Spider monkey (FireFox),
            JavaScript Core (Safari), V8 (Google Chrome), Node JS only run in a
            V8 engine.
          </p>
        </Col>
        <Col className="border shadow rounded p-3 my-5" lg={12}>
          <h3 className="text-center mb-3">
            When should you use nodejs and when should you use mongodb?
          </h3>
          <h4>When i Should use nodeJS:</h4>
          <p>
            1. Node.js runs on a single thread which makes it easier to handle
            up to 10,000 concurrent requests.
            <br />
            2. Due to the event-driven and asynchronous nature, Node.js is good
            at building real-time applications like messaging, notifications
            delivery, live streaming and collaboration tools.
            <br />
            3. Node.js allows you to use JavaScript for back-end development,
            and as a result, it becomes easy to match back-end functions to
            front-end functions.
            <br />
            4. Node.js is built in JSON support. JSON is the backbone for most
            HTTP communication, and while most other backend languages need
            special libraries to parse JSON, Node.js does it out of the box.
            <br />
            5. Node.js is also an excellent choice for developers creating
            microservice environments.
          </p>
          <h4>when should you use mongodb:</h4>
          <p>
            1. MongoDB facilitate to store database in json(javascript object
            notation) (or simply when data in form of key value pair) this is
            very fast and efficient so you should use it when you have key value
            pair to store(json data)
            <br />
            2. Real-time analytics and high-speed logging, caching, and high
            scalability.
            <br />
            3. If we talk about applications where MongoDB is used, they mainly
            focus on fast development because you can change everything at any
            time. You don't have to worry about the strict format of the
            document.
            <br />
            4. From the MongoDB point of view, the advantage is that we have
            flexible JSON format documents, and for some tasks and some
            developers, this is convenient.
          </p>
        </Col>
        <Col className="border shadow rounded p-3" lg={12}>
          <h3 className="text-center mb-3">
            Differences between SQL and NoSQL databases?
          </h3>
          <p>
            1. SQL databases are relational, NoSQL databases are non-relational.
            <br />
            2. SQL databases have fixed or static or predefined schema, NoSQL
            database have dynamic schema.
            <br />
            3. SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable.
            <br />
            4. SQL databases are best suited for complex queries, NoSQL
            databases are not so good for complex queries.
            <br />
            5. SQL databases are table-based, while NoSQL databases are
            document, key-value, graph, or wide-column stores.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Blogs;
