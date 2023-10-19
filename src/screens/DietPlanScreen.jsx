import React from 'react'
import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Center,
    Heading,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import {useSelector} from "react-redux";
import Slider from 'react-slick';
export default function DietPlanScreen() {

    const DietPlan = useSelector(state => state.dietPlanStore.dietPlan);

    const settings = {
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const MealCard = ({ day, meals }) => {

        if (!DietPlan[day]) {
            return null;
        }

        return (
            <Table>
                <Thead>
                    <Tr>
                        <Th padding={" sm: 0, md: 0, lg: 0"}>Meals</Th>
                        <Th>Food Items</Th>
                        <Th>Macros (Protein, Carbs, Fats)</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {meals.map(meal => (
                        <Tr key={`${day}-${meal}`}>
                            <Th>{meal}</Th>
                            <Td>
                                <ul style={{ listStyle: 'none', padding: '0' }}>
                                    {DietPlan[day][meal].map(item => (
                                        <li style={{ marginBottom: '0.25em' }} key={item.Food}>{item.Food}</li>
                                    ))}
                                </ul>
                            </Td>
                            <Td>
                                <ul style={{ listStyle: 'none', padding: '0', fontFamily: 'monospace' }}>
                                    {DietPlan[day][meal].map(item => (
                                        <li key={item.Food} style={{ display: 'inline-block', marginRight: '5em' }}>
                                            <div style={{ marginBottom: '0.3em' }}>{item.Protein}</div>
                                            <div style={{ marginBottom: '0.3em' }}>{item.Carbs}</div>
                                            <div style={{ marginBottom: '0.3em' }}>{item.Fats}</div>
                                        </li>
                                    ))}
                                </ul>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        );
    };

    return (
        <>
            <Box minHeight={'5rem'} backgroundColor={'lightcoral'} />
            <Center h={"calc(100vh - 5rem)"} backgroundImage={'/fruits.png'} backgroundSize={'cover'} display={"flex"} alignItems={'center'} justifyContent={"center"}>
                <Slider {...settings}>
                    {Object.keys(DietPlan).map(day => (
                        <div key={day}>
                            <Card
                                width={'50rem'}
                                height={'31rem'}
                                padding={'0.7rem'}
                            >
                                <CardHeader>
                                    <Heading as={"h2"}>{day}</Heading>
                                </CardHeader>
                                <CardBody>
                                    <MealCard day={day} meals={["Breakfast", "Lunch", "Dinner"]} />
                                </CardBody>
                            </Card>
                        </div>
                    ))}
                </Slider>
            </Center>
        </>

    )
}
