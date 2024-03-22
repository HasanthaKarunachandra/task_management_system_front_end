function Project(){

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="form-group">
                            <label htmlFor="projectId">project Id</label>
                            <input  type='text' className='form-control' id='projectId'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="form-group">
                            <label htmlFor="projectName">Project Name</label>
                            <input  type='text' className='form-control' id='projectName'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="form-group">
                            <label htmlFor="employeeId">Employee Id
                                <input  type='text' className='form-control' id='employeeId'/>

                            </label>
                        </div>
                    </div>
                </div>
                <br/>


                <div className="row">
                    <div className="col-12">
                        <button  className='btn btn-primary col-12'>Save Project</button>
                    </div>
                </div>
            </div>

            <hr/>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form className='col-12'>
                            <input type='search' className='form-control' placeholder='Search Project here'/>
                        </form>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-12">
                        <table className='table table-hover table-bordered'>
                            <thead>
                            <tr>
                                <th>Project Id</th>
                                <th>Project Name</th>
                                <th>Assign Employees</th>
                                <th>Delete Option</th>
                                <th>Update Option</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>P-01</td>
                                <td>Project No 01</td>
                                <td>EMP-01, EMP-02</td>
                                <td>
                                    <button className='btn btn-sm btn-outline-danger'>Delete</button>
                                </td>
                                <td>
                                    <button className='btn btn-sm btn-outline-success'>Update</button>
                                </td>
                            </tr>

                            <tr>
                                <td>P-02</td>
                                <td>Project No 02</td>
                                <td>EMP-01, EMP-03</td>
                                <td>
                                    <button className='btn btn-sm btn-outline-danger'>Delete</button>
                                </td>
                                <td>
                                    <button className='btn btn-sm btn-outline-success'>Update</button>
                                </td>
                            </tr>

                            <tr>
                                <td>P-03</td>
                                <td>Project No 03</td>
                                <td>EMP-03, EMP-04</td>
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

export default Project;