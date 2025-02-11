import React from 'react'

export default function temp() {
    return (
        <div>
            <div className="d-grid gap-2 col-lg-4 col-5">
                <Time title={"مدت زمان ویدیو"} field={'time'} time={values.time} setFieldValue={setFieldValue}/>
                <Time title={"زمان پایان تیتراژ شروع"} field={'endTitrationStarTime'} time={values.endTitrationStarTime} setFieldValue={setFieldValue}/>
                <Time title={"زمان شروع تیتراژ پایان"} field={'startTitrationEndTime'} time={values.startTitrationEndTime} setFieldValue={setFieldValue}/>
            </div>
            <div className="d-flex">
                <button className="btn btn-primary col-3">کپی لینک ویدیو</button>
                <input className="col-9 form-control w-75" style={{background:"#e6ebf0"}} placeholder="لینک خود را در این قسمت وارد کنید"/>
            </div>
        </div>
        
    )
}
