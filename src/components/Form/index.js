import { useState } from "react";
import {
  FormContainer,
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
import moment from 'moment';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    value: "",
    type: "",
    date: "",
  });
  const [itemList, setItemList] = useState([]);

  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      ...formData,
      date: moment().format("DD/MM/YYYY"),
    };
    setItemList([...itemList, newItem]);
    setFormData({
      name: "",
      value: "",
      type: "",
      date: "",
    });
  };

  const handleDelete = (itemId) => {
    const updatedItemList = itemList.filter((item) => item.id !== itemId);
    setItemList(updatedItemList);
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          placeholder="Nome"
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={(e) => handleFormEdit(e, "name")}
        />
        <Input
          placeholder="Valor R$"
          type="number"
          name="value"
          id="value"
          value={formData.value}
          onChange={(e) => handleFormEdit(e, "value")}
        />
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
              <GridItem data-label="Receita/Despesa">{item.name}</GridItem>
              <GridItem data-label="Valor">{item.value}</GridItem>
              <GridItem data-label="Tipo">{item.type === 'Entrada' ? <FaArrowUp color="green" /> : <FaArrowDown color="red"/>}</GridItem>
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
