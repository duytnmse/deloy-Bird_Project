'use client'

import Link from 'next/link';
import React, { useState } from 'react'

const CageDiagramItem = ({ id, name, specialty, imageSrc, starReview, }) => {



    const crowIconsCount = starReview?.crowIcons || 0;
    const eggIconsCount = starReview?.eggIcons || 0;

    // Create an array of the specified length for crow and egg icons
    const crowIconsArray = Array.from({ length: crowIconsCount }, (_, index) => (
        <i key={index} className="fa fa-crow text-orange" />
    ));

    const eggIconsArray = Array.from({ length: eggIconsCount }, (_, index) => (
        <i key={index} className="fa fa-egg text-gray" />
    ));



    return (
        <div className="col-sm-6 col-lg-4">
            <Link href={`/cage/${id}`}>
                <div className="timeline-panel card p-4 mb-4">
                    <div className="media">
                        <img
                            alt="image"
                            src={imageSrc}
                        />
                    </div>
                    <div className="media-body">
                        <a href="#">
                            <h4 className="mb-2">{name}</h4>
                        </a>
                        <p className="mb-2">{specialty}</p>
                        <div className="star-review">
                            {crowIconsArray}
                            {eggIconsArray}
                        </div>
                    </div>
                    <div className="btn-group-style-1">
                        <div className="btn-content">
                            <button
                                type="button"
                                className="btn btn-secondary dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <i className="fas fa-ellipsis-v" />
                            </button>
                            <div className="dropdown-menu">
                                <div className="form-content">
                                    <a href="#">
                                        <span className="ml-2">View Profile</span>
                                    </a>
                                    <a href="#">
                                        <span className="ml-2">Edit</span>
                                    </a>
                                    <a href="#">
                                        <span className="ml-2">Delete </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CageDiagramItem