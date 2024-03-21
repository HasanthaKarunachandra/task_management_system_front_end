import EmployeeCard from "./cards/employeeCard.tsx";

function Employee(){
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="form-group">
                            <label htmlFor="employeeNo">Employee No</label>
                            <input  type='text' className='form-control' id='employeeNo'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="form-group">
                            <label htmlFor="employeeName">Employee Name</label>
                            <input  type='text' className='form-control' id='employeeName'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="form-group">
                            <label htmlFor="employeeName">Employee Role</label>
                            <input  type='number' className='form-control' id='employeeName'/>
                        </div>
                    </div>
                </div>
                <br/>


                <div className="row">
                    <div className="col-12">
                        <button  className='btn btn-primary col-12'>Save Employee</button>
                    </div>
                </div>
            </div>

                <hr/>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form className='col-12'>
                            <input type='search' className='form-control' placeholder='Search Employee here'/>
                        </form>
                    </div>
                </div>
            </div>

            <br/>

            <div className="container">
                <div className="row">

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <EmployeeCard
                            thumbnail="https://i.pinimg.com/736x/22/65/77/2265772c5b5fe7d867ecb4c152b7d55e.jpg"
                            employeeId='01'
                            employeeName='Hasantha Karunachandra'
                            employeeRole='Software Engineer'
                        />
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <EmployeeCard
                            thumbnail="https://img.freepik.com/free-photo/beautiful-woman-with-phone-car-showroom_1303-21397.jpg?w=740&t=st=1706893035~exp=1706893635~hmac=13747523ab2f8ec690e67144beb0921d24981f5ccde796b15689dcc0ab3f1626"
                            employeeId='02'
                            employeeName='Kamal Jayasundara Arachchi'
                            employeeRole='Tech lead'
                        />
                    </div>

                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <EmployeeCard
                            thumbnail="https://img.freepik.com/free-photo/african-american-worker-writing-inventory-list-while-checking-stock-storage-room_637285-4716.jpg?w=740&t=st=1706893328~exp=1706893928~hmac=95bf7ef0d8a680b7a7ec67c4476534ca9771fc8089f9eac670cec92509ce28c0"
                            employeeId='03'
                            employeeName='Sanjaya Kumara Seevirathna'
                            employeeRole='Manager'
                        />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Employee;