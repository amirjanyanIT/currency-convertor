import { FunctionComponent, ReactElement } from "react";
import { ReactComponent as ExchangeSVG } from '../../assets/exchange.svg';
import { Container } from './style';
import { Input, Select, Button } from '../../components';
import { useNavigate } from "react-router-dom";

export const Exchange: FunctionComponent = (): ReactElement => {
    const navigate = useNavigate();
    return (
        <>
        <Button onClick={() => navigate('/')}>Go Back</Button>
        <Container>
            <div>
                <Input type="number" placeholder="Write amount to exchange..." />
                <Select>
                    <option>-- Base Currency --</option>
                </Select>
                <Select>
                    <option>-- Exchange Currency --</option>
                </Select>
            </div>
            <button className="exchange-svg-button">
                <ExchangeSVG />
            </button>
            <div><Input placeholder="0" disabled /></div>
        </Container>
        </>
    );
}