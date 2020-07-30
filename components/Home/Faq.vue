<script>
	let faq = []
	faq.push([
		'O que é Taxa de Conversão?',
		[`Diferente da Taxa de Cliques (CTR) de uma página, a taxa de conversão expressa, em porcentagem, os visitantes que executaram a ação desejada na página. Por exemplo: Uma página tem o objetivo de vender um produto e recebe mensalmente 100 visitas. Destas 100 visitas, 20 compraram o produto, logo, a Taxa de Conversão desta página é de 20%.`]
		])
	faq.push([
		'O que é CRO?',
		[`A sigla CRO vem do inglês (Conversion Rate Optimization) e significa Otimização da Taxa de Conversão. A CRO tem a função de aumentar a conversão de uma página na internet, de forma estratégica e sem gastar tanto, levando o usuário a executar uma ação dentro do site, que geralmente tem o objetivo de vender um produto, promover o contato, ou simplesmente gerar visitas em uma página. 
		Esta otimização também pode se aplicar a outras ações de marketing, como campanhas pagas, e-mail marketing, inbound marketing, etc.
		`]
		])
	faq.push([
		'Quais são as etapas da Otimização da Taxa de Conversão?',
		[`A primeira etapa consiste em analisar os dados da página e da empresa. Em seguida são formuladas hipóteses, e depois realizados testes (como Testes A/B, por exemplo).
		Por último, os resultados dos testes são analisados e aplicados em várias ações, baseadas em <strong>Growth Hacking</strong> para otimizar a taxa de conversão.

		`]
		])
	faq.push([
		'O que é Teste A/B?',
		[`Teste A/B nada mais é do que criar 2 opções distintas de uma mesma página para entender qual delas gera mais resultado. Podemos entender isso observando o número de cliques, a taxa de conversão, dentre outros pontos.
		`,
		`No entanto, <strong>CRO (Conversion Rate Optimization)</strong> não se resume a apenas isso. Embora seja uma parte importante da estratégia de CRO, o  <strong>Teste A/B</strong> é apenas uma das técnicas que compõe o trabalho a ser desenvolvido. 
		`]
		])

	faq.push([
		'O que é Growth Hacking?',
		[`Growth Hacking é uma vertente do Marketing Digital e está relacionado ao crescimento de uma empresa através da internet. As empresas de Growth Hacking fazem todo o trabalho de crescimento digital de uma empresa, e baseiam-se em testes e resultados reais, sem achismos, para montar todas as ações de marketing.

		`]
		])

	faq.push([
		'Por que devo fazer a CRO?',
		[`A CRO se baseia na ciência de dados e atua com testes e resultados que mostram a realidade de suas <strong>estratégias de marketing digital</strong>, sendo capaz de até <strong>dobrar a taxa de conversão</strong> da sua página, fazendo você gastar menos com <strong>propagandas e impulsionamentos</strong> - ou otimizar a verba que você já costuma investir, fazendo com que você <strong>obtenha mais resultados com o mesmo orçamento de marketing</strong> -, contribuindo para o crescimento da sua empresa. Além disso, várias empresas de sucesso aplicam   <strong>estratégias de CRO em marketing</strong> diariamente, e esse é um dos motivos que fizeram elas crescerem, sendo um serviço indispensável para uma Startups e empresas que operam suas vendas na internet. <em>CRO é ciência, aqui não há espaço para achismos</em>.

		`]
		])

	faq.push([
		'Quando devo investir em CRO?',
		[`A primeira etapa consiste em analisar os dados da página e da empresa. Em seguida são formuladas hipóteses, e depois realizados testes (como Testes A/B, por exemplo).
		Por último, os resultados dos testes são analisados e aplicados em várias ações, baseadas em <strong>Growth Hacking</strong> para otimizar a taxa de conversão.

		`]
		])

	faq.push([
		'Como faço para me tornar cliente da Hacking Growth?',
		[`Se sua empresa já possui um processo estruturado de         <strong>marketing digital</strong> ou, se sua empresa já investe verbas de campanha consistentes em plataformas como <strong>Google Ads</strong> ou <strong>Facebook Business Ads</strong>, nesse caso, convém, a você e a sua equipe, avaliar se está na hora de investir em estratégia de crescimento e aceleração de resultados, por meio de CRO.
		`, `
		No entanto, se sua empresa: construiu o site agora, investe verbas mensais de marketing inferiores a R$3.000,00; se sua empresa busca uma agência para fazer postagens em redes sociais; se sua empresa não tem metas de projeção de faturamento definidas; se sua empresa faz "marketing" por pressão do setor de vendas, mas sem ter um planejamento estruturado que una ambos setores como complementares (e não concorrentes) para o sucesso do negócio (e mais alguns fatores de estratégia e metas que não vamos elencar aqui); e, sobretudo, se sua empresa não entende que é necessário investimento e paciência para se obter resultados realmente expressivos, então pode ser que ela ainda não esteja pronta para o <strong>marketing de estratégia e técnicas de Growth Hacking que o CRO aplicará ao seu negócio</strong>.
		`]
		])

	faq.push([
		'Como faço para me tornar cliente da Hacking Growth?',
		[`Nossos consultores estão a postos para atender todos que nos acionam através de nosso formulário de contato, ou por meio do WhatsApp, mas pedimos que leve em conta o tópico anterior.
		`,
		`Levamos muito a sério cada cliente que escolhemos atender, por isso nos dedicamos de corpo, alma e coração a fazer com que cada um obtenha resultados sensacionais. Eles atingem metas em uma velocidade muito maior por causa de todo o processo e camada de inteligência que aplicamos ao seu <strong>marketing digital</strong>.
		`,
		`Isso significa que, apesar de atendermos com cordialidade cada pessoa que entra em contato conosco, isso não implica que aceitaremos qualquer empresa para ser nossa cliente. Nós vamos sempre buscar entender em que ponto seu negócio está e, a partir daí, dar segmento na negociação, ou indicar um outro caminho que faça mais sentido no momento para sua empresa. `]
		])

	export default {
		data(){
			return { faq }
		}
	}
</script>

<style scoped>

section {
	background-color: var(--dark);
	color: white;
}

.faq-item {
	background: linear-gradient(to right, var(--pink), var(--cyan), var(--violet), var(--blue));
	text-align: center;
	margin: 1rem;
	padding:0.1rem;
}

dl {
	padding: 0;
}

dt {
	font-weight: bold;
	background-color: var(--dark);
	font-size: 1.5rem;
	padding: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
}

dd {
	background-color: var(--dark);
	margin: 0;
}

p {
	margin: 0;
	font-size: 1.2rem;
	padding: 1rem;
}

dt > div {
	width: 2rem;
	height: 2rem;
	margin-left: 1rem;
}

img {
	width: 2rem;
	height: 2rem;
}

</style>

<template>
	<section id="faq">
		<dl>
			<div class="faq-item" v-for="item in faq">
				<Toggle>
					<template #on>
						<dt>{{ item[0] }} 
							<div>
								<img src="FAQ/+.svg">
							</div>
						</dt>
					</template>
					<template #off>
						<dt>{{ item[0] }} 
							<div>
								<img src="FAQ/-.svg">
							</div>
						</dt>
					</template>
					<template #content>						
						<dd>
							<div v-for="sub in item[1]">
								<p v-html="sub"></p>
							</div>
						</dd>
					</template>
				</Toggle>	
			</div>
		</dl>
	</section>
</template>