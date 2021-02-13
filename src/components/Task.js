import React from "react";
import PropTypes from 'prop-types'


export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) {

  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === "TASK_CHECKED"}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input
          type="text"
          placeholder="Input title"
          value={title}
          readOnly={true}
        />
          </div>
          
      <div className="actions" onCLick={(e) => e.stopPorpagation()}>
        {state !== "TASK_ARCHIVED" && (
          //eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
}

const p = PropTypes;
Task.propTypes = {
    task: PropTypes.shape({
        id: p.string.isRequired,
        title: p.string.isRequired,
        state:p.string.isRequired
    }),
    onArchiveTask: p.func,
    onPinTask: p.func
}