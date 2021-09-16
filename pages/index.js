import styles from "../styles/Home.module.css";
import { Header } from "../components/Header";
import { Balance } from "../components/Balance";
import { IncomeExpenses } from "../components/IncomeExpenses";
import { TransactionList } from "../components/TransactionList";
import { AddTransaction } from "../components/AddTransaction";
import { GlobalProvider } from "../context/GlobalState";

export default function Home() {
  return (
    <div className={styles.container}>
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance className="balance" />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </div>
  );
}
