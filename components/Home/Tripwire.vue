<style scoped>
section {
	background: url('../../static/04Resultado.jpg');
	background-size: 1000px;
	background-position: 0;
	background-color: white;
	color: var(--dark);
}

h2 {
	color: var(--pink);
}

h2 strong {
	font-size: 2.3rem;
	display: block;
	color: var(--dark);
}

a {
	margin: auto;
}

p {
	color: var(--dark);
	max-width: 25rem;
}

@media (min-width: 700px){
	section {
		text-align: left;		
	}

	a {
		margin: 0;
	}
}

@media (min-width: 1000px){
	section {
		background-size: 100%;
	}
}

</style>

<template>
	<section id="tripwire">
		<div class="fade-left">
			<h2><strong>Seu negócio</strong> foi afetado pela crise?</h2>
			<p>Conheça nossa <strong>solução</strong> para que você possa retomar o ritmo de crescimento usando otimização de campanhas e marketing de performance</p>
			<a class="btn">Quero saber mais</a>
		</div>
	</section>
</template>