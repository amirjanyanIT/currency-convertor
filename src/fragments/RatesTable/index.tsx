import { FunctionComponent, ReactElement, useState } from "react";
import { Grid, Button } from '../../components';
import { Container } from './style';
import { CourseTypes } from '../../models/CourseTypes';
import {useNavigate} from 'react-router-dom';
export const RatesTable: FunctionComponent = (): ReactElement => {
    const navigate = useNavigate();
    const [activeCourse, setActiveCourse] = useState<CourseTypes>("RUBLE");
    const handleActiveCourseChange = (newActiveCourse: CourseTypes): void => {
        if(activeCourse !== newActiveCourse) {
            setActiveCourse(newActiveCourse);
        }
    };

    return (
        <>
        <Button onClick={() => navigate('/convertor')}>Go to currency convertor</Button>
        <Container>
            <div className="actions-container">
                <Button active={activeCourse === "RUBLE"} onClick={() => handleActiveCourseChange("RUBLE")}>RUBLE</Button>
                <Button active={activeCourse === "DOLLAR"} onClick={() => handleActiveCourseChange("DOLLAR")}>DOLLAR</Button>
                <Button active={activeCourse === "EURO"} onClick={() => handleActiveCourseChange("EURO")}>EURO</Button>
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
            </Grid.container>
        </Container>
        </>
    );
}