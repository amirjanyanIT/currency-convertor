import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import { Grid, Button } from '../../components';
import { Container } from './style';
import { CurrencyTypes } from '../../models/CurrencyTypes';
import { useNavigate } from 'react-router-dom';
import { currencies } from '../../mobx';
import { observer } from "mobx-react-lite";
export const RatesTable: FunctionComponent = observer((): ReactElement => {
    const navigate = useNavigate();
    const [activeCourse, setActiveCourse] = useState<CurrencyTypes>("RUB");

    useEffect(() => {
        currencies.fetchCurrencies(activeCourse);
    }, [activeCourse]);

    const handleActiveCourseChange = (newActiveCourse: CurrencyTypes): void => {
        if (activeCourse !== newActiveCourse) {
            setActiveCourse(newActiveCourse);
        }
    };

    return (
        <>
            <Button onClick={() => navigate('/convertor')}>Go to currency convertor</Button>
            <Container>
                <div className="actions-container">
                    <Button active={activeCourse === "RUB"} onClick={() => handleActiveCourseChange("RUB")}>RUBLE</Button>
                    <Button active={activeCourse === "USD"} onClick={() => handleActiveCourseChange("USD")}>DOLLAR</Button>
                    <Button active={activeCourse === "EUR"} onClick={() => handleActiveCourseChange("EUR")}>EURO</Button>
                </div>
                <Grid.container>
                    <Grid.row heading>
                        <Grid.col>
                            Currency
                        </Grid.col>
                        <Grid.col>
                            Difference
                        </Grid.col>
                    </Grid.row>
                    {currencies.currencies.map((currency, index) => (
                        <Grid.row heading key={index}>
                            <Grid.col>
                                {currency.currency}
                            </Grid.col>
                            <Grid.col>
                                {currency.value}
                            </Grid.col>
                        </Grid.row>
                    ))}
                </Grid.container>
            </Container>
        </>
    );
})