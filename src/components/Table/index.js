import React from "react";
import { TableContainer, TableBody, Tr, GridItem, IconDelete } from "./style";
import TableHeader from "../TableHeader";
import { FaTrashAlt } from "react-icons/fa";
import { CgArrowTopRight, CgArrowBottomLeft } from "react-icons/cg";

const Table = ({ itemList, onDeleteItem, formatCurrency }) => {
  const handleDelete = (itemId) => {
    onDeleteItem(itemId);
  };

  return (
    <TableContainer>
      <TableHeader />
      <TableBody>
        {itemList.map((item) => (
          <Tr
            key={item.id}
            style={{
              backgroundColor:
                item.type === "Entrada"
                  ? "rgba(0, 255, 0, 0.2)"
                  : "rgba(255, 0, 0, 0.2)",
            }}
          >
            <GridItem data-label="ID">{item.id}</GridItem>
            <GridItem data-label="Receita/Despesa">{item.name}</GridItem>
            <GridItem data-label="Valor">{formatCurrency(item.value)}</GridItem>
            <GridItem data-label="Tipo">
              {item.type === "Entrada" ? (
                <CgArrowTopRight size={26} color="green" />
              ) : (
                <CgArrowBottomLeft size={26} color="red" />
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
    </TableContainer>
  );
};

export default Table;