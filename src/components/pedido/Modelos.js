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
    this.hora_abertura = null;
    this.hora_fechameno = null;
    this.itens = itens;
    this.motivo_cancelamento = null;
    this.numero_pedido = null;
    this.total = 0;
    this.valor_pago = 0;
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
  constructor(pedido, produto, quantidade, tamanho, sabores, observacao) {
    this.tamanho = tamanho,
    this.pedido = pedido,
    this.sabores = sabores,
    this.produto = produto,
    this.quantidade = quantidade
    this.observacao = observacao
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