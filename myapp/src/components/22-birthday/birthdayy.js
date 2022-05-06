
import React ,{useState,useEffect} from 'react'
import Personn from './personn';
import data from "../../assets/data/persons.json";
import { Button } from 'react-bootstrap';


const Birthdayy = () => {
    const [people, setPeople] = useState(data);
    console.log("merhaba");

 

  return (
      <div>
          <h1>Bugün Doğanlar</h1>
          <p>bugün doğan {people.length} kişi bulundu.</p>

          {people.map(item=><Personn name={item.name} age={item.age} image={item.image} key={item.id}/>)}
          
        <Button variant='danger' onClick={()=>setPeople([])}>Temizle</Button>




      </div>
    


  )
}

export default Birthdayy