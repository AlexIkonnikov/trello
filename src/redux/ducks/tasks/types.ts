export interface ITask {
    id: string
    column_id: string
    author: string
    title: string
    description: string
    comments: Array<IComment>
}

export interface IComment {
    id: string
    task_id: string
    author: string
    text: string
}

