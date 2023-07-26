import { useState } from "react";
import CardImage from "../../../components/atoms/CardImage";
import TextParagraph from "../../../components/atoms/TextParagraph";
import FormEdit from "../FormEdit";

import * as S from "./styles";

type CharacterCardProps = {
  data: {
    thumbnail: {
      path: string;
      extension: string;
    };
    name: string;
    description: string;
  };
};

const CharacterCard = ({ data }: CharacterCardProps) => {
  const [isEditing, setIsEditing] = useState<any>(false);
  const [dataEdit, setDataEdit] = useState<any>({});

  console.log(data.thumbnail.path,'teste')
  return (
    <S.ContentPerson>
      <CardImage url={isEditing && dataEdit?.simulateImage ? dataEdit?.simulateImage :`${data.thumbnail.path}.${data.thumbnail.extension}`} />

      <S.Description>
        <S.ButtonModal>        
        <FormEdit
          setIsEditing={setIsEditing}
          setDataEdit={setDataEdit}
          isEditing={isEditing}
        />
        </S.ButtonModal>

        {isEditing && dataEdit ? (
          <>
            <TextParagraph text={dataEdit?.titulo} type="h2" />
            <TextParagraph text={dataEdit?.description} type="h5" />
          </>
        ) : (
          <>
            <TextParagraph text={data.name} type="h2" />
            <TextParagraph
              text={
                data.description
                  ? data.description
                  : "There is no description..."
              }
              type="h5"
            />
          </>
        )}
      </S.Description>
    </S.ContentPerson>
  );
};

export default CharacterCard;
