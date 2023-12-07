import { } from "bootstrap";
import { Container } from "react-bootstrap";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { RadialBar, RadialBarChart, Cell, LabelList } from "recharts";

const GptUserDistribution = () => {
    const data = [
        {
            "age": "18-24",
            "value": 44.01
        },
        {
            "age": "25-34",
            "value": 33.52
        },
        {
            "age": "35-44",
            "value": 18.35
        },
        {
            "age": "45-54",
            "value": 11.19
        },
        {
            "age": "55-64",
            "value": 5.56
        },
        {
            "age": "65+",
            "value": 3.33
        },
    ];

    const purpose = [
        {
            "purpose": "Entertainment",
            "18-29": 33,
            "30-49": 26,
            "50+": 10,
        },
        {
            "purpose": "Learning",
            "18-29": 30,
            "30-49": 21,
            "50+": 11,
        },
        {
            "purpose": "Work",
            "18-29": 18,
            "30-49": 18,
            "50+": 10,
        },
    ];

    const impact = [
        {
            "name": "18-29",
            "value": 51,
            "fill": "#889900"
        },
        {
            "name": "30-49",
            "value": 60,
            "fill": "#FFBB28"
        },
        {
            "name": "50-64",
            "value": 51,
            "fill": "#00C49F"
        },
        {
            "name": "65+",
            "value": 44,
            "fill": "#FF8042"
        },
        {
            "name": "",
            "value": 100,
            "fill": "#FFFFFF00"
        },
    ];

    const regulation = [
        {
            name: 'Total',
            "Not Far Enough": -67,
            "Too Far": 31 
        },
        {
            name: 'Dem/Lean Dem',
            "Not Far Enough": -75,
            "Too Far": 24 
        },
        {
            name: 'Rep/Lean Rep',
            "Not Far Enough": -59,
            "Too Far": 39
        },
    ];

    // Custom label component to display absolute values
    const renderCustomBarLabel = ({ x, y, width, height, value }) => {
        return (
            <text x={x + width / 2} y={y + height / 2} fill="#fff" textAnchor="middle" dominantBaseline="middle">
                {Math.abs(value)}
            </text>
        );
    };


    return (
        <Container>
            <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <h3>ChatGPT User Age Distribution</h3>
                    <BarChart width={500} height={500} data={data}>
                        <XAxis dataKey="age" ></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                        <Bar
                            name="User age distribution"
                            dataKey="value"
                            fill="#8884d8"
                            label={{ fill: "#8884d8", position: "top" }}
                        ></Bar>
                    </BarChart>
                </div>
                <div>
                    <h3>ChatGPT Usage Purpose</h3>
                    <BarChart width={500} height={500} data={purpose}>
                        <XAxis dataKey="purpose" ></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                        <Bar
                            dataKey="18-29"
                            fill="#FFBB28"
                            label={{ fill: "#FFBB28", position: "top" }}
                        ></Bar>
                        <Bar
                            dataKey="30-49"
                            fill="#00C49F"
                            label={{ fill: "#00C49F", position: "top" }}
                        ></Bar>
                        <Bar
                            dataKey="50+"
                            fill="#FF8042"
                            label={{ fill: "#FF8042", position: "top" }}
                        ></Bar>
                    </BarChart>
                </div>
            </Container>
            <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <h3>People think jobs will be impacted</h3>
                    <RadialBarChart
                        width={500}
                        height={700}
                        innerRadius="30%"
                        outerRadius="150%"
                        data={impact}
                        startAngle={180}
                        endAngle={0}
                    >
                        <RadialBar minAngle={0} label={{ fill: '#666', position: 'middle' }} background clockWise={true} dataKey='value' >
                            {
                                data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} opacity={index === 4 ? 0 : 1} />
                                ))
                            }
                        </RadialBar>
                        <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='right' align="right" />
                        <Tooltip cursor={false} />
                    </RadialBarChart>
                </div>
                <div>
                    <h3>People think ChatGPT being regulated by Gov. </h3>
                    <BarChart layout="vertical" data={regulation} width={600} height={500} >
                        <XAxis type="number" opacity={0} />
                        <YAxis type="category" dataKey="name" width={120} />
                        <Legend>

                        </Legend>
                        {/* <ReferenceLine x={0} stroke="#000" /> */}
                        <Bar dataKey="Not Far Enough" fill="#8884d8" >
                            <LabelList dataKey="Not Far Enough" content={renderCustomBarLabel} />
                        </Bar>
                        <Bar dataKey="Too Far" fill="#82ca9d" >
                            <LabelList dataKey="Too Far" content={renderCustomBarLabel} />
                        </Bar>
                    </BarChart>
                </div>
            </Container>
        </Container>
    );
}

export default GptUserDistribution;