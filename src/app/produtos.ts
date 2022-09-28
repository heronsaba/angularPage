export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto{
    quantidade: number;
}

export const produtos = [
    { id: 1, descricao: "Trilogia Senhor dos Anéis", preco: 270, descricaoPreco: "À vista no PIX", imagem: "/assets/2.jpg" },
    { id: 2, descricao: "Contos Inacabados", preco: 50, descricaoPreco: "À vista no PIX", imagem: "/assets/contos.jpg" },
    { id: 3, descricao: "Neuromancer", preco: 50.99, descricaoPreco: "À vista no PIX", imagem: "/assets/Neuromancer.jpg" },
    { id: 4, descricao: "As crônicas de Gelo e Fogo", preco: 399.99, descricaoPreco: "À vista no PIX", imagem: "/assets/got.jpg" },
    { id: 5, descricao: "O Hobbit (Capa Smaug)", preco: 100, descricaoPreco: "À vista no PIX", imagem: "/assets/hobbit.jpg" },
    { id: 6, descricao: "O Silmarillion", preco: 49, descricaoPreco: "À vista no PIX", imagem: "/assets/silmarillion.jpg" },
    { id: 7, descricao: "Rangers - Livro 1", preco: 35, descricaoPreco: "À vista no PIX", imagem: "/assets/r1.jpg" },
    { id: 8, descricao: "Rangers - Livro 2", preco: 35, descricaoPreco: "À vista no PIX", imagem: "/assets/r2.jpg" },
    { id: 9, descricao: "Rangers - Livro 3", preco: 35, descricaoPreco: "À vista no PIX", imagem: "/assets/r3.jpg" },
    { id: 10, descricao: "O Nome do Vento", preco: 65, descricaoPreco: "À vista no PIX", imagem: "/assets/n1.jpg" },
    { id: 11, descricao: "O Temor do Sábio", preco: 65, descricaoPreco: "À vista no PIX", imagem: "/assets/n2.jpg" },
    { id: 12, descricao: "A Musica do Silencio", preco: 65, descricaoPreco: "À vista no PIX", imagem: "/assets/n3.jpg" },
]