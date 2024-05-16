import { gql } from "@apollo/client";

const ADD_TASK = gql`
    mutation addTask(
        $name: String!
        $description: String!
        $timestamps: String!
        $endingtimestamps: String!
        $status: TaskStatus!
        $driverId: ID!
    ) {
        addTask(
            name: $name
            description: $description
            timestamps: $timestamps
            endingtimestamps: $endingtimestamps
            status: $status
            driverId: $driverId
        ) {
            id
            name 
            description
            timestamps
            endingtimestamps
            status
            driver {
                id
                name
                email
                phone
            }
        }
    }
`

const UPDATE_TASK = gql`
    mutation updateTask(
        $id: ID!
        $name: String!
        $description: String!
        $timestamps: String!
        $endingtimestamps: String!
        $status: TaskStatusUpdate!
    ) {
        updateTask(
            id: $id
            name: $name
            description: $description
            timestamps: $timestamps
            endingtimestamps: $endingtimestamps
            status: $status
        ) {
            id
            name
            description
            timestamps
            endingtimestamps
            status
            driver {
                id
                name
                email
                phone
            }
        }
    }
`

const DELETE_TASK = gql`
    mutation deleteTask($id: ID!) {
        deleteTask(id: $id) {
            id
        }
    }
`

export {
    ADD_TASK,
    DELETE_TASK,
    UPDATE_TASK
}