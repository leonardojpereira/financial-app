import { FormContainer, InputContainer, Label, Input, Button} from './style';

export default function Form() {
    return(
        <FormContainer>
            <InputContainer>
                <Label display="block" for="name">Receita/Despesa</Label>
                <Input placeholder="Nome" type="text" name="name" id="name"/>
            </InputContainer>
            <InputContainer>
                <Label display="block" for="value">Valor</Label>
                <Input placeholder="Valor R$" type="number" name="value" id="value"/>
            </InputContainer>
            <InputContainer marginTop="18px">
                <Label for="entry">Entrada</Label>
                <Input placeholder="Valor R$" type="checkbox" name="type" id="entry"/>
            </InputContainer>
            <InputContainer marginTop="18px" display="flex">
                <Label for="out">Saída</Label>
                <Input placeholder="Valor R$" type="checkbox" name="type" id="out"/>
            </InputContainer>
            <Button type="submit">Enviar</Button>
        </FormContainer>

    );
}