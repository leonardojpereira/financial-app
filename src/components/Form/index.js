import React, { useState } from "react";
import {
  FormContainer,
  FieldGroup,
  FormLabel,
  Input,
  SelectType,
  OptionType,
  Button,
  ErrorMessage
} from "./style";
import moment from "moment";


export default function Form({ onAddItem }) {

  const [isEmpty, setIsEmpty] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    value: "",
    type: "",
    date: "",
  });

  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  const generateRandomId = () => {
    const idLength = 3;
    let randomId = "";
    for (let i = 0; i < idLength; i++) {
      randomId += Math.floor(Math.random() * 10);
    }
    return randomId;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name !== "" && formData.value !== "" && formData.type !== "") {
      const newItem = {
        id: generateRandomId(),
        ...formData,
        date: moment().format("DD/MM/YYYY"),
      };
      onAddItem(newItem);
      setFormData({
        name: "",
        value: "",
        type: "",
        date: "",
      });
      setIsEmpty(false); // Define isEmpty como false após enviar o formulário
    } else {
      setIsEmpty(true); // Define isEmpty como true se algum campo estiver vazio
    }
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <FieldGroup>
          <Input
            placeholder="Nome"
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={(e) => handleFormEdit(e, "name")}
          />
          <FormLabel htmlFor="name">Nome</FormLabel>
        </FieldGroup>

        <FieldGroup>
          <Input
            placeholder="Valor R$"
            type="number"
            name="value"
            id="value"
            value={formData.value}
            min={1}
            onChange={(e) => handleFormEdit(e, "value")}
          />
          <FormLabel htmlFor="value">
            Valor
          </FormLabel>
        </FieldGroup>

        <SelectType
          name="Tipo"
          value={formData.type}
          onChange={(e) => handleFormEdit(e, "type")}
        >
          <OptionType value="" disabled hidden>
            Tipo
          </OptionType>
          <OptionType>Entrada</OptionType>
          <OptionType>Saída</OptionType>
        </SelectType>
        <Button type="submit">Enviar</Button>
      </FormContainer>
      <ErrorMessage>{isEmpty && <p style={{position: "absolute", bottom: "-20px"}}>Todos os campos precisam ser preenchidos.</p>}</ErrorMessage>
    </>
  );
}