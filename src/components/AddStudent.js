import React, { useState } from 'react';
import { fs, } from '../config/config';
// import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from '@firebase/firestore';
// import { Link } from 'react-router-dom';

const AddStudent = () => {
  const [name, setName] = useState('');
  const [branch, setBranch] = useState('');
  const [enroll, setEnroll] = useState('');

  const [successMsg, setSuccessMsg] = useState('');
  const [uploadError, setUploadError] = useState('');


  const handleAddStudent = (e) => {
    e.preventDefault();
    //   console.log(title,category,price);
    //   console.log(image);

    addDoc(collection(fs, 'Students'), {
        Name: name,
        Branch: branch,
        Enrollment_Number: Number(enroll),
      })
        .then(() => {
          setSuccessMsg('Student added successfuly');
          setName('');
          setBranch('');
          setEnroll('');
          setUploadError('');
          setTimeout(() => {
            setSuccessMsg('');
          }, 3000);
        })
        .catch((error) => setUploadError(error.message));
  };

  return (
    <>
      <div className='container'>
        <br></br>
        <br></br>
        <h1>Add Student</h1>
        <hr></hr>
        {successMsg && (
          <>
            <div className='success-msg'>{successMsg}</div>
            <br></br>
          </>
        )}
        <form
          autoComplete='off'
          className='form-group'
          onSubmit={handleAddStudent}
        >
          <label>Student Name</label>
          <input
            type='text'
            className='form-control'
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
          <br />
          <br />

          <label for='inputState' class='form-label'>
            Branch
          </label>
          <select
            id='inputState'
            class='form-select'
            onChange={(e) => {
              setBranch(e.target.value);
            }}
            value={branch}
            required
          >
            <option selected>Choose Branch</option>
            <option>CSE</option>
            <option>Civil</option>
            <option>Mechanical</option>
            <option>Electrical</option>
          </select>
          <br />
          <br />
          <label>Enrollment Number</label>
          <input
            type='number'
            className='form-control'
            required
            onChange={(e) => setEnroll(e.target.value)}
            value={enroll}
          ></input>
          <br />
          <br />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button type='submit' className='btn btn-success btn-md'>
              SUBMIT
            </button>
          </div>
        </form>
        {uploadError && (
          <>
            <br></br>
            <div className='error-msg'>{uploadError}</div>
          </>
        )}
      </div>
      {/* <div className='container mt-2'>
        <div className='table-responsive'>
          <table class='table table-bordered border-dark table-hover'>
            <thead className="bg-success text-light">
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Product</th>
                <th scope='col'>Price / Kg</th>
                <th scope='col'> Image </th>
              </tr>
            </thead>
            <tbody>
              {products.map((obj,index) => {
                return (
                  <tr className="tbl-data">
                    <th scope='row'>{index + 1}</th>
                    <td>{obj.title}</td>
                    <td>{obj.price}</td>
                    <td><Link to={obj.downloadURL} target="_blank" rel="noopener noreferrer">image link</Link></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div> */}
    </>
  );
};

export default AddStudent;