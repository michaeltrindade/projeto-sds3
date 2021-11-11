export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

//Acima estou usando duas interrogações, chama-se operador de coalecencia nula.
//significa que se esta variável não estiver definida no ambiente onde aplicação estiver rodando, 
//por exemplo, ela nao esta definida, então se ela nao estiver definida eu vou pegar o valor 
//que estiver a direita, dessa forma ira poder rodar localmente ou no netlify, se comunicando com o endereço do backend