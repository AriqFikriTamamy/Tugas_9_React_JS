import React, {Component} from "react";
import {Breadcrumb} from "react-bootstrap";

class Breadcrumbs extends Component {
  render(){
    return(
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/">Liga Inggris</Breadcrumb.Item>
        <Breadcrumb.Item href="/" active>Transfer Pemain</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}

export default Breadcrumbs;
