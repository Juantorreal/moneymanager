import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from '../../assets/logo.svg'
import React from "react";

export function Header() {
    return (
       <HeaderContainer>
         <HeaderContent>
            <img src={logoImg} alt=""/>
            <NewTransactionButton>Nova Transação</NewTransactionButton>

         </HeaderContent>
       </HeaderContainer>
    )
}