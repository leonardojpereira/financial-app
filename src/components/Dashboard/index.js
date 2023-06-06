import {
  DashboardContainer,
  Card,
  ValueAmount,
  Footer,
  TypeOf,
  TypeOfSymbol,
} from "./style";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { CgMathEqual } from "react-icons/cg";

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

  const cardData = [
    {
      amount: `R$ ${itemList
        .filter((item) => item.type === "Entrada")
        .reduce((acc, item) => acc + Number(item.value), 0)
        .toFixed(2)}`,
      type: "Entrada",
      icon: <FaArrowUp color="#fff" size={15} />,
      color: "green",
    },
    {
      amount: `R$ ${itemList
        .filter((item) => item.type === "Saída")
        .reduce((acc, item) => acc + Number(item.value), 0)
        .toFixed(2)}`,
      type: "Saída",
      icon: <FaArrowDown size={15} color="#fff" />,
      color: "red",
    },
    {
      amount: `R$ ${calculateTotal().toFixed(2)}`,
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