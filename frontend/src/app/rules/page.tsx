import Link from "next/link";

export default async function Planechase() {
  return (   
    <main className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md divide-y divide-solid divide-current">
          <h1 className="text-5xl font-bold py-6">Regras</h1>
          <p className="text-left py-6">Os cards grandes e o dado planar acrescentam a quantidade certa de diversão aleatória a qualquer jogo de Magic!</p>
          <p className="text-left py-6">Deck planar compartilhado: Inicie um jogo multijogador e revele o card do topo do deck planar compartilhado. Este é o plano em que todos os jogadores se encontram no momento, e seus efeitos aplicam-se a todos. Durante a fase principal de cada jogador, o jogador poderá rolar o dado planar de seis faces para ter a chance de realizar uma ação: Se o dado cair no símbolo de planeswalker, o jogador deverá transplanar e se mover para o próximo plano. Coloque o plano atual no fundo do deck planar e revele o card seguinte.</p>
          <p className="text-left py-6">Se o dado cair no símbolo de Caos, o jogador deverá desencadear a habilidade de Caos do plano. A primeira rolagem a cada turno é grátis, mas se o jogador desejar rolar o dado planar mais de uma vez, ele deverá pagar (1) a mais por cada rolagem. Assim, a segunda rolagem custará (1), a terceira custará (2), e assim em diante.</p>
          <p className="text-left py-6">Decks planares individuais: O primeiro jogador revela o primeiro plano do seu próprio deck e, quando alguém rolar o símbolo de planeswalker, ele passa para o plano do topo do próprio deck planar. As outras regras permanecem iguais.</p>
        <ul className="list-disc text-left py-6">
          <li>Um deck planar compartilhado deverá ter pelo menos 40 cards, ou pelo menos 10x o número de jogadores no jogo, o que for menor.</li>
          <li>Um deck planar compartilhado também não pode conter mais cards de fenômeno que 2x o número de jogadores no jogo.</li>
          <li>Os decks planares individuais deverão conter pelo menos 10 cards, incluindo no máximo 2 cards de fenômeno. Independente do modo escolhido, cada card de um deck planar deverá ter um nome diferente. Não é possível ter várias cópias do mesmo plano ou fenômeno em um único deck Planar.</li>
          <li> O jogo tem a duração de cerca de 50 minutos </li>
        </ul>
          <div className="text-left py-6">
            <span>
              Fonte: site <Link href="https://magic.wizards.com/pt-BR/formats/planechase" target="_blank">Wizards of The Coast</Link>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
