import { Sumary } from "../Sumary";
import { TransactiosTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Sumary/>
            <TransactiosTable />
        </Container>
    ) 
}
