import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css';
import List from './components/List';
import MenuLeft from './components/MenuLeft';
import Header from './components/Header';

// Modal import
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
// Modal end


function App() {

  // Database address
  const baseUrl = 'http://localhost:3001/products'

  const onClickList = (id)=> {
    console.log(id)
    findItem(id)
    showModal()
  }

  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const findItem = (id)=> {
    let temp = data.filter(item => item.id === id);
    return setProduct(temp.[0])
  }
  // Modal END


  const [data, setData] = useState(null)
  const [error, setError] = useState(null);
  const [productType, setProductType] = useState('Metalowe Malow');
  const [newData, setNewData] = useState(null);
  const [product, setProduct] = useState(
    {
      "id": 1,
      "type": "socjalne",
      "name": "Sum 310 W",
      "code": "WSU 0101020102",
      "shortCode": 37796,
      "version": "lx",
      "price": 450,
      "dimmensionH": 1990,
      "dimmensionW": 600,
      "dimmensionD": 465,
      "weight": null,
      "lockType": "1-pkt.",
      "shelfs": "",
      "columns": "",
      "drawers": "",
      "info": "",
      "additional_info": "lorem ipsum",
      "picture": "lorem ipsum"
    }
  );

  const onMenuClick = (newProductType)=> {
      setProductType(newProductType);

      // tutaj wyfiltrowac tabele, aby przekazac tylko jeden rodzaj
      let tempData = data.filter(item => item.type === newProductType);
      return setNewData(tempData);
      }   

  const getData = ()=> {
    axios.get(baseUrl)
    .then((response)=>{
      setData(response.data)
      console.log('Fetch result:')
      console.log(response.data)
      // data test
      console.log('data:')
      console.log(data)
      if (!data) {
        console.log('data is null:')
        console.log(data)
        return data
      }
      return setData(response.data)
    })
    .catch ((error)=>{
      setError(error)
    })
  }

  useEffect(
    ()=>{
      getData(baseUrl)
    },
    []
  )

  return (
    <div className="App">
        <div>
          <Modal show={isOpen} onHide={hideModal} size='xl'>
          <Modal.Header>
          <Modal.Title>{product && product.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className='row'>
              <div className='col'><h5>Nazwa:</h5></div>
              <div className='col'><h5>Wersja:</h5></div>
              <div className='col'><h5>Kod:</h5></div>
              <div className='col'><h5>Krótki kod:</h5></div>
              <div className='col'><h5>Wymiary:</h5></div>
              <div className='col'><h5>Waga:</h5></div>
              <div className='col'><h5>Cena brutto:</h5></div>
            </div>
            <div className='row'>
              <div className='col'>{product && product.name}</div>
              <div className='col'>{product && product.version}</div>
              <div className='col'>{product && product.code}</div>
              <div className='col'>{product && product.shortCode}</div>
              <div className='col'>{product && product.dimmensionH} x {product.dimmensionW} x {product.dimmensionD}</div>
              <div className='col'>{product && product.weight}</div>
              <div className='col'>{product && product.price}</div>
            </div>
            <br/>
            <div className='container'>
              <p><h5>Opis:</h5> </p>
              <p>{product && product.info}</p>
              <p><h5>Dodatkowe informacje:</h5></p>
              <p>{product && product.additional_info}</p>
              <p><h5>Certyfikaty:</h5></p>
              <p>* linki *</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
          <Button>Karta katalogowa</Button>
          <Button>Certyfikaty</Button>
          <Button>Rendery</Button>
          <Button onClick={hideModal}>Close</Button>
          </Modal.Footer>
          </Modal>
        </div>
      <div className='container'>
        <Header />
        <div className='row'>
          <MenuLeft onMenuClick={onMenuClick}/>
          <List value={productType} records={newData} onClickList={onClickList} showModal={showModal} hideModal={hideModal}/>
        </div>
      </div>
    </div>
  )
}

export default App;
