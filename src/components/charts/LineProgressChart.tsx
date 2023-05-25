import { Box, Card, CardContent, Typography } from "@mui/material";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const LineProgressChart = () => {

  const data = [{ name: 'Sesh 1A', uv: 35, pv: 25, amt: 25 }, { name: 'Sesh 1B', uv: 42, pv: 25, amt: 25 }, { name: 'Sesh 1C', uv: 47, pv: 25, amt: 25 }, { name: 'Sesh 2A', uv: 50, pv: 25, amt: 25 }, { name: 'Sesh 2B', uv: 49, pv: 25, amt: 25 }, { name: 'Sesh 2C', uv: 55, pv: 25, amt: 25 },];

  // const data = [
  //   {
  //     name: 'Page A',
  //     uv: 4000,
  //     pv: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name: 'Page B',
  //     uv: 3000,
  //     pv: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     name: 'Page C',
  //     uv: 2000,
  //     pv: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     name: 'Page D',
  //     uv: 2780,
  //     pv: 3908,
  //     amt: 2000,
  //   },
  //   {
  //     name: 'Page E',
  //     uv: 1890,
  //     pv: 4800,
  //     amt: 2181,
  //   },
  //   {
  //     name: 'Page F',
  //     uv: 2390,
  //     pv: 3800,
  //     amt: 2500,
  //   },
  //   {
  //     name: 'Page G',
  //     uv: 3490,
  //     pv: 4300,
  //     amt: 2100,
  //   },
  // ];


  return (
    // <Card>
    //   <CardContent sx={{ m: 2 }}>
    <Box width='40vh' height='25vh'>
      <ResponsiveContainer width="100%" height="100%">
        {/* <LineChart width={350} height={200} data={data} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart> */}
        <LineChart width={350} height={200} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
          <CartesianGrid strokeDasharray="3 3" />
          {/* <XAxis dataKey="name" /> */}
          {/* <YAxis /> */}
        </LineChart>
      </ResponsiveContainer>
    </Box>
    //   </CardContent>
    // </Card>
  );
};

export default LineProgressChart;