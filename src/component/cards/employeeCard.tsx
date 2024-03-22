import React from "react";

interface EmployeeCardData{
    thumbnail:string,
    employeeId:string,
    employeeName:string,
    employeeRole:string
}

function EmployeeCard(props:EmployeeCardData){
    const maxWidthStyle:React.CSSProperties={
        maxWidth:'540px'
    }
    const maxHeightStyle:React.CSSProperties={
        height:'100%'
    }

    return(
        <div className="card mb-3" style={maxWidthStyle}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.thumbnail} className="img-fluid rounded-start" alt={"profile pic"} style={maxHeightStyle}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.employeeId} </h5>
                        <p className="card-text">{props.employeeName}</p>
                        <p className="card-text"><small className="text-muted">{props.employeeRole}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default EmployeeCard;