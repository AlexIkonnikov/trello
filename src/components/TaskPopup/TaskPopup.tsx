import React from 'react';
import { Overlay } from './../../utils/Overlay';
import { Form } from './../../utils/Form';

interface Props {
    name: string;
}

function TaskPopup({ name }: Props): JSX.Element {
    return (
        <Overlay>
            <Form>
                <div className="mb-3">
                    <input type="text" placeholder={name} readOnly={true} className="form-control" />
                </div>
                <div className="mb-3">
                    <input type="text" placeholder="Title" className="form-control" />
                </div>
                <div className="mb-3">
                    <input type="text" placeholder="Author" className="form-control" />
                </div>
                <div className="mb-3">
                    <input type="text" placeholder="Description" className="form-control" />
                </div>
                <button className="btn btn-primary" type="submit">
                    Send
                </button>
            </Form>
        </Overlay>
    );
}

export default TaskPopup;
