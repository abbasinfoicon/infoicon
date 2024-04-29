'use client'
import React from 'react'

const ModalPopup = ({ }) => {
    const handleClose = () => {
        document.querySelector('.videoPopup').classList.remove('show');
        const modalBackdrop = document.querySelector('.modal-backdrop');
        if (modalBackdrop) {
            modalBackdrop.parentNode.removeChild(modalBackdrop);
        }
        document.body.classList.remove('modal-open');
    };

    return (
        <div className="modal fade videoPopup" id='videoPopup'>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="video-sec">
                            <button type="button" className="close" onClick={handleClose}>&times;</button>
                            <iframe width="250" height="150" data-toggle="tooltip" title="youtube"
                                src="https://www.youtube.com/embed/q5sURR9fvvk?showinfo=0"
                                data-original-title="Watch videos"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalPopup