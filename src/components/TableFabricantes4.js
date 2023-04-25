import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from "react";
import PriceCheck from "@mui/icons-material/PriceCheck";
import Inventory2 from "@mui/icons-material/Inventory2";
import Factory from "@mui/icons-material/Factory";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function CustomizedTables() {
    const [response, setResponse] = useState({});
    const [data, setData] = useState([]);
    const getFetch = async () => {

        const promise = await fetch("http://localhost:8080/ExtraMike/api/empleado/puntoCuatro/", {
            method: 'GET',

        }).then((response) => {
            return response.json();
        });

        setResponse(await promise);

        const {data} = promise;
        console.log(data);
        setData(Object.values(data));
    }
    useEffect(() => {
        getFetch().catch((error) => {
            console.log(error);
        });
        return () => {

        };
        console.log(data);
    }, []);
    return (<>

            <div style={{marginTop : 40, marginLeft : 40, marginBottom : 25}}><h2>PUNTO 4 : Devuelve un listado que muestre solamente los empleados que no tienen una
                oficina asociada.</h2></div>

        <TableContainer component={Paper} sx={{ margin: '0 auto'}}>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>codigo_empleado</StyledTableCell>
                        <StyledTableCell >nombre</StyledTableCell>
                        <StyledTableCell >apellido1</StyledTableCell>
                        <StyledTableCell >apellido2</StyledTableCell>
                        <StyledTableCell >extension</StyledTableCell>
                        <StyledTableCell >email</StyledTableCell>
                        <StyledTableCell >codigo_oficina</StyledTableCell>
                        <StyledTableCell >codigo_jefe</StyledTableCell>
                        <StyledTableCell >puesto</StyledTableCell>


                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <StyledTableRow key={row}>
                            <StyledTableCell component="th" scope="row">{row.codigo_empleado}</StyledTableCell>
                            <StyledTableCell >{row.nombre}</StyledTableCell>
                            <StyledTableCell >{row.apellido1}</StyledTableCell>
                            <StyledTableCell >{row.apellido2}</StyledTableCell>
                            <StyledTableCell >{row.extension}</StyledTableCell>
                            <StyledTableCell >{row.email}</StyledTableCell>
                            <StyledTableCell >{row.codigo_oficina}</StyledTableCell>
                            <StyledTableCell >{row.codigo_jefe}</StyledTableCell>
                            <StyledTableCell >{row.puesto}</StyledTableCell>



                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

        </>

    );
}