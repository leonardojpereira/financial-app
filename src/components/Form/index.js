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
  const [isZeroValue, setIsZeroValue] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    value: "",
    type: "",
    date: "",
  });

  const handleFormEdit = (event, name) => {
    let value = event.target.value;

    if (name === "value") {
      value = value.replace(/[^0-9.,]/g, ""); // Remove caracteres não numéricos, exceto ponto e vírgula
    }

    setFormData({
      ...formData,
      [name]: value,
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
    const { name, value, type } = formData;
    if (name !== "" && value !== "" && type !== "") {
      const parsedValue = parseFloat(value.replace(",", "."));
      if (parsedValue > 0) {
        const newItem = {
          id: generateRandomId(),
          name,
          value: parsedValue,
          type,
          date: moment().format("DD/MM/YYYY"),
        };
        onAddItem(newItem);
        setFormData({
          name: "",
          value: "",
          type: "",
          date: "",
        });
        setIsEmpty(false);
        setIsZeroValue(false);
      } else {
        setIsZeroValue(true);
        setIsEmpty(false);
      }
    } else {
      setIsEmpty(true);
      setIsZeroValue(false);
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
            autoComplete="off"
            onChange={(e) => handleFormEdit(e, "name")}
          />
          <FormLabel htmlFor="name">Nome</FormLabel>
        </FieldGroup>

        <FieldGroup>
          <Input
            placeholder="Valor R$"
            type="text"
            name="value"
            id="value"
            value={formData.value}
            autoComplete="off"
            onChange={(e) => handleFormEdit(e, "value")}
          />
          <FormLabel htmlFor="value">Valor</FormLabel>
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
      <ErrorMessage>
        {isEmpty && (
          <p style={{ position: "absolute", bottom: "-20px" }}>
            Todos os campos devem ser preenchidos.
          </p>
        )}
        {isZeroValue && (
          <p style={{ position: "absolute", bottom: "-20px" }}>
            O valor deve ser maior que zero.
          </p>
        )}
      </ErrorMessage>
    </>
  );
}