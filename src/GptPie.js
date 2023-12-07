import React, { PureComponent } from 'react';
import { Container } from "react-bootstrap";
import { PieChart, Pie, Cell, Tooltip, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend } from 'recharts';

const GptPie = () => {
    const data = [
        { "name": "Misc", "value": 103 },
        { "name": "Online Shopping", "value": 79 },
        { "name": "Data & Research", "value": 73 },
        { "name": "Web Development", "value": 64 },
        { "name": "Marketing and SEO", "value": 48 },
        { "name": "Travel and Tourism", "value": 48 },
        { "name": "Entertainment", "value": 44 },
        { "name": "AI Dev. Tools", "value": 43 },
        { "name": "Online Learning", "value": 41 },
        { "name": "Job Search", "value": 36 },
        { "name": "Web Content Access", "value": 35 },
        { "name": "Gaming", "value": 34 },
        { "name": "Crypto & NFTs", "value": 29 },
        { "name": "Academic Research", "value": 26 },
        { "name": "Automation & Integration", "value": 26 },
        { "name": "Investment & Trading", "value": 20 },
        { "name": "News Aggregators", "value": 20 },
        { "name": "Real Estate", "value": 18 },
        { "name": "Video Analysis", "value": 17 },
        { "name": "Audio & Music", "value": 17 },
        { "name": "Company Information", "value": 17 },
        { "name": "Document Formatting", "value": 16 },
        { "name": "Weather & Climate", "value": 15 },
        { "name": "Image Generation", "value": 14 },
        { "name": "Food and Drinks", "value": 13 },
        { "name": "Finance", "value": 12 },
        { "name": "Legal Consultation", "value": 12 },
        { "name": "Fitness and Wellness", "value": 12 },
        { "name": "PDF Conversations", "value": 11 }
    ];

    const top10 = data.slice(0, 10);
    const otherValue = data.slice(10).reduce((acc, curr) => acc + curr.value, 0);
    top10.push({ name: 'Other', value: otherValue });

    const reliablity = [
        {
            "catgegory": "Question Accuracy",
            "GPT-4": 82.4,
            "GPT-3.5": 65.9,
            "Abbv": "Q. Accu."
        },
        {
            "catgegory": "Response Time",
            "GPT-4": 28.2,
            "GPT-3.5": 70.5,
            "Abbv": "Resp. Time"
        },
        {
            "catgegory": "Consistency",
            "GPT-4": 92.1,
            "GPT-3.5": 91.7,
            "Abbv": "Const."
        },
        {
            "catgegory": "Radiologic Accuracy",
            "GPT-4": 98.4,
            "GPT-3.5": 88.9,
            "Abbv": "Radio. Accu."
        },
        {
            "catgegory": "Ophthalmology Accuracy",
            "GPT-4": 73.2,
            "GPT-3.5": 55.5,
            "Abbv": "Oph. Accu",
        },
        {
            "catgegory": "Multilingual Tasks",
            "GPT-4": 85.5,
            "GPT-3.5": 70.1,
            "Abbv": "MultiTasks",
        },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#889900', "#3542F5"];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + outerRadius + 25;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        const name = top10[index].name;
        const CHAR_LIMIT = 12; // Character limit for each line
        let nameLine1 = name;
        let nameLine2 = '';

        if (name.length > CHAR_LIMIT) {
            // Find the space closest to the middle of the string to break the line
            const breakIndex = name.substring(0, CHAR_LIMIT).lastIndexOf(' ');
            nameLine1 = name.substring(0, breakIndex);
            nameLine2 = name.substring(breakIndex + 1);
        }

        return (
            <text x={x} y={y} fill={COLORS[index % COLORS.length]} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                <tspan x={x} dy="0">{nameLine1}</tspan>
                {nameLine2 && <tspan x={x} dy="1.2em">{nameLine2}</tspan>}

            </text>
        );
    };

    const CustomTooltip = ({ active, payload, label }) => {
        const desc = reliablity.find(x => x.Abbv === label);
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="label">GPT-4 {payload[0].value}</p>
                    <p className="label">GPT-3.5 {payload[1].value}</p>
                    <p className="desc">{desc.catgegory}</p>
                </div>
            );
        }

        return null;
    };

    return (
        <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <h3>ChatGPT Plugin Categories</h3>
                <PieChart width={500} height={500}>
                    <Pie data={top10} dataKey="value" nameKey="name" cx="60%" cy="50%" outerRadius="60%" fill="#8884d8" label={renderCustomizedLabel} paddingAngle={0.5} >
                        {top10.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip></Tooltip>
                </PieChart>
            </div>
            <div>
                <h3>ChatGPT Reliability</h3>
                <RadarChart outerRadius="80%" width={500} height={500} data={reliablity}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="Abbv" orient="right" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar name="GPT-4" dataKey="GPT-4" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name="GPT-3.5" dataKey="GPT-3.5" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                    <Legend />
                    <Tooltip content={<CustomTooltip />} ></Tooltip>
                </RadarChart>
            </div>
        </Container>
    );
}

export default GptPie;