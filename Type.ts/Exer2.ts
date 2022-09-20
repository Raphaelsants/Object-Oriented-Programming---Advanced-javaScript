class contaBancaria {

    nome: string;
    banco: string;
    regiao: string;
    nuConta: number;

    constructor(nome: string, banco: string, regiao: string, nuConta: number) {
        this.nome = nome;
        this.banco = banco; 
        this.regiao = regiao;   
        this.nuConta = nuConta;
    }
infoDaConta(): void {
    console.log("Lorraine: "+ this.nome+ "\n Qual seu Banco?" + this.banco+ "\nQual sua região?" +this.regiao+ "\nNúmero da sua conta: "+ this.nuConta);
}
}
let contabancaria = new contaBancaria("Lorraine", "Itaú", "Norte", 254071 )

contabancaria.infoDaConta(); 
