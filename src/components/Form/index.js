import React, { useState } from "react";
import {
  FormContainer,
  FieldGroup,
  FormLabel,
  Input,
  SelectType,
  OptionType,
  Button,
} from "./style";
import moment from "moment";


export default function Form({ itemList, onAddItem, onDeleteItem }) {
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
            onChange={(e) => handleFormEdit(e, "value")}
          />
          <FormLabel htmlFor="value" className="form__label">
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
    </>
  );
}