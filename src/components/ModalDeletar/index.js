import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"

const ModalDeletar = ({ handleOpen, handleClose, infoModal, handleDelete }) => {

    return (
        <Dialog
            open={handleOpen}
            onClose={() => handleClose(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" variant="h4">
                {`Deletar`}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description" style={{ fontSize: 18 }}>
                    <>
                        Você realmente deseja deletar <b>{infoModal?.nome}</b>?
                    </>

                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleClose(false)} variant="contained" >Cancelar</Button>
                <Button onClick={handleDelete} variant="contained">
                    Confirmar
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ModalDeletar;