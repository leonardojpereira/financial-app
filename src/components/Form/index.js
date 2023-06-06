import { useState } from "react";
import {
  FormContainer,
  FieldGroup,
  FormLabel,
  Input,
  SelectType,
  OptionType,
  Button,
  Tr,
  GridItem,
  SalesTable,
  TableBody,
  IconDelete,
} from "./style";
import TableHeader from "../TableHeader";
import { FaTrashAlt } from "react-icons/fa";
import moment from "moment";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

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
      randomId += Math.floor(Math.random() * 10); // Gera um dígito aleatório de 0 a 9
    }
    return randomId;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: generateRandomId(), // Gera um ID de 3 dígitos aleatórios
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

  const handleDelete = (itemId) => {
    onDeleteItem(itemId);
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
        <FormLabel for="name">Nome</FormLabel>
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
         <FormLabel for="value" class="form__label">Valor</FormLabel>
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

      <SalesTable>
        <TableHeader />
        <TableBody>
          {itemList.map((item) => (
            <Tr key={item.id}>
              <GridItem data-label="ID">{item.id}</GridItem>
              <GridItem data-label="Receita/Despesa">{item.name}</GridItem>
              <GridItem data-label="Valor">{item.value}</GridItem>
              <GridItem data-label="Tipo">
                {item.type === "Entrada" ? (
                  <FaArrowUp color="green" />
                ) : (
                  <FaArrowDown color="red" />
                )}
              </GridItem>
              <GridItem data-label="Data">{item.date}</GridItem>
              <GridItem data-label="Excluir">
                <IconDelete>
                  <FaTrashAlt onClick={() => handleDelete(item.id)} />
                </IconDelete>
              </GridItem>
            </Tr>
          ))}
        </TableBody>
      </SalesTable>
    </>
  );
}