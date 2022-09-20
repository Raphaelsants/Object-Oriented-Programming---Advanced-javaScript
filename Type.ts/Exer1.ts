class Patinete {
    marca: string;
    valor: number;
    cor: string;
    rodas: number
    
constructor(marca: string, valor: number, cor: string, rodas: number) {
    this.marca  = marca;
    this.valor = valor;
    this.cor = cor;
    this.rodas = rodas;
}
detalhesDoPatinete(): void {
    console.log("Caloi: " + this.marca+ "\nValor do patinete: "+ this.valor+ "\nCor: " + this.cor+ "\nQuantas rodas tem: " + this.rodas);
}  
}
let patinete = new Patinete ("Caloi", 280.00, "Azul e Cinza", 4 );

patinete.detalhesDoPatinete();