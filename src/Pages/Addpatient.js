import React, {useState} from 'react'
import AddHospitalModal from '../Components/Modals/AddHospitalModal'
import DatePicker from 'react-date-picker';


export default function AddPaitent() {
  const [show, setShow] = useState(false)
  const [value, onChange] = useState(new Date());
  return (
    <div className='container-fluid'>
      <h4 className='py-3'>Add patient</h4>
      <div className='hs-card card px-4 py-4 mb-4'>
          <form>
            <div className='d-flex justify-content-between mb-4'>
              <div></div>
              <div className=''>
                <button className='btn btn-primary' onClick={() => setShow(true)}>
                <i class="fas fa-plus-circle me-2"></i>Add New Hospital
                </button>
              </div>
            </div>
            <div className='mb-3'>
              <div className='row'>
                <div className='col-md-8'>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>select Hospital</option>
                    <option value="1">Hospital One</option>
                    <option value="2">Hospital Two</option>
                    <option value="3">Hospital Three</option>
                  </select>
                </div>
                <div className='col-md-4'>
                  <DatePicker className="date-styling" onChange={onChange} value={value} />
                </div>
              </div>
            </div>
            <div className='mb-3'>
              <div className='row'>
              <div className='col-md-8'>
                  <select class="form-select mb-3" aria-label="Default select example">
                    <option selected>select Paitent</option>
                    <option value="1">Paitent One</option>
                    <option value="2">Paitent Two</option>
                    <option value="3">Paitent Three</option>
                  </select>
                </div>
                <div className='col-md-8'>
                  <select class="form-select mb-3" aria-label="Default select example">
                    <option selected>select Paitent</option>
                    <option value="1">Paitent One</option>
                    <option value="2">Paitent Two</option>
                    <option value="3">Paitent Three</option>
                  </select>
                </div>
                <div className='col-md-8'>
                  <select class="form-select mb-3" aria-label="Default select example">
                    <option selected>select Paitent</option>
                    <option value="1">Paitent One</option>
                    <option value="2">Paitent Two</option>
                    <option value="3">Paitent Three</option>
                  </select>
                </div>
                <div className='col-md-4'>
                  <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#AddPaitent">
                    <i class="fas fa-plus-circle me-2"></i>Add More
                  </button>
                </div>
              </div>
            </div>
            <AddHospitalModal onClose={() => setShow(false)} show={show} />

            <div className='mb-4'>
              <h4>Hospital Information</h4>
              <div className='row'>
                <div className='col-md-12'>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Hospital Name</label>
                    <input type="tect" className="form-control" id="" aria-describedby="  "/>
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Hospital Name</label>
                    <input type="tect" className="form-control" id="" aria-describedby="  "/>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Place</label>
                    <input type="tect" className="form-control" id="" aria-describedby="  "/>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Policy Number</label>
                    <input type="tect" className="form-control" id="" aria-describedby="  "/>
                  </div>
                </div>
              </div>
            </div>

            <div className='mb-4'>
              <h4>Paitent Information</h4>
              <div className='row'>
                <div className='col-md-12'>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Paitent Name</label>
                    <input type="tect" className="form-control" id="" aria-describedby="  "/>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Date of birth</label>
                    <input type="tect" className="form-control" id="" aria-describedby="  "/>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Phone no.</label>
                    <input type="tect" className="form-control" id="" aria-describedby="  "/>
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Address</label>
                    <input type="tect" className="form-control" id="" aria-describedby="  "/>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">City</label>
                    <input type="tect" className="form-control" id="" aria-describedby="  "/>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">this.state.</label>
                    <input type="tect" className="form-control" id="" aria-describedby="  "/>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Zip</label>
                    <input type="tect" className="form-control" id="" aria-describedby="  "/>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="tect" className="form-control" id="" aria-describedby="  "/>
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
    </div>
  )
}
