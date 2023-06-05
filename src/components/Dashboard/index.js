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

export default function Dashboard() {
  const cardData = [
    {
      amount: "R$ 1.500,00",
      type: "Entrada",
      icon: <FaArrowUp color="#fff" size={15} />,
      color: "green",
    },
    {
      amount: "R$ 500,00",
      type: "Saída",
      icon: <FaArrowDown size={15} color="#fff" />,
      color: "red",
    },
    {
      amount: "R$ 1.000,00",
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
