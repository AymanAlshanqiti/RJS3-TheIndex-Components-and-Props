import React, { Component } from "react";
import AuthorCard from "./AuthorCard";

class AuthorList extends Component {
  render() {
    let authorRows = this.props.authorsData.map(author => (
      <AuthorCard person={author} />
    ));
    console.log(authorRows);
    return <div className="row">{authorRows}</div>;
  }
}

export default AuthorList;
