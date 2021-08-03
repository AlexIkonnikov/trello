import React, { FC } from 'react';
import { Button } from '../../ui/Button';
import { Form as CustomForm } from '../../ui/Form';
import { Textarea } from '../../ui/Textarea';
import { Form, Field, FormProps } from 'react-final-form';
import { FormApi } from 'final-form';

interface TextFormProps {
    submit: (title: string) => void;
    buttonText: string;
    inputPlaceholder: string;
}

const TextForm: FC<TextFormProps> = ({ submit, inputPlaceholder, buttonText }) => {
    const onSubmitForm = (values: FormProps, form: FormApi<FormProps>): void => {
        submit(values.text);
        form.reset();
    };

    return (
        <Form onSubmit={onSubmitForm}>
            {({ handleSubmit, pristine }) => (
                <CustomForm onSubmit={handleSubmit}>
                    <Field name="text">{({ input }) => <Textarea placeholder={inputPlaceholder} {...input} />}</Field>
                    <Button text={buttonText} type="submit" disabled={pristine} css="margin-left: auto;" />
                </CustomForm>
            )}
        </Form>
    );
};

export default TextForm;
