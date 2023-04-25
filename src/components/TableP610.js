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
    const [data7, setData7] = useState([]);
    const [data8, setData8] = useState([]);
    const [data9, setData9] = useState([]);
    const [data10, setData10] = useState([]);




    const getFetch = async () => {

        const promise = await fetch("http://localhost:8080/ExtraMike/api/empleado/puntoSeis/", {
            method: 'GET',

        }).then((response) => {
            return response.json();
        });

        setResponse(await promise);

        const {data} = promise;
        console.log(data);
        setData(data);
    }

    const getFetch7 = async () => {

        const promise = await fetch("http://localhost:8080/ExtraMike/api/cliente/puntoSiete/", {
            method: 'GET',
        }).then((response) => {
            return response.json();
        });

        setResponse(await promise);

        const {data} = promise;
        console.log(data);
        setData7(data);
    }

    const getFetch8 = async () => {

        const promise = await fetch("http://localhost:8080/ExtraMike/api/pago/puntoOcho/", {
            method: 'GET',
        }).then((response) => {
            return response.json();
        });

        setResponse(await promise);

        const {data} = promise;
        console.log(data);
        setData8(data);
    }

    const getFetch9 = async () => {

        const promise = await fetch("http://localhost:8080/ExtraMike/api/pedido/puntoNueve/", {
            method: 'GET',
        }).then((response) => {
            return response.json();
        });

        setResponse(await promise);

        const {data} = promise;
        console.log(data);
        setData9(Object.values(data));
    }

    const getFetch10 = async () => {

        const promise = await fetch("http://localhost:8080/ExtraMike/api/cliente/puntoDiez/", {
            method: 'GET',
        }).then((response) => {
            return response.json();
        });

        setResponse(await promise);

        const {data} = promise;
        console.log(data);
        setData10(data);
    }

    useEffect(() => {
        getFetch().catch((error) => {
            console.log(error);
        });

        getFetch7().catch((error) => {
            console.log(error);
        });

        getFetch8().catch((error) => {
            console.log(error);
        });

        getFetch9().catch((error) => {
            console.log(error);
        });

        getFetch10().catch((error) => {
            console.log(error);
        });
        return () => {

        };
    }, []);
    return (<>

            <div style={{marginTop : 40, marginLeft : 40, marginBottom : 25, textAlign : "center"}}><h2>PUNTO 6 : ¿Cuántos empleados hay en la compañía?</h2></div>

            <TableContainer component={Paper} sx={{ margin: '0 auto', maxWidth : 300}} >
                <Table aria-label="customized table">

                    <TableBody>

                            <StyledTableRow >
                                <StyledTableCell component="th" >Empleados =</StyledTableCell>
                                <StyledTableCell >{data}</StyledTableCell>
                            </StyledTableRow>

                    </TableBody>
                </Table>
            </TableContainer>


            <div style={{marginTop : 80, marginLeft : 40, marginBottom : 25, textAlign : "center"}}><h2>PUNTO 7 : ¿Cuántos clientes tiene cada país?</h2></div>

            <TableContainer component={Paper} sx={{ margin: '0 auto', maxWidth : 300}} >
                <Table aria-label="customized table">

                    <TableHead>
                        <TableRow>
                            <StyledTableCell>país</StyledTableCell>
                            <StyledTableCell >cantidad_clientes</StyledTableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {data7.map((row) => (
                            <StyledTableRow key={row}>
                                <StyledTableCell component="th" scope="row">{row.pais}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">{row.cantidad_clientes}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>



            <div style={{marginTop : 80, marginLeft : 40, marginBottom : 25, textAlign : "center"}}><h2>PUNTO 8 : ¿Cuál fue el pago medio en 2009?</h2></div>

            <TableContainer component={Paper} sx={{ margin: '0 auto', maxWidth : 300}} >
                <Table aria-label="customized table">

                    <TableBody>

                        <StyledTableRow >
                            <StyledTableCell component="th" >Avg =</StyledTableCell>
                            <StyledTableCell >{data8}</StyledTableCell>
                        </StyledTableRow>

                    </TableBody>
                </Table>
            </TableContainer>



            <div style={{marginTop : 80, marginLeft : 40, marginBottom : 25, textAlign : "center"}}><h2>PUNTO 9 : ¿Cuántos pedidos hay en cada estado? Ordena el resultado de forma
                descendente por el número de pedidos.</h2></div>

            <TableContainer component={Paper} sx={{ margin: '0 auto', maxWidth : 300}} >
                <Table aria-label="customized table">

                    <TableHead>
                        <TableRow>
                            <StyledTableCell>estado</StyledTableCell>
                            <StyledTableCell >cantidad_pedidos</StyledTableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {data9.map((row) => (
                            <StyledTableRow key={row}>
                                <StyledTableCell component="th" scope="row">{row.estado}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">{row.cantidad_pedidos}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>



            <div style={{marginTop : 80,marginLeft : 40, marginBottom : 25, textAlign : "center"}}><h2>PUNTO 10 : Devuelve el nombre del cliente con mayor límite de crédito.</h2></div>

            <TableContainer component={Paper} sx={{ margin: '0 auto', maxWidth : 300}} style={{marginBottom : 100}}>
                <Table aria-label="customized table">

                    <TableBody>

                        <StyledTableRow >
                            <StyledTableCell component="th" >Cliente =</StyledTableCell>
                            <StyledTableCell >{data10}</StyledTableCell>
                        </StyledTableRow>

                    </TableBody>
                </Table>
            </TableContainer>




        </>

    );
}