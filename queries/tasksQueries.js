import { gql } from "@apollo/client";

const GET_TASKS = gql`
    query getTasks{
        tasks {
            id
            name
            description
            timestamps
            endingtimestamps
            status
        }
    }
`

const GET_TASK = gql`
    query getProject($id: ID!) {
        task(id: $id) {
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

export {
    GET_TASKS,
    GET_TASK
}