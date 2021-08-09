export {default as tasksReducer, addTask, updateTask, deleteTask, addComment, updateComment, deleteComment} from './tasksSlice';
export type { ITask } from './types';
export { selectTasksForColumn } from './selectors';
