# projeto-sds3
Semana Spring React - Episódio 1
Crie um app inédito para seu portfólio com as tecnologias mais demandadas do mercado

Realização
DevSuperior - Escola de programação

DevSuperior no Instagram DevSuperior no Youtube

Objetivos do projeto para esta aula
Criar projetos backend e frontend
Salvar os projeto no Github em monorepo
Montar o visual estático do front end
Publicar o front end no Netlify
AVISO: as aulas ficarão disponíveis somente até domingo às 23h59
Checklist
Passo 0: preparação
Dica: extensões do VS Code

Criar pastas do projeto

DevSuperior no Instagram

Conferir Yarn
yarn -v
npm install --global yarn
Passo 1: criar projetos
Criar projeto ReactJS com create-react-app:
npx create-react-app frontend --template typescript
Lembrete: excluir repositório Git do projeto ReactJS

Criar projeto Spring Boot no Spring Initializr com as seguintes dependências:

Web
JPA
H2
Postgres
Security
Se tiver com erro no pom.xml, tentar:

Botão direito no projeto -> Maven -> Update project (force update)
Menu Project -> Clean
Apagar pasta .m2 e deixar o STS refazer o download
COMMIT: Project created

Lembrete: ver extensões e arquivos ocultos

Salvar o projeto no seu Github

git config --global user.name <seu nome>
git config --global user.email <seu email>

git init

git add .

git commit -m "Project created"

git remote add origin <seu endereço>

git push -u origin main
Passo 2: "limpar" o projeto ReactJS
Limpar projeto ReactJS / tsconfig.json
Arquivo _redirects
/* /index.html 200
COMMIT: Project clean
Passo 3: adicionar Bootstrap e CSS ao projeto
Bootstrap
yarn add bootstrap
(index.tsx) import 'bootstrap/dist/css/bootstrap.css';
Assets e CSS
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
:root {
    --color-primary: #FF8400;
}

html, body {
    height: 100%;
    font-family: "Ubuntu", sans-serif;
}

#root {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.content {
    flex: 1 0 auto;
}

.footer {
    flex-shrink: 0;
    text-align: center;
}

.bg-primary {
    background-color: var(--color-primary) !important;
}

.text-primary {
    color: var(--color-primary) !important;
}
(index.tsx) import 'assets/css/styles.css';
COMMIT: Bootstrap
Passo 4: adicionar componentes estáticos básicos
Navbar
<div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
  <div className="container">
    <nav className="my-2 my-md-0 mr-md-3">
      <img src={ImgDsDark} alt="DevSuperior" width="120" />
    </nav>
  </div>
</div>
Footer
<footer className="footer mt-auto py-3 bg-dark">
  <div className="container">
    <p className="text-light">App desenvolvido por <a href="https://github.com/acenelio" target="_blank" rel="noreferrer">Nelio Alves</a></p>
    <p className="text-light"><small><strong>Semana Spring React</strong><br/>
      Evento promovido pela escola DevSuperior: <a href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">@devsuperior.ig</a></small></p>
  </div>
</footer>
DataTable
<div className="table-responsive">
    <table className="table table-striped table-sm">
        <thead>
            <tr>
                <th>Data</th>
                <th>Vendedor</th>
                <th>Clientes visitados</th>
                <th>Negócios fechados</th>
                <th>Valor</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>22/04/2021</td>
                <td>Barry Allen</td>
                <td>34</td>
                <td>25</td>
                <td>15017.00</td>
            </tr>
        </tbody>
    </table>
</div>
COMMIT: Basic static components
Passo 5: adicionar gráficos estáticos
Apex Charts
yarn add apexcharts
yarn add react-apexcharts
BarChart
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
DonutChart
const mockData = {
    series: [477138, 499928, 444867, 220426, 473088],
    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
}

const options = {
    legend: {
        show: true
    }
}
COMMIT: Static charts
Passo 6: implantação no Netlify
Deploy básico

Base directory: frontend
Build command: yarn build
Publish directory: frontend/build
Configurações adicionais

Site settings -> Domain Management: (colocar o nome que você quiser)
Deploys -> Trigger deploy
PARABÉNS!
Parabéns!

Quero muito saber seu feedback
O que você está achando da nossa abordagem?
Você está conseguindo acompanhar?
O que você está achando do evento?
Participe
Comente na página da Semana Spring React
Divulgue seu projeto no Linkedin e marque a DevSuperior
