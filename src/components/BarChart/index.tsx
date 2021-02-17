import React from 'react';
import { 
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    } from 'recharts';
import {
    Container,
    GraphContainer,
    GraphItem,
    GraphLegendContainer,
    GraphList} from './style';


interface IChildProps{
    chartName: string,
    gridArea: string,
    bgLegendColor:{
        colorOne: string,
        colorTwo: string,
    },
    color?: string,   
    data:{
        username: string,
        amount: number,
        earn: number,
        spent: number
    }[],
};

const CustomBarChart:React.FC<IChildProps> = ({ chartName,gridArea,bgLegendColor,color,data }) => {
    
    return(
        <Container gridArea={gridArea}>
            <GraphLegendContainer>
                <h1>{chartName}</h1>
                <GraphList>
                    <GraphItem color={bgLegendColor.colorOne}>
                        <span></span>
                        <p>Earns</p>      
                    </GraphItem>    
                    <GraphItem color={bgLegendColor.colorTwo}>
                        <span></span>
                        <p>Spents</p>      
                    </GraphItem>
                </GraphList>
            </GraphLegendContainer>
            <GraphContainer>
                    <ResponsiveContainer>
                        <BarChart data={data}
                                margin={{
                                    top: 5,
                                    right: 5,
                                    left: 5,
                                    bottom: 5
                                }}
                        >
                            <CartesianGrid strokeDasharray="2 2"opacity={0.25}/>
                            <XAxis dataKey={'username'}/>
                            <YAxis opacity={0.45}/>
                            <Tooltip/>
                                <Bar dataKey={'earn'} fill={bgLegendColor.colorOne}/>
                                <Bar dataKey={'spent'} fill={bgLegendColor.colorTwo}/>
                        </BarChart>
                    </ResponsiveContainer>
            </GraphContainer>
        </Container>
    )
};

export default CustomBarChart;