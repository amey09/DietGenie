import React, {useRef} from 'react'
import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Center, Flex,
    Heading,
    Table,
    TableContainer, Tbody,
    Td,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import {motion,useScroll} from "framer-motion";

export default function DietPlanScreen() {

    const DietPlan = {
        "Monday": {
            "Breakfast": [
                {
                    "Food": "Eggs",
                    "Protein": 6.5,
                    "Carbs": 0.4,
                    "Fats": 5
                },
                {
                    "Food": "Turkey Bacon",
                    "Protein": 5,
                    "Carbs": 0.3,
                    "Fats": 3
                },
                {
                    "Food": "Oatmeal",
                    "Protein": 5,
                    "Carbs": 27,
                    "Fats": 3
                }
            ],
            "Lunch": [
                {
                    "Food": "Chicken Sandwich",
                    "Protein": 23,
                    "Carbs": 46,
                    "Fats": 10
                },
                {
                    "Food": "Spinach Salad",
                    "Protein": 2.4,
                    "Carbs": 5.3,
                    "Fats": 0.2
                },
                {
                    "Food": "Strawberries",
                    "Protein": 0.5,
                    "Carbs": 11.7,
                    "Fats": 0.3
                }
            ],
            "Dinner": [
                {
                    "Food": "Salmon",
                    "Protein": 22,
                    "Carbs": 0,
                    "Fats": 13
                },
                {
                    "Food": "Quinoa",
                    "Protein": 8,
                    "Carbs": 21.3,
                    "Fats": 2
                },
                {
                    "Food": "Green Beans",
                    "Protein": 3.4,
                    "Carbs": 7.3,
                    "Fats": 0.2
                }
            ]
        }
        // "Tuesday": {
        //     "Breakfast": [
        //         {
        //             "Food": "Yogurt and Granola",
        //             "Protein": 10,
        //             "Carbs": 27,
        //             "Fats": 5
        //         },
        //         {
        //             "Food": "Boiled Eggs",
        //             "Protein": 13,
        //             "Carbs": 0.7,
        //             "Fats": 10
        //         },
        //         {
        //             "Food": "Fruit Smoothie",
        //             "Protein": 4,
        //             "Carbs": 30,
        //             "Fats": 0
        //         }
        //     ],
        //     "Lunch": [
        //         {
        //             "Food": "Sausage and Peppers",
        //             "Protein": 13,
        //             "Carbs": 10,
        //             "Fats": 19
        //         },
        //         {
        //             "Food": "Kale Salad",
        //             "Protein": 2.4,
        //             "Carbs": 5.3,
        //             "Fats": 0.2
        //         },
        //         {
        //             "Food": "Apple",
        //             "Protein": 0,
        //             "Carbs": 13.9,
        //             "Fats": 0.4
        //         }
        //     ],
        //     "Dinner": [
        //         {
        //             "Food": "Beef Burger",
        //             "Protein": 22,
        //             "Carbs": 28,
        //             "Fats": 10
        //         },
        //         {
        //             "Food": "Potatoes",
        //             "Protein": 2.4,
        //             "Carbs": 22,
        //             "Fats": 0.2
        //         },
        //         {
        //             "Food": "Broccoli",
        //             "Protein": 2.6,
        //             "Carbs": 6.6,
        //             "Fats": 0.4
        //         }
        //     ]
        // },
        // "Wednesday": {
        //     "Breakfast": [
        //         {
        //             "Food": "Pancakes",
        //             "Protein": 10,
        //             "Carbs": 27,
        //             "Fats": 6
        //         },
        //         {
        //             "Food": "Scrambled Eggs",
        //             "Protein": 5,
        //             "Carbs": 0.8,
        //             "Fats": 4
        //         },
        //         {
        //             "Food": "Blueberry",
        //             "Protein": 0.3,
        //             "Carbs": 14.3,
        //             "Fats": 0.2
        //         }
        //     ],
        //     "Lunch": [
        //         {
        //             "Food": "Grilled Chicken Sandwich",
        //             "Protein": 24,
        //             "Carbs": 48,
        //             "Fats": 10
        //         },
        //         {
        //             "Food": "Caesar Salad",
        //             "Protein": 2.2,
        //             "Carbs": 4.5,
        //             "Fats": 0.8
        //         },
        //         {
        //             "Food": "Carrot",
        //             "Protein": 0.7,
        //             "Carbs": 8.5,
        //             "Fats": 0.1
        //         }
        //     ],
        //     "Dinner": [
        //         {
        //             "Food": "Steak",
        //             "Protein": 24,
        //             "Carbs": 0,
        //             "Fats": 13
        //         },
        //         {
        //             "Food": "Brown Rice",
        //             "Protein": 5,
        //             "Carbs": 44,
        //             "Fats": 1.5
        //         },
        //         {
        //             "Food": "Asparagus",
        //             "Protein": 2.9,
        //             "Carbs": 3.7,
        //             "Fats": 0.2
        //         }
        //     ]
        // },
        // "Thursday": {
        //     "Breakfast": [
        //         {
        //             "Food": "Protein Shake",
        //             "Protein": 20,
        //             "Carbs": 21,
        //             "Fats": 4
        //         },
        //         {
        //             "Food": "Hard Boiled Egg",
        //             "Protein": 7,
        //             "Carbs": 0.4,
        //             "Fats": 5
        //         },
        //         {
        //             "Food": "Banana",
        //             "Protein": 1,
        //             "Carbs": 23,
        //             "Fats": 0.3
        //         }
        //     ],
        //     "Lunch": [
        //         {
        //             "Food": "Grilled Fish",
        //             "Protein": 22,
        //             "Carbs": 4,
        //             "Fats": 8
        //         },
        //         {
        //             "Food": "Kicked Feta and Quinoa Salad",
        //             "Protein": 8.3,
        //             "Carbs": 24.4,
        //             "Fats": 12.9
        //         },
        //         {
        //             "Food": "Orange",
        //             "Protein": 0.9,
        //             "Carbs": 10.5,
        //             "Fats": 0.2
        //         }
        //     ],
        //     "Dinner": [
        //         {
        //             "Food": "Grilled Pork Chops",
        //             "Protein": 23,
        //             "Carbs": 0,
        //             "Fats": 9
        //         },
        //         {
        //             "Food": "Sweet Potatoes",
        //             "Protein": 2.5,
        //             "Carbs": 24,
        //             "Fats": 0.3
        //         },
        //         {
        //             "Food": "Beets",
        //             "Protein": 1.7,
        //             "Carbs": 8.8,
        //             "Fats": 0.2
        //         }
        //     ]
        // },
        // "Friday": {
        //     "Breakfast": [
        //         {
        //             "Food": "Smoothie Bowl",
        //             "Protein": 10,
        //             "Carbs": 25,
        //             "Fats": 5
        //         },
        //         {
        //             "Food": "Poached Egg",
        //             "Protein": 6,
        //             "Carbs": 0.4,
        //             "Fats": 4
        //         },
        //         {
        //             "Food": "Mixed Nuts",
        //             "Protein": 16,
        //             "Carbs": 15,
        //             "Fats": 19
        //         }
        //     ],
        //     "Lunch": [
        //         {
        //             "Food": "Chicken Salad",
        //             "Protein": 23,
        //             "Carbs": 28,
        //             "Fats": 10
        //         },
        //         {
        //             "Food": "Cucumber Salad",
        //             "Protein": 0.6,
        //             "Carbs": 3.6,
        //             "Fats": 0.2
        //         },
        //         {
        //             "Food": "Grapes",
        //             "Protein": 0.6,
        //             "Carbs": 18.1,
        //             "Fats": 0.2
        //         }
        //     ],
        //     "Dinner": [
        //         {
        //             "Food": "Tuna",
        //             "Protein": 22,
        //             "Carbs": 0,
        //             "Fats": 6
        //         },
        //         {
        //             "Food": "Couscous",
        //             "Protein": 6,
        //             "Carbs": 54.2,
        //             "Fats": 2.8
        //         },
        //         {
        //             "Food": "Brussels Sprouts",
        //             "Protein": 3.3,
        //             "Carbs": 7.2,
        //             "Fats": 0.4
        //         }
        //     ]
        // },
        // "Saturday": {
        //     "Breakfast": [
        //         {
        //             "Food": "Porridge",
        //             "Protein": 7,
        //             "Carbs": 27.9,
        //             "Fats": 2.9
        //         },
        //         {
        //             "Food": "Ground Beef",
        //             "Protein": 20,
        //             "Carbs": 0,
        //             "Fats": 12
        //         },
        //         {
        //             "Food": "Strawberry",
        //             "Protein": 0.7,
        //             "Carbs": 8,
        //             "Fats": 0.3
        //         }
        //     ],
        //     "Lunch": [
        //         {
        //             "Food": "Turkey Wrap",
        //             "Protein": 28,
        //             "Carbs": 53,
        //             "Fats": 12
        //         },
        //         {
        //             "Food": "Cabbage and Carrot Salad",
        //             "Protein": 2.1,
        //             "Carbs": 8.7,
        //             "Fats": 0.4
        //         },
        //         {
        //             "Food": "Apple",
        //             "Protein": 0,
        //             "Carbs": 13.9,
        //             "Fats": 0.4
        //         }
        //     ],
        //     "Dinner": [
        //         {
        //             "Food": "Steak",
        //             "Protein": 24,
        //             "Carbs": 0,
        //             "Fats": 13
        //         },
        //         {
        //             "Food": "Baked Potato",
        //             "Protein": 3,
        //             "Carbs": 37,
        //             "Fats": 0.3
        //         },
        //         {
        //             "Food": "Mushrooms",
        //             "Protein": 3.3,
        //             "Carbs": 3.3,
        //             "Fats": 0.2
        //         }
        //     ]
        // },
        // "Sunday": {
        //     "Breakfast": [
        //         {
        //             "Food": "Yogurt Parfait",
        //             "Protein": 14,
        //             "Carbs": 31,
        //             "Fats": 6
        //         },
        //         {
        //             "Food": "Ham",
        //             "Protein": 16,
        //             "Carbs": 0.5,
        //             "Fats": 10
        //         },
        //         {
        //             "Food": "Pineapple",
        //             "Protein": 0.5,
        //             "Carbs": 13.2,
        //             "Fats": 0.2
        //         }
        //     ],
        //     "Lunch": [
        //         {
        //             "Food": "Grilled Chicken Breast",
        //             "Protein": 25,
        //             "Carbs": 0,
        //             "Fats": 5
        //         },
        //         {
        //             "Food": "Kale-Quinoa Combo",
        //             "Protein": 8.9,
        //             "Carbs": 42.4,
        //             "Fats": 5.3
        //         },
        //         {
        //             "Food": "Pear",
        //             "Protein": 0.4,
        //             "Carbs": 12.7,
        //             "Fats": 0.2
        //         }
        //     ],
        //     "Dinner": [
        //         {
        //             "Food": "Grilled Salmon",
        //             "Protein": 22,
        //             "Carbs": 0,
        //             "Fats": 13
        //         },
        //         {
        //             "Food": "Wild Rice",
        //             "Protein": 6,
        //             "Carbs": 25,
        //             "Fats": 2
        //         },
        //         {
        //             "Food": "Green Beans",
        //             "Protein": 3.4,
        //             "Carbs": 7.3,
        //             "Fats": 0.2
        //         }
        //     ]
        // }
    }

    const MealCard = ({ day, meals }) => {
        return (
            <Table>
                <Thead>
                    <Th>Meals</Th>
                    <Th>Food Items</Th>
                    <Th>Macros (Protein, Carbs, Fats)</Th>
                </Thead>
                <Tbody>
                    {meals.map(meal => (
                        <Tr key={meal}>
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
                                            <div style={{ marginBottom: '0.3em' }}>{item.Protein}g</div>
                                            <div style={{ marginBottom: '0.3em' }}>{item.Carbs}g</div>
                                            <div style={{ marginBottom: '0.3em' }}>{item.Fats}g</div>
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
            <Box minHeight={'5rem'} backgroundColor={'lightcoral'}/>
            <Center h={"calc(100vh - 5rem)"} backgroundImage={'/fruits.png'} backgroundSize={'cover'}>
                {Object.keys(DietPlan).map(day => (
                    <motion.div>
                        <Card
                            position={'relative'}
                            width={'50rem'}
                            height={'31rem'}
                            transform="translateX(+28%)"
                            padding={'0.7rem'}
                        >
                            <CardHeader>
                                <Heading as={"h2"}>{day}</Heading>
                            </CardHeader>
                            <CardBody>
                                <MealCard day={day} meals={["Breakfast", "Lunch", "Dinner"]} />
                            </CardBody>
                        </Card>
                    </motion.div>
                ))}
            </Center>
        </>
    )
}
