import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GET_TASK } from "../queries/tasksQueries"
import { Link } from "react-router-dom"
import DriverInfo from "./DriverInfo"
import DeleteTaskButton from "./DeleteTaskButton"
import UpdateTaskForm from "./UpdateTaskForm"

const TaskPage = () => {
    const { id } = useParams()

    const { loading, error, data } = useQuery(GET_TASK, {
        variables: { id }
    })

    if (loading) return <h2>Loading...</h2>
    if (error) return <h2>Something went wrong.Please try again.</h2>

    return (
        <>
            {!loading && !error && (
                <div className='container border border-3 rounded border-primary p-3 mt-5'>
                    <h4>
                        Name:
                        <br />
                        <span className='fw-bolder'>{data.task.name}.</span>

                    </h4>
                    <div className="width-container">
                        <h4>
                            Description:
                            <br />
                            <span className='fw-bolder'>
                                {data.task.description}
                            </span>
                        </h4>
                    </div>

                    <h4>The durations of the trip:
                        <br />
                        <span className='fw-bolder'>{data.task.timestamps}-{data.task.endingtimestamps}.</span>
                    </h4>
                    <h4>The status of the trip:
                        <br />
                        <span className='fw-bolder'>{data.task.status}.</span>
                    </h4>

                    <DriverInfo driver={data.task.driver} />
                    <UpdateTaskForm task={data.task} />
                    <DeleteTaskButton taskId={data.task.id} />
                    <button className='btn btn-secondary fw-bolder'>
                        <Link to="/tasks" className="text-decoration-none text-white">Go Back</Link>
                    </button>
                </div>
            )}
        </>
    )
}

export default TaskPage