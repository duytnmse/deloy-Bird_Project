import React from 'react'

const NotificationCard = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Thông báo</h4>
            </div>
            <div className="card-body">
                <ul className="widget-timline list-unstyled">
                    <li>
                        <div className="timeline-dots border-success" />
                        <h4 className="mb-1">Giai đoạn chim non</h4>
                        <p className="mb-0">12 aout 2022</p>
                    </li>
                    <li>
                        <div className="timeline-dots border-danger" />
                        <h4 className="mb-1">Giai đoạn chim chuyền</h4>
                        <p className="mb-0">12 aout 2022</p>
                    </li>
                    <li>
                        <div className="timeline-dots border-primary" />
                        <h4 className="mb-1">Giai đoạn trưởng thành</h4>
                        <p className="mb-0">12 aout 2022</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NotificationCard