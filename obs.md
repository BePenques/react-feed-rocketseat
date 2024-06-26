# Programação imperativa

O que deve ser feito (passo-a-passo)

## Receita de bolo

1. Ligar o forno a 180 graus;
2. Abrir a porta do forno;
3. Colocar a massa numa forma;

# Programação declarativa - usada no react

Quais as condições para eu ter o resultado inicial

## Receita de bolo

1. O forno precisa estar a 180 graus;
2. Quando o forno estiver quente eu posso colocar a massa para assar;
3. Quando a massa estiver pronta, eu posso retira-la do forno

------------------------------------------------------------------------------------
# Key no React

## Por que Unica?

3 momentos em que um componente é renderizado novamente no react

1. Quando estado altera;
2. Quando a propriedade altera;
3. Quando um componente pai altera;

se toda vez que um componente de lista(por exemplo) precisar renderizar, ele tivesse que criar tudo do zero ficaria muito lento e não perfomatico,
por isso usamos as chaves, para que ele faça uma comparação com o que já havia antes na lista e crie somente o key que for novo

ex:
1, 2, 3, 4

apos renderizar:
1, 2, 3, 4, 5

vai criar apenas o 5, que ele não achou na renderização anterior


## Por que não posso usar o indice do array?
```js
const posts = [1,2,5,4,3]
// 0,1,2,3,4
```
se os posts mudarem de posição, o index permaneceria o mesmo, react teria que criar tudo do zero

# Clousures no React 

```js
function comment(props){
    const [likes, setLikes] = useState(0)

    function addLike(){
        setLikes(likes+1);
        setLikes(likes+1);//executa no mesmo conceito anterior
    }
}
por baixo dos panos:
Comment(props, 0)
Comment(props, 1)// cria nova versao do componente com like sendo 1

```