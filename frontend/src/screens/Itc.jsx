import { React, useState, useEffect } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import axios from "axios";
// import { useParams } from "react-router-dom";
// import sharedata from "../../stockData";
export default function Itc() {
    // const params = useParams();
    // const sharedata[5] = sharedata.find((s) => s.id === params.id);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/getItc")
            .then((response) => {
                setData(
                    response.data.map((item) => ({
                        date: new Date(item.date).toLocaleDateString(),
                        open: item.Open,
                        high: item.High,
                        low: item.Low,
                        close: item.Close,
                        volume: item.Volume,
                        tomorrow: item.Tomorrow,
                        target: item.Target,
                    }))
                );
            })
            .catch((error) => {
                console.error(
                    "There was an error fetching the graph data!",
                    error
                );
            });
    }, []);
    return (
        <section className="bgImg shareDetailsSection">
            <div className="sdmaindiv">
                <div className="sdsubdiv">
                    <div className="shareDetailsDiv">
                        <div className="sdd2">
                            {/* <img
                                src={`../../public/${sharedata[5].image}`}
                                alt={sharedata[5].shareName}
                                className="imagelogo"
                            />
                            <span>{sharedata[5].shareName}</span>
                            <span>₹ {sharedata[5].high}</span> */}
                        </div>
                    </div>
                    <div className="graph">
                        <LineChart width={400} height={200} data={data}>
                            <Line
                                type="monotone"
                                dataKey="open"
                                stroke="#8884d8"
                                dot={false}
                            />
                            <Line
                                type="monotone"
                                dataKey="high"
                                stroke="#82ca9d"
                                dot={false}
                            />
                            <Line
                                type="monotone"
                                dataKey="low"
                                stroke="#ffc658"
                                dot={false}
                            />
                            <Line
                                type="monotone"
                                dataKey="close"
                                stroke="#ff7300"
                                dot={false}
                            />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                        </LineChart>
                        <div className="selectedShareDescription">
                            {/* {sharedata[5].description} */}
                        </div>
                    </div>
                </div>
                <div className="sdnews">
                    <div className="sdnewsimage">
                        {/* {sharedata[5].gainLoss == 0 ? (
                            <img src="../../public/up.svg" alt="Image 1" />
                        ) : (
                            <img src="../../public/down.svg" alt="Image 2" />
                        )} */}
                    </div>
                </div>
            </div>
        </section>
    );
}
