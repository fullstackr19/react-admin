import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const PostEdit = (props) => {
    return (
        <Edit title="Create Posts" {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="title" />
                <TextInput multiline source="body" />
                <DateInput source="publishedAt" label="published" />
            </SimpleForm>
        </Edit>
    )
}

export default PostEdit
