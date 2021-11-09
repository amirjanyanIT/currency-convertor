import { FunctionComponent, ReactElement, useEffect, useRef, useState } from "react";
import { ConvertorSettings } from "../../models";
import { CurrencyTypes } from "../../types";
import { Input } from '../Input';
import { Container } from './style';

const formattingErrorMessage = `form of input should be "value" "currency" in "currency"`;
const isFormattingValid = (text: string): false | ConvertorSettings => {
    const textParts = text.split(" ");
    if(textParts.length === 4) {
        const value = textParts[0];
        const from = textParts[1];
        const to = textParts[3];

        if(!Number(value)) {
            return false;
        }

        return {
            amount: Number(value),
            from: from as CurrencyTypes,
            to: to as CurrencyTypes
        }

    }


    return false;
}

export const ExchangeInput: FunctionComponent<{ onChange: (settings: ConvertorSettings) => void }> = ({ onChange }): ReactElement => {
    const [input, setInput] = useState<{
        value: string,
        isValid: boolean
    }>({
        value: "",
        isValid: false
    })

    useEffect(() => {
        const formattingResult = isFormattingValid(input.value);
        if(formattingResult) {
            onChange(formattingResult);
        }
    }, [input])

    return (
        <Container>
            <Input value={input?.value} onChange={({ target: { value } }) => setInput({
                value: value,
                isValid: !!isFormattingValid(value),
            })} />
            <div className="formatting-error-container">{!input.isValid ? formattingErrorMessage : null}</div>
        </Container>
    );
}