class Coluna {
  constructor(recebe, exibe, alinhamento, ordenvel){
    this.text = exibe
    this.value = recebe
    this.align = alinhamento,
    this.sortable = ordenvel
  }
}

export const HeaderItemPedido= [
  new Coluna('produto', 'Nome', 'left', false),
  new Coluna('preco', 'Preço', 'center', true),
  new Coluna('quantidade', 'Quantidade', 'center', true),
  new Coluna('valor', 'Valor', 'center', true),
  new Coluna('action', 'Ações', 'center', false)
];

export const HeaderCliente = [
  new Coluna('nome', 'Nome', 'left', false),
  new Coluna('endereco', 'Endereço', 'left', false),
  new Coluna('telefone', 'Telefone', 'left', false),
]