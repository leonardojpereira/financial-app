import {
  DashboardContainer,
  Card,
  ValueAmount,
  Footer,
  TypeOf,
  TypeOfSymbol,
} from "./style";
import { CgArrowTopRight, CgArrowBottomLeft, CgMathEqual } from 'react-icons/cg'

export default function Dashboard({ itemList }) {
  const calculateTotal = () => {
    const totalIncome = itemList
      .filter((item) => item.type === "Entrada")
      .reduce((acc, item) => acc + Number(item.value), 0);

    const totalExpense = itemList
      .filter((item) => item.type === "Saída")
      .reduce((acc, item) => acc + Number(item.value), 0);

    return totalIncome - totalExpense;
  };

  const formatCurrency = (value) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const cardData = [
    {
      amount: formatCurrency(
        itemList
          .filter((item) => item.type === "Entrada")
          .reduce((acc, item) => acc + Number(item.value), 0)
      ),
      type: "Entrada",
      icon: <CgArrowTopRight color="#fff" size={22} />,
      color: "green",
    },
    {
      amount: formatCurrency(
        itemList
          .filter((item) => item.type === "Saída")
          .reduce((acc, item) => acc + Number(item.value), 0)
      ),
      type: "Saída",
      icon: <CgArrowBottomLeft size={22} color="#fff" />,
      color: "red",
    },
    {
      amount: formatCurrency(calculateTotal()),
      type: "Total",
      icon: <CgMathEqual size={18} color="#fff" />,
      color: "#0064ff",
    },
  ];

  return (
    <DashboardContainer>
      {cardData.map((data, index) => (
        <Card key={index}>
          <ValueAmount>{data.amount}</ValueAmount>
          <Footer>
            <TypeOf>{data.type}</TypeOf>
            <TypeOfSymbol backgroundColor={data.color}>
              {data.icon}
            </TypeOfSymbol>
          </Footer>
        </Card>
      ))}
    </DashboardContainer>
  );
}