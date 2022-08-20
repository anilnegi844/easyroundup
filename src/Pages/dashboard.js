import React, {useState} from 'react'
// import AddHospitalModal from '../Components/Modals/AddHospitalModal'

export default function Dashboard() {
  const [show, setShow] = useState(false)
  return (
    <div>
      <div className='container-fluid'>
        <h4 className='py-3'>Paitent List</h4>
        <div className='card px-4 py-5'>
          <div className='row'>
            <div className='col-md-3'>
              <div className='card'>
                <h5 className='bg-light px-3 py-2'>Patietn List</h5>
                <ul className='patient-list p-0'>
                  <li className='py-2 px-3'>
                    Patient Name One</li>
                  <li className='py-2 px-3'>Patient Name Two</li>
                  <li className='py-2 px-3'>Patient Name Three</li>
                  <li className='py-2 px-3'>Patient Name Four</li>
                </ul>
              </div>
            </div>
            <div className='col-md-9'>
              <div className=''>
                <div className='patient-diagnosis-table'>
                    <div className='table table-responsive'>
                      <table className='table table-bordered'>
                        <tbody>
                          <tr>
                            <th colSpan={2}></th>
                            <th colSpan={4} className="text-center">Diagnosis case</th>
                          </tr>
                          <tr>
                            <th>Name</th>
                            <th>CTP Code</th>
                            <th>D1</th>
                            <th>D2</th>
                            <th>D3</th>
                            <th>D4</th>
                          </tr>
                          <tr>
                            <td>Paitent 1</td>
                            <td>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>CTP</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                            <td>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>CTP</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                            <td>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>CTP</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                            <td>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>CTP</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                            <td>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>CTP</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>

                          </tr>
                          <tr>
                            <td>Paitent 1</td>
                            <td>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>CTP</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                            <td>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>CTP</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                            <td>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>CTP</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                            <td>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>CTP</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                            <td>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>CTP</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>

                          </tr>
                          <tr>
                            <td>Paitent 1</td>
                            <td>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>CTP</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                            <td>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>CTP</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                            <td>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>CTP</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                            <td>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>CTP</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                            <td>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>CTP</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>

                          </tr>
                          <tr>
                            <td>Paitent 1</td>
                            <td>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>CTP</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                            <td>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>CTP</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                            <td>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>CTP</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                            <td>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>CTP</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                            <td>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>CTP</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>

                          </tr>
                          <tr>
                            <td>Paitent 1</td>
                            <td>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>CTP</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                            <td>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>CTP</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                            <td>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>CTP</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                            <td>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>CTP</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>
                            <td>
                              <select class="form-select" aria-label="Default select example">
                                <option selected>CTP</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </td>

                          </tr>
                        </tbody>
                      </table>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
