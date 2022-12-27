import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import IButton from './components/IButton';
import ITable from './components/ITable';
import axios from 'axios';
import { IStudent } from './interfaces/Student.interface';
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
    <ITable data = {data}/>
    </>
   
  );
}

export default App;
