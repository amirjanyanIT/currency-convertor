import { FunctionComponent, ReactElement, useState } from "react";
import { ReactComponent as ExchangeSVG } from '../../assets/exchange.svg';
import { Container } from './style';
import { Input, Select, Button } from '../../components';
import { useNavigate } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import { ConvertorSettings } from "../../models";
import { CurrencyTypes } from '../../models';
import { convertor } from '../../mobx';
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
                    <Input value={settings.amount} onChange={({ target }) => setSettings({ ...settings, amount: Number(target.value) })} type="number" placeholder="Write amount to exchange..." />
                    <Select
                        value={settings.from}
                        onChange={({ target }) => setSettings({ ...settings, from: target.value as CurrencyTypes })}
                    >
                        <option value="EUR">EURO</option>
                        <option value="USD">DOLLAR</option>
                        <option value="RUB">RUBLE</option>
                    </Select>
                    <Select
                        value={settings.to}
                        onChange={({ target }) => setSettings({ ...settings, to: target.value as CurrencyTypes })}
                    >
                        <option value="EUR">EURO</option>
                        <option value="USD">DOLLAR</option>
                        <option value="RUB">RUBLE</option>
                    </Select>
                </div>
                <button className="exchange-svg-button" onClick={() => convertor.covert(settings)}>
                    <ExchangeSVG />
                </button>
                <div><Input value={convertor.result} disabled /></div>
            </Container>
        </>
    );
});