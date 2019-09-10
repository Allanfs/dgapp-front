export const pedidoService = {
  
  itensPedido:[],
  pedido: {},
  
  getItensPedido() {
    return this.itensPedido
  },
  
  adicionarItemNoPedido({ pedido, produto, quantidade, tamanho, sabores, observacao }) {
    let qtd
    if (!quantidade) {
      qtd = 1
    } else {
      qtd = quantidade
    }
    
    this.itensPedido.push(new ItemPedido(pedido, produto, qtd, tamanho, sabores, observacao))
  },
  
  removerItemDoPedido(item) {
    let index = this.this.itensPedido.indexOf(item)
    let old = this.itensPedido[index]
    this.itensPedido.splice(index, 1)
    
    return old
  },
  
  incrementarQuantidadeItem(item) {
    let index = this.itensPedido.indexOf(item)
    this.itensPedido[index].quantidade++
    
  },
  
  decrementarQuantidadeItem(item) {
    let index = this.itensPedido.indexOf(item)
    let qtdAtualDeItens = this.itensPedido[index].quantidade
    
    if (qtdAtualDeItens > 0) {
      this.itensPedido[index].quantidade--
    }
    
  },
  
  calcularValorTotal() {
    let valorTotal
    
    for (const item of this.itensPedido) {
      valorTotal += item.valor
    }
    
    return parseFloat(valorTotal)
  },
  
  getQuantidadeDeItens() {
    let quantidadeDeItens
    
    for (const item of this.itensPedido) {
      quantidadeDeItens += item.quantidade
    }
    return parseInt(quantidadeDeItens)
    
  },
  
  getQuantidadeDeItensUnicos() {
    return this.itensPedido.length
  } 

}

class ItemPedido {
  constructor(pedido, produto, quantidade, tamanho, sabores, observacao) {
    this.tamanho = tamanho,
    this.pedido = pedido,
    this.sabores = sabores,
    this.produto = produto,
    this.quantidade = quantidade
    this.observacao = observacao
    
    this.produto.preco = parseFloat(this.produto.preco).toFixed(2)
    
    if (produto.pizza) {
      if (sabores != null) {
        
        let saboresDaPizza = sabores
        let precosDosSaboreNoTamanho = {};
        for (const umSaborDaPizza of saboresDaPizza) {
          
          for (const precoDoSaborNaPizza of umSaborDaPizza.precos) {
            if (precoDoSaborNaPizza.tamanho.id === this.tamanho.id) {
              precosDosSaboreNoTamanho[umSaborDaPizza.nome] = (precoDoSaborNaPizza.preco)
            }
          }
          
        }
        
        let precoAnterior = -1
        Object.values(precosDosSaboreNoTamanho).forEach(preco => {
          console.log("preco percorrido:", preco)
          if (precoAnterior === -1) {
            precoAnterior = preco
          } else {
            if (preco > precoAnterior) {
              console.log("preco aplicado:", preco)
              precoAnterior = preco
            }
          }
        })
        this.valor = (precoAnterior * quantidade).toFixed(2)
      }
    } else {
      this.valor = parseFloat(produto.preco * this.quantidade)
    }
    
  }
}