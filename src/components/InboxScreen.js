import React from "react";
import ProtoTypes from "prop-types";
import { connect } from "react-redux";

import TaskList from "./TaskList";

export function PureInboxScreen({ error }) {
  if (error) {
    return (
      <div className="page list-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page list-show">
      <nav>
        <h1 className="title-page">
          <div className="title-wrapper">Taskbox</div>
        </h1>
      </nav>
      <TaskList />
    </div>
  );
}

const p = ProtoTypes;
PureInboxScreen.protoTypes = {
  error: p.string,
};
PureInboxScreen.defaultProps = {
  error: null,
};

export default connect(({ error }) => ({ error }))(PureInboxScreen);
