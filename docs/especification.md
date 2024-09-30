# Especificações do Projeto

Queremos entender como podemos tornar o planejamento de viagens mais fácil e prazeroso para nossos usuários. Nesta seção, vamos explorar as necessidades e expectativas dos viajantes através da criação de personas que representam diferentes perfis de usuários. Histórias de usuários serão utilizadas para visualizar como essas personas interagem com o fórum em diversas situações. Com base nessas informações, definiremos os requisitos funcionais e não funcionais que o site deve atender, garantindo uma experiência de usuário positiva e personalizada.

## Personas

Utilizando essas personas, podemos: Criar tópicos e categorias relevantes, por exemplo, um fórum com categorias como "Viagens Econômicas", "Viagens em Família", "Viagens de Luxo", "Viagens Sustentáveis" e "Viagens Acessíveis". 
Desenvolver ferramentas de busca que permitam aos usuários localizar destinos com base em seus critérios específicos.
Oferecer recomendações personalizadas utilizando algoritmos para sugerir destinos e atividades com base no perfil do usuário.
Criar uma comunidade engajada em promover a troca de experiências e dicas entre os usuários.

João, 25 anos, estudante, é um Mochileiro Econômico à procura de destinos baratos e com muitas opções de hospedagem econômica (hostels, albergues), transporte público eficiente e acessível. Atividades gratuitas ou de baixo custo, segurança em locais com grande concentração de jovens, informações sobre como economizar durante a viagem (alimentação, passeios, etc.).
Ana, 38 anos, professora, casada, com dois filhos (8 e 10 anos), busca destinos seguros e com atividades para crianças (parques, museus interativos), hospedagem confortável e com boa localização, opções de alimentação variada e saudável, transporte privado ou com fácil acesso a pontos turísticos, além de informações sobre eventos e festivais locais.
Pedro, 45 anos, empresário, procura destinos exclusivos e com experiências únicas, hospedagem de alto padrão (hotéis boutique, resorts), gastronomia refinada e restaurantes com estrela Michelin, transporte privado e serviços personalizados, bem como informações sobre eventos culturais e sociais.
Maria, 30 anos, designer gráfica, procura destinos com foco em sustentabilidade e preservação ambiental, hospedagens ecológicas e com práticas sustentáveis, atividades ao ar livre e contato com a natureza, transporte público ou alternativas ecológicas (bicicleta, caminhada), informações sobre produtos locais e comércio justo.
Carlos, 55 anos, aposentado, procura destinos acessíveis com rampas, elevadores e banheiros adaptados, hospedagens com quartos adaptados para pessoas com mobilidade reduzida, transporte adaptado e com fácil acesso a pontos turísticos, informações sobre serviços de assistência médica e seguro-viagem.

## Histórias de Usuários

Como usuário, gostaria de me cadastrar no site para publicar dúvidas e responder outros usuários.
Como usuário, gostaria de buscar destinos de viagem através de notas dentro de categoria para agilizar e facilitar o planejamento da minha viagem.
Como usuário, gostaria de criar um tópico perguntando sobre aspectos gerais e específicos de um determinado destino para planejar melhor minha próxima viagem.
Como usuário, gostaria de responder e comentar publicações de outras pessoas, para ajudá-las no planejamento de suas viagens.
Como administrador do sistema, gostaria de ver todos os usuários cadastrados para ter maior controle do acesso ao site.

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|usuário  | gostaria de me cadastrar no site para publicar dúvidas e responder outros usuários           | interagir e ajudar outros usuários               |
|Usuário       | gostaria de buscar destinos de viagem através de notas dentro de categoria                 | agilizar e facilitar o planejamento da minha viagem |
|Usuário       | gostaria de criar um tópico perguntando sobre aspectos gerais e específicos de um determinado destino                 | planejar melhor minha próxima viagem |
|Usuário       | gostaria de responder e comentar publicações de outras pessoas                 | ajudá-las no planejamento de suas viagens |
|Administrador       | gostaria de responder e comentar publicações de outras pessoas               | ter maior controle do acesso ao site |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| O usuário deverá ser capaz de cadastrar-se | ALTA |  
|RF-002| O usuário deverá ser capaz de fazer login   | ALTA | 
|RF-003| O usuário deverá ser capaz de postar review/comentário   | ALTA | 
|RF-004| O usuário deverá ser capaz de pesquisar um destino pelo nome da cidade   | MÉDIA | 
|RF-005| O usuário deverá ser capaz de favoritar um destino   | BAIXA | 
|RF-006| O usuário deverá ser capaz de filtrar um destino por nota em uma ou mais categoria    | BAIXA | 


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser responsiva | MÉDIA | 
|RNF-002| Informações de cadastro deverão ser salvas no local storage |  MÉDIA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
