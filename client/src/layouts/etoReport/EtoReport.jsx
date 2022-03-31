import { TextField } from '@material-ui/core'
import { Button, Divider, Grid, makeStyles } from '@mui/material'
import VuiBox from 'components/VuiBox'
import MiniStatisticsCard from 'examples/Cards/StatisticsCards/MiniStatisticsCard'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React, { PureComponent, useState } from 'react'
import "./EtoReport.css";
import HorizontalBarChart from "examples/Charts/HorizontalBarChart/HorizontalBarChart.jsx"
import { DataGrid } from '@material-ui/data-grid';
import * as XLSX from "xlsx";
import Axios from "axios";

import Footer from 'examples/Footer'


function EtoReport() {

  const [excelFile, setexcelFile] = useState(null);
  const [excelFileError, setexcelFileError] = useState(null);

  const [excelData, setexcelData] = useState(null);
  //array of object
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${
          params.getValue(params.id, 'lastName') || ''
        }`,
    },
  ];
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(excelFile!==null){
      const workbook=XLSX.read(excelFile,{type:'string'});
      const worksheetName=workbook.SheetNames[0];
      const worksheet=workbook.Sheets[worksheetName];
      const data =XLSX.utils.sheet_to_json(worksheet);
      setexcelData(data)
      // var myJsonString = JSON.stringify(data);
      // data.forEach((value,index,array)=>{
      //   console.log(`${value}`);

      // })
      const jsonData = data;
    console.log(jsonData)
    return fetch("http://localhost:3001/addeto", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type" : "application/x-www-form-urlencoded"},
        body: jsonData
    })

      // data.forEach((value,index,array)=>{
      //   Axios.post('http://localhost:3001/addeto',{
      //     value:data.Area
      //   }).then(()=>{
      //     console.log('Sucess');
      //   })
      // })

    }else{
      setexcelFile(null);
    }
  }

  const handleFileChange=(e)=>{
    const fileType=['application/vnd.ms-excel'];
    const selectedFile=e.target.files[0];
    if(selectedFile && fileType.includes(selectedFile.type)){
      let reader=new FileReader();
      reader.readAsText(selectedFile);
      reader.onload=(e)=>{
        setexcelFileError(null);
        setexcelFile(e.target.result);
      }
    }else{
      setexcelFileError('Please Select Your Excel File type');
      setexcelFile(null)
    }
  }
 
  

  return (
    <DashboardLayout>
        <DashboardNavbar />

        <form action="" onSubmit={handleSubmit}>
          <TextField
          type="file"
          onChange={handleFileChange}
          />
          <Button 
          className='button'
          type='submit'
          >Save</Button>
        </form>

        <Divider/>
        
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Direct ETO", fontWeight: "regular" }}
                count="2.4%"
                percentage={{ color: "success", text: "+55%" }}
                icon={{ color: "info" }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Indirect ETO" }}
                count="4.5%"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info"}}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Total ETO" }}
                count="3.3%"
                percentage={{ color: "error", text: "-2%" }}
                icon={{ color: "info"}}
              />
            </Grid>
            
          </Grid>
        </VuiBox>

        <div className='body'>
          <div className='rechart'>
            <HorizontalBarChart/>
          </div>
          <div className='table'>
          <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
          </div>
        </div>

<Footer/>
    </DashboardLayout>
  )
}

export default EtoReport