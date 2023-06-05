import { TableHeaderContainer, GridItemTitle } from "./style.js";

export default function TableHeader() {
  return (
    <TableHeaderContainer>
      <GridItemTitle>Receita/Despesa</GridItemTitle>
      <GridItemTitle>Valor</GridItemTitle>
      <GridItemTitle>Tipo</GridItemTitle>
      <GridItemTitle>Data</GridItemTitle>
      <GridItemTitle>Excluir</GridItemTitle>
    </TableHeaderContainer>
  );
}