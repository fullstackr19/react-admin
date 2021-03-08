import React from 'react'
import { Create, SimpleForm, TextInput, EmailField } from 'react-admin'

const UserCreate = (props) => {
    return (
        <Create title="Create Users" {...props}>
            <SimpleForm>
                <TextInput source="name" />
                <EmailField source="email" />
            </SimpleForm>
        </Create>
    )
}

export default UserCreate
