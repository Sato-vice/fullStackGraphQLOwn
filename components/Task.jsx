import { Link } from "react-router-dom"

const Task = ({ task }) => {


    return (
        <div className='container border border-3 rounded border-primary p-3 mb-3'>
            <h4>
                Name:
                <br />
                <span className='fw-bolder'>{task.name}.</span>
                
            </h4>
            <h4>
                Description:
                <br />
                <span className='fw-bolder'>
                    {task.description.substr(0, 20)}...
                </span>

            </h4>
            <h4>The durations of the trip:
                <br />
                <span className='fw-bolder'>{task.timestamps}-{task.endingtimestamps}.</span>
            </h4>
            <h4>The status of the trip:
                <br />
                <span className='fw-bolder'>{task.status}.</span>
            </h4>
            <button className='btn btn-secondary fw-bolder'>
                <Link to={`/task/${task.id}`} className="text-decoration-none text-white">View</Link>
            </button>
        </div>
    )
}

export default Task