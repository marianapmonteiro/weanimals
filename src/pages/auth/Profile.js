import React, { useContext, useState, useEffect } from 'react'
import { Grid, Divider, Typography, TextField, Container, Button } from "@mui/material";
import { AuthContext } from '../../context/AuthContext';
import { GetEspeciesByAuthorId } from "../../requests/Especies"
import { GetRacasByAuthorId } from '../../requests/Raca';
import { AltPerfil } from '../../requests/User';
import styled from "@emotion/styled";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import theme from '../../theme/theme';
import StyledButton from '../../components/Button/index'



const MainContainer = styled.div`
    width:100%;
    height:100%;
    margin-top: 2em;
`;
const Item = styled.div`
    width:45%;
	display: flex;
    align-items: center;
	flex-wrap: wrap;  
    @media (max-width: ${theme.breakpoints.values.md}px) {
		width:100%;
	}
`;
const Card = styled.div`
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    width: fit-content;
    height: fit-content;
    padding: 2em;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

function Profile() {
    const { cookies, setCookie } = useContext(AuthContext)
    const [user, setUser] = useState(cookies.UserData)
    const token = cookies.WeAnimals;

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [saveName, setSaveName] = useState(name)
    const [saveEmail, setSaveEmail] = useState(email)
    const [helpText, setHelpText] = useState(false)
    const [altPassword, setAltPassword] = useState(false)

    const [altSenha, setAltSenha] = useState(false)
    const [disableName, setDisableName] = useState(true)
    const [disableEmail, setDisableEmail] = useState(true)
    const [publicacoesEspecies, setPublicacoesEspecies] = useState([])
    const [publicacoesRacas, setPublicacoesRacas] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const especieData = await GetEspeciesByAuthorId(token);
            const racasData = await GetRacasByAuthorId(token);
            setPublicacoesEspecies(especieData)
            setPublicacoesRacas(racasData)
        };
        fetchData();
    }, []);


    const AlterarPerfil = async () => {
        await AltPerfil(name, email, altPassword, oldPassword, password, confirmPassword, token, setCookie);
    }

    const AlterarSenha = async () => {
        if (password !== confirmPassword) {
            setHelpText(true)
        }
        setAltPassword(true);
        setAltSenha(false);
    }

    return (
        <Container maxWidth="lg">
            <Grid container sx={{
                marginTop: '5em',
                "@media (max-width: 600px)": {
                    gap: "5em"
                }
            }}>
                <Grid item md={6} xs={12} sx={{
                    "@media (max-width: 913px)": {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        marginBottom: "2em"
                    }
                }}>
                    <Card>
                        <AccountBoxIcon style={{ width: "100px", height: "100px" }} />
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {user.name}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {user.email}
                        </Typography>
                    </Card>
                </Grid>
                <Grid item md={6} xs={12} style={{ display: "flex", gap: "2em", justifyContent: "space-between", flexWrap: "wrap", }} >
                    <Item style={{ width: "100%", gap: "1em" }}>
                        <Typography>Configurações</Typography>
                        <SettingsIcon />
                    </Item>
                    <Item >
                        <TextField variant="filled" value={saveName} disabled={disableName} label="Nome" onChange={(e) => { setSaveName(e.target.value) }} />
                        {disableName ?
                            <EditIcon style={{ marginLeft: "5px", cursor: "pointer" }} onClick={() => { setDisableName(false) }} />
                            : <div style={{ display: "flex", flexDirection: "column" }}>
                                <CheckIcon style={{ cursor: "pointer" }} onClick={() => { { setName(saveName) } { setDisableName(true) } }} />
                                <ClearIcon style={{ cursor: "pointer" }} onClick={() => { { setDisableName(true) } { setSaveName(name) } }} />
                            </div>}
                    </Item>
                    <Item>
                        <TextField variant="filled" value={saveEmail} disabled={disableEmail} label="E-mail" onChange={(e) => { setSaveEmail(e.target.value) }} />
                        {disableEmail ? <EditIcon style={{ marginLeft: "5px", cursor: "pointer" }} onClick={() => { setDisableEmail(false) }} /> :
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <CheckIcon style={{ cursor: "pointer" }} onClick={() => { { setDisableEmail(true) } { setEmail(saveEmail) } }} />
                                <ClearIcon style={{ cursor: "pointer" }} onClick={() => { { setDisableEmail(true) }; { setSaveEmail(email) } }} />
                            </div>}
                    </Item>
                    {altSenha === false ?
                        <Item style={{ width: "100%", gap: "1em" }}>
                            <Button variant="outlined" onClick={() => { setAltSenha(true) }}>Alterar senha</Button>
                        </Item> : null}
                    {altSenha ?
                        <Item>
                            <TextField label="Senha atual" margin="dense" onChange={(e) => { setOldPassword(e.target.value) }} />
                            <TextField label="Nova senha" margin="dense" onChange={(e) => { setPassword(e.target.value) }} />
                            <TextField label="Confirmar nova senha" margin="dense" onChange={(e) => { setConfirmPassword(e.target.value) }} />
                            <div style={{ width: "100%", display: "flex", gap: "1em", marginTop: "2em" }}>
                                <Button variant="outlined" onClick={() => { AlterarSenha() }}>Alterar senha</Button>
                                <Button variant="outlined" onClick={() => { setAltSenha(false) }}>Cancelar</Button>
                                {helpText === true ? <Typography variant="body1" style={{ color: "red" }}>Senhas não conferem</Typography> : null}
                            </div>
                        </Item> : null}
                    <Item style={{ width: "100%", gap: "1em" }}>
                        <StyledButton variant="outlined" text="Salvar alterações" onClick={() => { AlterarPerfil() }} />
                    </Item>
                </Grid>
            </Grid>
            <Divider style={{ marginTop: '1em' }} />
            <MainContainer>
                <Typography variant="h5">Minhas publicações</Typography>
                <div style={{ display: 'flex', flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", marginTop: "2em" }}>
                    {(publicacoesEspecies.length > 0 || publicacoesRacas.length > 0) ?
                        [...publicacoesEspecies, ...publicacoesRacas].map((item) => (
                            <Button>{item.nome}</Button>
                        )) :
                        <Typography variant="body1">Nenhuma publicação encontrada</Typography>
                    }
                </div>
            </MainContainer>
        </Container>
    )
}

export default Profile