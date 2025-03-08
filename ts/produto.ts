namespace loja{
    export class Produto{

        private _produto:string;
        private _preco: number;
        private _imposto: number;

        get nome(){
            return this._produto;
        }

        set nome(produto:string){
            this._produto=produto;
        }

        get preco(){
            return this._preco;
        }

        set preco(preco:number){
            this.preco = preco;
        }
    
        get imposto(){
            return this._imposto;
        }

        set imposto(imposto:number){
            this.imposto = imposto;
        }
        
        public calcularPrecoFinal(imposto: number): number{
            return this._preco * (this.imposto/100);
        }

    }
}