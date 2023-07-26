import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputText from "../../molecules/InputText";
import ButtonAction from "@/components/molecules/ButtonAction";
import InfoIcon from '@mui/icons-material/Info';
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import * as S from './styles'



export default function FormEdit({
  setIsEditing,
  setDataEdit,
  isEditing,
}: any) {
  const [open, setOpen] = React.useState(false);
  const [titulo, setTitulo] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [simulateImage, setSimulateImage] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDataChange = () => {
    setDataEdit({
      titulo: titulo,
      description: description,
      simulateImage:simulateImage
    });
  };

  React.useEffect(() => {
    handleDataChange();
  }, [isEditing]);

  return (
    <div>
      <ButtonAction label="Editar Personagem" action={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <S.BoxModal>
          <S.ModalTitle>
            Editar Personagem
          </S.ModalTitle>
          <div>
            <InputText
              labelText="Titulo"
              change={(e: any) => setTitulo(e.target.value)}
            />
          </div>
          <div>
            <InputText
              labelText="Descrição"
              change={(e: any) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <InputText
              labelText="Link da Imagem"
              change={(e: any) => setSimulateImage(e.target.value)}
            />
            <Tooltip title="Carregue o ENDEREÇO DE UMA IMAGEM aqui para simular um input file">
              <IconButton>
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </div>

          <div>
            <ButtonAction
              label="Editar"
              action={() => {
                setIsEditing(true), handleDataChange();
              }}
            />
          </div>
          </S.BoxModal>
      </Modal>
    </div>
  );
}
