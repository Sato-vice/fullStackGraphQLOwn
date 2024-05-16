import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container mt-5'>
      <h1>
        Your Helper with Your road tasks!
      </h1>



      <div className='margin-medium d-flex flex-row gap-5 justify-content-around'>
        <div className='card p-3 w-50'>
          <h2>Lorem, ipsum.</h2>
          <p className='fw-bold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eum unde! Suscipit, inventore earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eum unde! Suscipit, inventore earum.
          </p>
          <button className='btn btn-info w-50'>Link</button>

        </div>
        <div className='card p-3 w-50'>
          <h2>Lorem, ipsum.</h2>
          <p className='fw-bold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eum unde! Suscipit, inventore earum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, eum unde! Suscipit, inventore earum.
          </p>
          <button className='btn btn-success w-50'>Link</button>
        </div>
      </div>


      <div className='container margin'>
        <h2>
          If You are ready to begin,then click one of the buttons below.
        </h2>
        <div className='d-flex flex-row gap-3'>
          <button className='btn btn-primary'>
            <Link to="drivers" className='text-decoration-none text-white'>Drivers</Link>
          </button>
          <button className='btn btn-secondary'>
            <Link to="tasks" className='text-decoration-none text-white'>Tasks</Link>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Home