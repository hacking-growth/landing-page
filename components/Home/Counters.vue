<style scoped>
p {
	font-size: 3rem;
	margin: 0;
	margin-bottom: 0.5rem;
	font-weight: bold;
}

h3 {
	margin-top: 0;
	font-size: 1rem;
	color: var(--pink);
	font-weight: normal;
	text-transform: uppercase; 
	max-width: 11rem;
}

section {
	display: flex;
	flex-wrap: wrap;
	margin: auto;
	background-color: var(--dark);
	color: white;
	padding-top: 3rem;
	padding-bottom: 3rem; 
}

section > div {
	margin: auto;
}

@media (min-width: 700px){
	section {
		text-align: center;
	}
}
</style>

<script>
	export default {
		data(){
			return {

			}
		}
	}
</script>

<template>
	<section id="contadores" >
		<div class="fade-in">
			<Counter total=217 />
			<h3>PROJETOS REALIZADOS</h3>
		</div>
		<div class="fade-in">
			<Counter total=97 />
			<h3>% DE CLIENTES SATISFEITOS</h3>
		</div>
		<div class="fade-in">
			<Counter total=12 />
			<h3>PROJETOS EM ANDAMENTO</h3>
		</div>
		<div class="fade-in">
			<Counter total=25698 />
			<h3>SEGUIDORES</h3>
		</div>
	</section>
</template>