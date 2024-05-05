import Link from "next/link";

export default async function About() {
  return (   
    <main className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md divide-y divide-solid divide-current">
          <h1 className="text-5xl font-bold py-6">O que é?</h1>
          <p className="text-left py-6">Esse projeto é um simulador da modalidade Planechase, de Magic The Gathering.</p>
          <p className="text-left py-6">O objetivo é a diversão e o desenvolvimento. Todos os entusiastas, programadores ou não, estão convidados a sugerir melhorias e apontar bugs.</p>
          <div className="text-left py-6">
            <span>
              Esse projeto busca utilizar a licença de uso de conteúdo por fan, de acordo com a <Link href="https://company.wizards.com/en/legal/fancontentpolicy" target="_blank" className="border-b border-black">Wizards of the Coast's Fan Content Policy</Link>. 
              Qualquer uso equivocado do conteúdo por essa aplicação, não é realizada por má fé e será corrigida assim que apontanda.
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
