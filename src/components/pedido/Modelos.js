export class Cliente {
  constructor() {
    this.id = null;
    this.cpf = null;
    this.nome = [];
    this.telefone = null;
    this.dataCadastro = null;
    this.dataNascimento = null;
    this.email = null;
    this.endereco = [];
    this.facebook = null;
    this.instagram = null;
  }
}

export class Pedido {
  constructor(cliente, itens, endereco) {
    this.id = null;
    this.estado = "FECHADO";
    this.cliente = cliente;
    this.endereco = endereco
    this.horaAbertura = null;
    this.horaFechameno = null;
    this.itens = itens;
    this.motivoCancelamento = null;
    this.numeroPedido = null;
    this.total = 0;
    this.valorPago = 0;
    this.pagamento = null;

  }
}

export class Tamanho {
  constructor() {
    this.centimetros= 0,
    this.id= null,
    this.nome= null,
    this.numeroFatias= 0,
    this.numeroMaximoSabores= 0,
    this.precoPadrao= 0
  }
}

export class ProdutoPizza {
  constructor() {
    this.id = null;
    this.nome = null;
    this.pizza = false;
    this.preco = 0;
    this.sabores = [];
    this.tamanho = new Tamanho();
  }
}

export class ItemPedido {
  constructor() {
    this.observacao = null,
      this.pizza = new ProdutoPizza(),
      this.produto = null,
      this.quantidade = 0
  }

  calcularPreco() {

    this.preco = this.pizza.tamanho.precoPadrao

    // calcula preço pelo valor do sabor mais caro
    // this.pizza.sabores.find( sabor => {
    //   console.log(sabor)
    //   sabor.precos.sort( (precoA, precoB) => {
    //     console.log("precos",precoA, precoB)
    //     return precoA.preco < precoB.preco
    //   })
    // })

  }
}

export class Produto {
  constructor() {
    this.id = null;
    this.nome = null;
    this.pizza = false;
    this.preco = 0;
  }
}

export class Recheio {
  constructor() {
    this.id = null;
    this.nome = null;
    this.ehDisponivel = false;
    this.ehEspecial = false;
    this.ehSalgado = false;
  }
}

export class Sabor {
  constructor() {
    this.id = null;
    this.nome = null;
    this.ehDisponivel = false;
    this.ehEspecial = false;
    this.ehSalgado = false;

    this.precos = []
    this.recheios = []
  }
}

export class SaborPrecoTamanho {
  constructor() {
    this.preco = 0;
    this.sabor = new Sabor();
    this.tamanho = new Tamanho();
  }
}