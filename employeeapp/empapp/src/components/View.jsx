import { Table, TableBody, TableCell,TableContainer,TableHead,TableRow} from '@mui/material'
import axios  from 'axios';
import React, { useState} from 'react'

const view = () => {
    var [emp, setEmp] = useState([]);
    axios.get("http://localhost:3004/view")
        .then((res) => {
            setEmp(res.data)
        })


    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Dept</TableCell>
                            <TableCell>Sal</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {emp.map((val, i) => {
                            return (

                 
                                <TableRow>
                                    <TableCell> {val.Name}</TableCell>
                                    <TableCell>{val.Age}</TableCell>
                                    <TableCell>{val.Dept}</TableCell>
                                    <TableCell>{val.Sal} </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

  

export default view
