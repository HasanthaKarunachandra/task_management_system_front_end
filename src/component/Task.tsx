function Task(){
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="form-group">
                            <label htmlFor="taskId">Task Id</label>
                            <input  type='text' className='form-control' id='taskId'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="form-group">
                            <label htmlFor="taskName">Task Name</label>
                            <input  type='text' className='form-control' id='taskName'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="form-group">
                            <label htmlFor="projectId">Project Id
                                <input  type='text' className='form-control' id='projectId'/>

                            </label>
                        </div>
                    </div>
                </div>
                <br/>


                <div className="row">
                    <div className="col-12">
                        <button  className='btn btn-primary col-12'>Save Task</button>
                    </div>
                </div>
            </div>

            <hr/>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form className='col-12'>
                            <input type='search' className='form-control' placeholder='Search Task here'/>
                        </form>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-12">
                        <table className='table table-hover table-bordered'>
                            <thead>
                            <tr>
                                <th>Task Id</th>
                                <th>Task Name</th>
                                <th>Project Id</th>
                                <th>Delete Option</th>
                                <th>Update Option</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>T-01</td>
                                <td>Task No 01</td>
                                <td>P-01</td>
                                <td>
                                    <button className='btn btn-sm btn-outline-danger'>Delete</button>
                                </td>
                                <td>
                                    <button className='btn btn-sm btn-outline-success'>Update</button>
                                </td>
                            </tr>

                            <tr>
                                <td>T-02</td>
                                <td>Task No 02</td>
                                <td>P-01</td>
                                <td>
                                    <button className='btn btn-sm btn-outline-danger'>Delete</button>
                                </td>
                                <td>
                                    <button className='btn btn-sm btn-outline-success'>Update</button>
                                </td>
                            </tr>

                            <tr>
                                <td>T-03</td>
                                <td>Task No 03</td>
                                <td>P-02</td>
                                <td>
                                    <button className='btn btn-sm btn-outline-danger'>Delete</button>
                                </td>
                                <td>
                                    <button className='btn btn-sm btn-outline-success'>Update</button>
                                </td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <br/>
        </>
    )
}

export default Task;