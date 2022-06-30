import React from 'react'
import { useState } from "react"
import { Button } from "./components/button";
import styled from 'styled-components';
import Select from 'react-select'

const Container = styled.div`
    padding: 12px 64px;
`

const Label = styled.label`
  display: flex;
  color: #757575;
  font-size: 14px;
  font-weight: bold;
`

const Input = styled.input`
  border-radius: 3px;
  padding: 4px 8px;
  border: 1px solid black;
`

const ButtonContainer = styled.div`
  margin-top: 24px;
`

const FormButton = styled(Button)`
  width: 120px;
`

export const Form = ({ onAddLang }) => {
    const [text, setText] = useState('');

    const submitform = (event) => {
        event.preventDefault();
        onAddLang(text);
    }

const optionsCategory = [
    { value: 'a', label: 'Aカテゴリー' },
    { value: 'b', label: 'Bカテゴリー' },
    { value: 'c', label: 'Cカテゴリー' },
    { value: 'd', label: 'Dカテゴリー' },
    ]

    const optionsStore = [
        { value: 'X', label: 'X会社' },
        { value: 'Y', label: 'Yカンパニー' },
        { value: 'Z', label: '株式会社Z' },
        ]

    return (
        <Container>
            <h4>新しい商品の登録をします</h4>
            <form onSubmit={submitform}>
                <div>
                    <Label>商品名</Label>
                    <Input type="text" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                    />
                    <Label>カテゴリー</Label>
                        <Select options={optionsCategory} />
                    <Label>発注先</Label>
                        <Select options={optionsStore} />    
                </div>
                <ButtonContainer>
                    <FormButton>追加</FormButton>
                </ButtonContainer>
            </form>
        </Container>
    )
}