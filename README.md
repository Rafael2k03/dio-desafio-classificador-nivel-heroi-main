# Classificador de Nível de Herói

Este é um projeto desenvolvido como parte do desafio da DIO (Digital Innovation One), chamado Classificador de Nível de Herói. O objetivo é utilizar conceitos de programação para classificar heróis em diferentes níveis, de acordo com a quantidade de experiência (XP) acumulada.

## 🚀 Descrição do Desafio

O desafio consiste em criar um programa que classifique o herói em diferentes níveis de acordo com sua quantidade de XP. A classificação segue os seguintes critérios:

- XP menor do que 1.000: **Ferro**
- XP entre 1.001 e 2.000: **Bronze**
- XP entre 2.001 e 5.000: **Prata**
- XP entre 6.001 e 7.000: **Ouro**
- XP entre 7.001 e 8.000: **Platina**
- XP entre 8.001 e 9.000: **Ascendente**
- XP entre 9.001 e 10.000: **Imortal**
- XP maior ou igual a 10.001: **Radiante**

## 📋 Funcionalidades

- Recebe o nome do herói e a quantidade de XP.
- Aplica um multiplicador de XP através de um loop.
- Classifica o herói em um dos níveis definidos.
- Exibe a mensagem: "O Herói de nome {nome} está no nível de {nivel}".

## 🛠️ Tecnologias Utilizadas

- **JavaScript**: Para toda a lógica de programação.
- **Node.js** (opcional): Se quiser rodar o script em um ambiente local de desenvolvimento.

## 📝 Instruções de Uso

Clone este repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
Navegue até o diretório do projeto:
cd classificador-nivel-heroi
Execute o arquivo JavaScript (caso esteja utilizando Node.js):
node classificador.js
O programa irá calcular e exibir a classificação do herói de acordo com a XP acumulada.

🔥 Exemplo de Saída
bash
Copiar código
Oi
XP do Herói: 1200
XP do Herói: 1440
XP do Herói: 1728
XP do Herói: 2073.6
XP do Herói: 2488.32
O Herói de nome Diosteles está no nível: Prata
🏆 Aprendizados
Este desafio ajudou a consolidar os seguintes conceitos:

Uso de variáveis e operadores.
Laços de repetição para aplicar cálculos iterativos.
Estruturas de decisão para implementar a lógica de classificação.
Manipulação de strings e saída no console.
🤝 Contribuição
Sinta-se à vontade para forkar o projeto, criar issues ou enviar pull requests com melhorias e sugestões.

📜 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.