'use client'
import React from 'react'

const VideoFooter = () => {
    const handleClick = () => {
        document.querySelector('.videoPopup').classList.add('show');
        const modalBackdrop = document.createElement('div');
        modalBackdrop.classList.add('modal-backdrop');
        document.body.appendChild(modalBackdrop);
        document.body.classList.add('modal-open');
    };

    return (
        <div className="home-about-video1 d-flex justify-content-center mb-0">
            <div className="video-btn align-self-center">
                <button className="btn-play1" onClick={handleClick}>
                    <i className="fas fa-video"></i>
                </button>
            </div>
        </div>
    )
}

export default VideoFooter