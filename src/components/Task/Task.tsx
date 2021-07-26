import React from 'react';

export interface ITask {
    author: string
    title: string
    description?: string
    comments?: Array<string>
};

type Props = {
  task: ITask,
  showPopup: () => void
}

function Task({task, showPopup}: Props): JSX.Element {
    return (
        <React.Fragment>
            <div className="card mb-3" onClick={() => {showPopup()}}>
                <div className="card-body p-2">
                    <h5 className="card-title">{task.author}</h5>
                    <p className="card-title">{task.title}</p>
                    {task.comments?.length && <div>Comments: {task.comments.length}</div>}
                </div>
            </div>
        </React.Fragment>
    );
}
export default Task;
