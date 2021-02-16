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
    colorData:{
        colorOne: string,
        colorTwo: string
    },
    data:[];
};

const CustomBarChart:React.FC<IChildProps> = ({ chartName,gridArea,colorData,data }) => {
    
    return(
        <Container gridArea={gridArea}>
            <GraphLegendContainer>
                <h1>{chartName}</h1>
                <GraphList>
                    {
                        !!data ? 
                        data.map(item => {
                            return(
                            <GraphItem bgLegendColor={colorData}>
                                <span></span>
                                <p>{item}</p>      
                            </GraphItem>)    
                        }) :
                        <GraphItem bgLegendColor={colorData}>
                                <span></span>
                                <p>No Data</p>      
                        </GraphItem>
                    }
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
                        }}>
                            <CartesianGrid strokeDasharray="5 5"/>
                            <XAxis dataKey={''}/>
                            <YAxis/>
                            <Tooltip/> 
                            <Bar dataKey={''} fill={colorData.colorOne}/>
                            <Bar dataKey={''} fill={colorData.colorTwo}/>                                       
                        </BarChart>
                    </ResponsiveContainer>
            </GraphContainer>
        </Container>
    )
};

export default CustomBarChart;