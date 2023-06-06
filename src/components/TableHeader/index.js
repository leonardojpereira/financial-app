import { TableHeaderContainer, GridItemTitle } from "./style.js";

export default function TableHeader() {
  return (
    <TableHeaderContainer>
      <GridItemTitle>ID</GridItemTitle>
      <GridItemTitle>Receita/Despesa</GridItemTitle>
      <GridItemTitle>Valor</GridItemTitle>
      <GridItemTitle>Tipo</GridItemTitle>
      <GridItemTitle>Data</GridItemTitle>
      <GridItemTitle>Excluir</GridItemTitle>
    </TableHeaderContainer>
  );
}