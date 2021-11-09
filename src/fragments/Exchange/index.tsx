import { FunctionComponent, ReactElement, useState } from "react";
import { ReactComponent as ExchangeSVG } from '../../assets/exchange.svg';
import { Container } from './style';
import { Input, Button } from '../../components';
import { useNavigate } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import { ConvertorSettings } from "../../models";
import { convertor } from '../../mobx';
import { ExchangeInput } from '../../components'
export const Exchange: FunctionComponent = observer((): ReactElement => {
    const navigate = useNavigate();

    const [settings, setSettings] = useState<ConvertorSettings>({
        from: "USD",
        to: "RUB",
        amount: 0
    })

    return (
        <>
            <Button onClick={() => navigate('/')}>Go Back</Button>
            <Container>
                <div>
                    <ExchangeInput
                        onChange={(value) => setSettings(value)}
                    />
                </div>
                <button className="exchange-svg-button" onClick={() => convertor.covert(settings)}>
                    <ExchangeSVG />
                </button>
                <div><Input value={convertor.result} disabled /></div>
            </Container>
        </>
    );
});