import { collection, getDocs } from 'firebase/firestore';
import React,{useEffect, useState} from 'react'
// import { Link } from 'react-router-dom';
import { fs } from '../config/config';

const Home = () => {

    //state of products
  const [products, setProducts] = useState([]);

  //getting Products function
  const getProducts = async () => {
    const productsArray = [];
    const querySnapshot = await getDocs(collection(fs, 'Students'));
    querySnapshot.forEach((doc) => {
      var data = doc.data();
      data.ID = doc.id;
      productsArray.push({
        ...data,
      });
      if (productsArray.length === querySnapshot.docs.length) {
        setProducts(productsArray);
      }
      //   console.log();
    });
  };

  console.log(products)
  useEffect(() => {
    getProducts();
  }, []);
  return (
      <>
    {products.length > 0 && 
    <div className='container mt-2'>
        <div className='table-responsive'>
          <table class='table table-bordered border-dark table-hover'>
            <thead className="bg-success text-light">
              <tr>
                <th scope='col'>No.</th>
                <th scope='col'>Name</th>
                <th scope='col'>Enrollment Number</th>
                <th scope='col'>Branch</th>
                <th scope='col'>Present</th>
              </tr>
            </thead>
            <tbody>
              {products.map((obj,index) => {
                return (
                  <tr className="tbl-data">
                    <th scope='row'>{index + 1}</th>
                    <td>{obj.Name}</td>
                    <td>{obj.Enrollment_Number}</td>
                    <td>{obj.Branch}</td>
                    <td><input type="checkbox" />  Present</td>
                    
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>}
      </>
  )
}

export default Home