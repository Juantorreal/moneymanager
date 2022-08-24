import React, { useContext } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as z from 'zod';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../lib/axios";
import { TransactionsContext } from "../../contexts/TransactionsContext";

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {

    const {createTransaction} = useContext(TransactionsContext)
    const {control,register, handleSubmit, formState: {isSubmitting},reset} = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: 'income'
        }
    })

    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        const {description, price,category, type} = data;
        await createTransaction({
            description,
            price,
            category,
            type,
        })

        reset();

    return (
         <Dialog.Portal>
        <Overlay/>
        <Content>
           <Dialog.Title>
              Nova Transação
           </Dialog.Title>
        <CloseButton>
            <X size={24}/>
        </CloseButton>
           <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <input {...register('description')}  type="text" placeholder="Descrição" required/>
            <input {...register('price', {valueAsNumber: true})}  type="number" placeholder="Preço" required/>
            <input {...register('category')}  type="text" placeholder="Categoria" required/>


            <Controller control={control} name="type"
            render={({field}) => {
                console.log(field)
                return (
                    <TransactionType onValueChange={field.onChange} value={field.value}>
                    <TransactionTypeButton variant="income" value="income">
                        <ArrowCircleUp size={24}/>
                        Entrada
                    </TransactionTypeButton>
    
                    <TransactionTypeButton variant="outcome" value="outcome">
                        <ArrowCircleDown size={24}/>
                        Saída
                    </TransactionTypeButton>
    
                    </TransactionType> 
    
                )
            }}
            />

           
            <button type="submit" disabled={isSubmitting}>Cadastrar</button>

           </form>
          
        </Content>
     </Dialog.Portal>

    )
}}