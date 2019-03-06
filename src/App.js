import React, { Component } from "react";
import authors from "./data";

import Sidebar from "./Sidebar.js";
import AuthorList from "./AuthorList.js";

class App extends Component {
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">
            <div className="authors">
              <h3>Authors</h3>

              <AuthorList authorsData={authors} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
