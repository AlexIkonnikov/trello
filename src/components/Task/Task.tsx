import React from 'react';

export interface ITask {
    author: string;
    title: string;
    description: string;
}

function Task({ author, title, description }: ITask): JSX.Element {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h4 className="card-title">{author}</h4>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <button className="btn btn-primary">Show</button>
            </div>
        </div>
    );
}
export default Task;
