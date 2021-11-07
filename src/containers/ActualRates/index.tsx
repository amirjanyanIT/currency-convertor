import { FunctionComponent, ReactElement } from "react";
import { RatesTableFragment } from '../../fragments';
import { observer } from "mobx-react-lite";
export const ActualRates: FunctionComponent = observer((): ReactElement => {
    return <RatesTableFragment />;
});