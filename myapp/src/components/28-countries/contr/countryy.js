import React from 'react'
import { Button } from 'react-bootstrap';

const Countryy = ({index, data, onRemoveCountryy}) => {
  const {flags, name, population, capital, ccn3} = data;

  return (
    <tr>
      <td>{index+1}</td>
      <td> <img src={flags.png} className="img-fluid" width="100"></img> </td>
      <td>{name.common}</td>
      <td>{population}</td>
      <td>{capital}</td>
      <td> <Button variant="danger" onClick={()=>onRemoveCountryy(ccn3)}></Button> Sil</td>
    </tr>
  )
}

export default Countryy