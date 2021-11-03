import Chart from "react-apexcharts";

function BarChart() {
    //inserindo a logica do grafico antes de dá o return
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]
            }
        ]
    };
    //abaixo irei retornar a estrutura jsx correspondente ao meu grafico de barras, 
    //que seria um componente que vem no ApexChart, dentro irei incorporar a variavel options e ao usar ...
    //reticiencias, quero dizer: pega tudo que tem nesse objeto, do jeito que esta e reaproveita, e irei incluir 
    //maiscoisas nesses objetos, usando o xaxis(eixo X), irei incluir os rotulos.
    //usando series irei passar os valores
    return (
        <Chart
        options={{ ...options, xaxis: mockData.labels}}
        series={mockData.series}
        type="bar"
        height="240"
        />
    );
}

export default BarChart;