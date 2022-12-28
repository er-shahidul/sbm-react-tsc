import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import CButton from './components/CButton';
import CTable from './components/CTable';
import axios from 'axios';
import { IStudent } from './interfaces/Student.interface';
import {BrowserRouter, Routes , Route, Link} from "react-router-dom";
import CForm from './components/CForm';

function App() {
  const [data, setData] = useState<IStudent[]>([]);

  useEffect(()=>{
    const fetchData = ()=>{
      axios.get('http://localhost:8182/student').then((res)=>{
        console.log('res', res);
        setData(res.data);
      })
    }
    fetchData();
    }, [])


  return (
    <>
     <BrowserRouter>
     <Link to='/cform'>Form</Link>
     <Routes >
            <Route path='/cform' element={<CForm />} />
         
        </Routes>
    </BrowserRouter>

    <CTable data = {data}/>
    </>
   
  );
}

export default App;
