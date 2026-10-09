import styled from "@emotion/styled";

type TicketStatus = "new" | "in-progress" | "closed";

interface Ticket {
  id: number;
  title: string;
  status: TicketStatus;
  isUrgent: boolean;
}

const tickets: Ticket[] = [
  {
    id: 1,
    title: "Не загружается файл",
    status: "closed",
    isUrgent: false,
  },
  {
    id: 2,
    title: "Не приходит письмо",
    status: "in-progress",
    isUrgent: true,
  },
  {
    id: 3,
    title: "Ошибка при оплате",
    status: "new",
    isUrgent: true,
  },
  {
    id: 4,
    title: "Не открывается профиль",
    status: "new",
    isUrgent: false,
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

interface TicketProps {
  total: number;
  active: number;
  closed: number;
  urgent: number;
}

function TicketStats({ total, active, closed, urgent }: TicketProps) {
  return (
    <StatsRow>
      <StatsCard>
        <span>Всего</span>
        <strong>{total}</strong>
      </StatsCard>

      <StatsCard>
        <span>Активные</span>
        <strong>{active}</strong>
      </StatsCard>

      <StatsCard>
        <span>Закрытые</span>
        <strong>{closed}</strong>
      </StatsCard>

      <StatsCard>
        <span>Срочные</span>
        <strong>{urgent}</strong>
      </StatsCard>
    </StatsRow>
  );
}

export function TicketStatsDemo() {
  const total = tickets.length;

  const active = tickets.filter((ticket) => ticket.status !== "closed").length;
  const closed = tickets.filter((ticket) => ticket.status === "closed").length;
  const urgent = tickets.filter((ticket) => ticket.isUrgent).length;

  return (
  <DemoSection>
    <h2>Статистика обращений</h2>

    <TicketStats 
      total={total}
      active={active}
      closed={closed}
      urgent={urgent}
    />
  </DemoSection>
);

}

