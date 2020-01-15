import React from "react";
import { Container } from "react-bootstrap";

export const Layout = props => (
  <div className="page_wrapper">
    <Container>{props.children}</Container>
  </div>
);
