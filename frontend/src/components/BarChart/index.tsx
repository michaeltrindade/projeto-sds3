import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { SaleSuccess } from "types/sale";
import { round } from "utils/format";
import { BASE_URL } from "utils/requests";

//buscando os dados do backend com a definição do tipo abaixo
type SeriesData = {
    name: string;
    data: number[];
}
type ChartData = {
    labels: {
        categories: string[];
    };
    series: SeriesData[];
}

function BarChart() {
//consmindo os dados da API
    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []
            }
        ]
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/success-by-seller`)
            .then(response => {

                const data = response.data as SaleSuccess[];
                const myLabels = data.map(x => x.sellerName);
                const mySeries = data.map(x => round(100.0 * x.deals / x.visited, 1));

                setChartData({
                    labels: {
                        categories: myLabels
                    },
                    series: [
                        {
                            name: "% Success",
                            data: mySeries
                        }
                    ]
                });
            })
    }, []);

    //inserindo a logica do grafico antes de dá o return
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    
    //abaixo irei retornar a estrutura jsx correspondente ao meu grafico de barras, 
    //que seria um componente que vem no ApexChart, dentro irei incorporar a variavel options e ao usar ...
    //reticiencias, quero dizer: pega tudo que tem nesse objeto, do jeito que esta e reaproveita, e irei incluir 
    //maiscoisas nesses objetos, usando o xaxis(eixo X), irei incluir os rotulos.
    //usando series irei passar os valores
    return (
        <Chart
            options={{ ...options, xaxis: chartData.labels }}
            series={chartData.series}
            type="bar"
            height="240"
        />
    );
}

export default BarChart;