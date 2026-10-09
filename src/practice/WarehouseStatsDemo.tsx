import styled from "@emotion/styled";

interface Product {
  id: number;
  name: string;
  quantity: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Хлеб",
    quantity: 50,
  },
  {
    id: 2,
    name: "Телефон",
    quantity: 25,
  },
  {
    id: 3,
    name: "Мука",
    quantity: 3,
  },
  {
    id: 4,
    name: "Сыр",
    quantity: 10,
  },
  {
    id: 5,
    name: "Шина",
    quantity: 0,
  },
];

const DemoSection = styled.section`
  margin-top: 30px;
  padding: 25px;
  background-color: #fff;
  border: 1px solid #e7dfd4;
  border-radius: 18px;
`;

const StatsRow = styled.div`
  display: flex;
  gap: 15px;
`;

const StatsCard = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  padding: 0 28px;
  border-right: 1px solid #494033;

  &:last-of-type {
    border-right: none;
  }
`;

interface ProductProps {
  total: number;
  inStock: number;
  outOfStock: number;
  lowStock: number;
}

function ProductsStats({ total, inStock, outOfStock, lowStock }: ProductProps) {
  return (
    <StatsRow>
      <StatsCard>
        <span>Всего товаров</span>
        <strong>{total}</strong>
      </StatsCard>

      <StatsCard>
        <span>В наличии</span>
        <strong>{inStock}</strong>
      </StatsCard>

      <StatsCard>
        <span>Закончились</span>
        <strong>{outOfStock}</strong>
      </StatsCard>

      <StatsCard>
        <span>Осталось мало</span>
        <strong>{lowStock}</strong>
      </StatsCard>
    </StatsRow>
  );
}

export function ProductsStatsDemo() {
  const total = products.length;
  const inStock = products.filter((product) => product.quantity > 0).length;
  const outOfStock = products.filter((product) => product.quantity === 0).length;
  const lowStock = products.filter((product) => product.quantity > 0 && product.quantity <= 5).length;

  return (
    <DemoSection>
      <h2>Статистика склада</h2>

      <ProductsStats 
        total={total} 
        inStock={inStock} 
        outOfStock={outOfStock} 
        lowStock={lowStock} 
      />
    </DemoSection>
  );
}
