function Personagem(nome){
    this.nome = nome;
};

function Lutador(nome){
    this.classe = 'Lutador';
    this.ataque = 150;
    this.defesa = 2000;
    this.gritoDeGuerra = function(){
        console.log('Pouco dano, mas aguenta porrada');
    };

    Personagem.call(this, nome)


};

function Arqueiro(nome, classe, ataque, defesa){
    this.classe = 'Arqueiro';
    this.ataque = 1800;
    this.defesa = 560;
    this.gritoDeGuerra = function(){
        console.log('Tira dano, mas é papel');
    };

    Personagem.call(this, nome);
};

function Curador(nome, classe, ataque, defesa){
    this.classe = 'Curador';
    this.ataque = 150;
    this.defesa = 400;
    this.gritoDeGuerra = function(){
        console.log('Só serve pra curar e ressuscitar mesmo');
    };

    Personagem.call(this, nome);
};

const hulk = new Lutador('Hulk');
const hawkeye = new Arqueiro('Hawkeye');
const lux = new Curador('Lux');

console.log(hulk.nome);
console.log(hulk.classe);
console.log(hulk.ataque);
console.log(hulk.defesa);
hulk.gritoDeGuerra();

console.log(hawkeye.nome);
console.log(hawkeye.classe);
console.log(hawkeye.ataque);
console.log(hawkeye.defesa);
hawkeye.gritoDeGuerra();

console.log(lux.nome);
console.log(lux.classe);
console.log(lux.ataque);
console.log(lux.defesa);
lux.gritoDeGuerra();
