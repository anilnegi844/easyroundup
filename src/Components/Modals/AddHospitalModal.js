import React from 'react'

const AddHospitalModal = props=> {
    // if (!props.show) {
    //     return null
    // }
  return (
    <div>
        {/* <!-- Modal --> */}
        <div class="modal" onClick={props.onClose}>
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="AddHospitalLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onClick={props.onClose}>Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
export default AddHospitalModal