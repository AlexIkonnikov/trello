export interface ITasks {
    tasks: Array<ITask>
}

export interface ITask {
    id: string
    column_id: string
    author: string
    title: string
    description: string
    comments: Array<IComment>
}

export interface IComment {
    id: string;
    author: string;
    text: string;
}

export interface ICommentPayload {
  task_id: string
  comment: IComment
}
