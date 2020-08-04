<style scoped>

section {
	background-color: var(--dark);
}

img {
	width: 100%;
	height: 10rem;
	margin-top: 20px;
}

section > div {
	width: 90%;
	margin: 3px auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: white;
	text-align: center;
	border: none;
}

@media (min-width: 500px){
	section > div {
		width: 30%;
	}
}

section > div >div > div {
	border: 0.3rem solid white;
}

a {
	width: 50%;
	margin: 1rem auto;
}

.to-center {
	align-items: center;
}

</style>

<template>
	<section id="product-bundle" class="row">
		<div>
			<div>
				<img src="icone 01.svg" class="fade-in">
				<h3>Consultoria em CRO</h3>
				<div>
					
					<p>Sua equipe de marketing não está <strong>performando</strong> tanto quanto poderia?</p>
					<p>Nossa consultoria irá, junto de sua equipe, avaliar os <strong>principais gargalos em seu processo de conversão</strong>, traçar uma estratégia e ajudar um <strong>plano de ação sob medida para seu negócio</strong></p></br>
				</div>
			</div>
			<div>
				<a href=""  class="btn">Saiba mais</a>				
			</div>
		</div>
		<div>
			<div>
				<img src="icone 02.svg"  class="fade-in">
				<h3>Otimização de campanhas</h3>
				<div>
					<p>
						Suas campanhas no Google e no Facebook estão saindo caro e trazendo pouco retorno?
					</p>
					<p>
						Nosso processo de <strong>otimização de campanhas de marketing</strong> vasculha os dados de suas campanhas, entende o que está ocorrendo e, a partir daí, implementar um processo que <strong>diminui seu custo de aquisição de clientes</strong> e aumenta seu faturamento com a mesma verba que você já investia antes.
					</p>
				</div>
			</div>
			<div>
				<a href=""  class="btn">Saiba mais</a>				
			</div>
		</div>
		<div>
			<div>
				<img src="icone 03.svg"  class="fade-in">
				<h3>CRO e otimização de Testes A/B</h3>
				<div>
					<p>Sua taxa crescimento está boa, mas você sabe que <strong>poderia ser melhor</strong>? Não entende o porquê de seus resultados não serem os esperados?</p>
				<p>Nossa equipe de <strong>especialistas em CRO e Growth Hacking</strong> entram em ação para fazer um pente fino em <strong>todo o seu processo de vendas</strong></p>
				<p>Com os testes A/B encontramos os principais fatores que não fazem a sua campanha alcançar os resultados esperados. Analisamos o desempenho e definimos qual é a melhor estratégia para o seu anúncio.</p>
				<p>Aumente hoje mesmo a escalabilidade de seus negócios! Conheça nosso processo clicando abaixo.</p>
				</div>
			</div>
			<div>
				<a href=""  class="btn">Saiba mais</a>				
			</div>
		</div>
	</section>
</template>