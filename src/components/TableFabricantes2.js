import * as React from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from "react";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
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

        const promise = await fetch("http://localhost:8080/ExtraMike/api/cliente/puntoDos/", {
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
    return (
        <>
            <div style={{marginTop: 40, marginLeft: 40, marginBottom: 25}}><h2>PUNTO 2 : Devuelve un listado que muestre
                solamente los clientes que no han realizado
                ningún pedido.</h2></div>



            <TableContainer component={Paper} sx={{margin: '0 auto'}}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>codigo_cliente</StyledTableCell>
                            <StyledTableCell>nombre_cliente</StyledTableCell>
                            <StyledTableCell>nombre_contacto</StyledTableCell>
                            <StyledTableCell>apellido_contacto</StyledTableCell>
                            <StyledTableCell>telefono</StyledTableCell>
                            <StyledTableCell>fax</StyledTableCell>
                            <StyledTableCell>linea_direccion1</StyledTableCell>
                            <StyledTableCell>linea_direccion2</StyledTableCell>
                            <StyledTableCell>ciudad</StyledTableCell>
                            <StyledTableCell>region</StyledTableCell>
                            <StyledTableCell>pais</StyledTableCell>
                            <StyledTableCell>codigo_postal</StyledTableCell>
                            <StyledTableCell>codigo_empleado</StyledTableCell>
                            <StyledTableCell>limite_credito</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <StyledTableRow key={row}>
                                <StyledTableCell component="th" scope="row"> {row.codigo_cliente} </StyledTableCell>
                                <StyledTableCell component="th" scope="row">{row.nombre_cliente}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">{row.nombre_contacto}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">{row.apellido_contacto}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">{row.telefono}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">{row.fax}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">{row.linea_direccion1}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">{row.linea_direccion2}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">{row.ciudad}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">{row.region}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">{row.pais}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">{row.codigo_postal}</StyledTableCell>
                                <StyledTableCell component="th"
                                                 scope="row">{row.codigo_empleado_rep_ventas}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">{row.limite_credito}</StyledTableCell>


                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}