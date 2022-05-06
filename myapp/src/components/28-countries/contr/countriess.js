import axios from 'axios';
import React,{useState, useEffect} from 'react'
import { Container, Spinner, Table } from 'react-bootstrap'
import Countryy from './countryy';

const Countriess = () => {
    const [countriess, setCountriess] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => {
            axios("https://restcountries.com/v3.1/all").then((resp)=>{
            setCountriess(resp.data);
            setLoading(false);
        });
      }, 5000);
         }, []);
    
         const removeCountryy =(id)=>{
           const arr = countriess.filter((item)=> item.ccn3 =! id);
           setCountriess(arr);
         }

  




  return (
   <Container className="mt-5">
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Bayrak</th>
      <th>Ülke</th>
      <th>Nufus</th>
      <th>Başkent</th>
      <th>Durum</th>
    </tr>
  </thead>
  <tbody>
    <tr className={loading ? "d-block" : "d-none"}>
      <td colSpan={6}>
        <Spinner animation="border" size="sm" /> Loading...

      </td>

    </tr>
      {
          countriess.map((countryy, index)=>(
            <Countryy key={index} data={countryy} index={index} onRemoveCountryy={removeCountryy}/>

          ))}
    

  </tbody>
</Table>
   </Container>
  )
}

export default Countriess