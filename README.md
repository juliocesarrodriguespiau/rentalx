# Cadastro do Carro

**RF**
Deve ser possível cadastrar um novo carro.

**RN**
Não deve ser possível cadastrar um novo carro com uma placa já existente.
O carro deve ser cadastrado, por padrão, com disponibilidade.
*** O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de Carros

**RF**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listat todos os carros disponíveis pelo nome da categoria.
Deve ser possível listat todos os carros disponíveis pelo nome da marcar.
Deve ser possível listat todos os carros disponíveis pelo nome da carro.

**RN**
O usuário não precisa estar logado no sistema.

# Cadastro de especificação do carro

**RF**
Deve ser possível cadastrar uma especificação para um carro

**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**RF**
Deve ser possível cadastrar a imagem do carro
Deve ser possível listar todos os carros

**RNF**
Utilizar o multer para upload de arquivos

**RN**
O usuário de poder cadastrar mais de uma imagem para o mesmo carro
O usuário responsável pelo cadastro deve ser um usuário administrador.

# ALuguel de Carro

**RF**
Deve ser possível cadastar um aluguel

**RNF**

**RN**
O aluguel deve ter duração mínima de 24 horas.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.