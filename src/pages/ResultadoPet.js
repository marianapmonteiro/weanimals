import React, { useState, useEffect } from 'react'
import { ParearPet } from '../requests/Especies';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    Typography,
    Divider,
    Button,
    CircularProgress,
} from "@mui/material";
import styled from "@emotion/styled";
import sadEmoji from '../Images/sadEmoji.png'
import PetsIcon from '@mui/icons-material/Pets';
import theme from '../theme/theme';
import 'react-quill/dist/quill.snow.css';

const MainContainer = styled.div`
	width: 100%;
	height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    margin-top: 5em;
    @media (max-width: ${theme.breakpoints.values.sm}px) {
        padding-inline: 2em;
	}
`;


const Img = styled.img`
    width: 350px;
    height:350px;
    border-radius: 500px;
    background-position: center;
    background-size: cover;
`;

const BoxTitle = styled.div`
   width:100%;
   display: flex;
   gap: 1em;
   justify-content: center;
   align-items: center;
`;

function ResultadoPet() {

    const location = useLocation()
    const navigate = useNavigate()
    const { respostas } = location.state
    const [dados, setDados] = useState()

    console.log("respostas", respostas)

    useEffect(() => {
        const fetchData = async () => {
            // const data = await ParearPet(respostas)
            // setDados(data[0])
            const data = await ParearPet(respostas);
            if (typeof data === 'string') {
                setDados({ message: data });

            } else {
                setDados(data[0]);
                // console.log("dadossss:", dados.nome)
            }
        }

        fetchData()

    }, [])


    return (
        dados && dados.message ? (
            <MainContainer>
                <Typography variant="h4">{dados.message}</Typography>
                <Divider />
                <Img src={sadEmoji} alt="emoji triste" />
            </MainContainer>

        ) : dados && dados.nome ? (
            <MainContainer>
                <Typography variant="h4">O pet que mais combina com suas respostas é:</Typography>
                <Divider style={{ width: "50%" }} />
                <Img src={`http://localhost:3001/uploads/especies/${dados.imagens[0]}`} alt="imagem do pet encontrado" />
                <BoxTitle>
                    <PetsIcon />
                    <Typography variant="h5" style={{ fontWeight: "bold" }}>{dados.nome}</Typography>
                </BoxTitle>
                <Button variant="outlined" size='large' onClick={() => {
                    navigate(`/especie/?id=${dados._id}`);
                }}>Ver sobre </Button>
            </MainContainer>
        ) : <MainContainer><CircularProgress /></MainContainer>
    );
}

export default ResultadoPet