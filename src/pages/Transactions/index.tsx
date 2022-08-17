import React from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header/>
            <Summary/>

           <TransactionsContainer>
            <SearchForm/>
           <TransactionsTable>
              <tbody>
                <tr>
                    <td width="50%">Desenvolvimento de site</td>
                    <PriceHighlight variant="income">R$12000.00</PriceHighlight>
                    <td>Venda</td>
                    <td>13/04/2022</td>
                </tr>
                <tr>
                    <td width="50%">Hamburger</td>
                    <PriceHighlight variant="outcome">-R$12000.00</PriceHighlight>
                    <td>Alimentação</td>
                    <td>12/04/2022</td>
                </tr>
              </tbody>
            </TransactionsTable>
           </TransactionsContainer>
        </div>
    )
}