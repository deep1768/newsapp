import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div
          class="card bg-dark text-white"
          style={{ height: "200px", marginTop: "3px" }}
        >
          <div className="container">
            <p
              style={{
                textAlign: "center",
                paddingTop: "30px",
                fontSize: "26px",
              }}
            >
              <b> &copy; Copywrite by News On Time</b>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
