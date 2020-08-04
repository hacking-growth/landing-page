<style scoped>
header {
	color: white;
	background: url('../../static/BACKGROUND-WEBP.jpg');
	background-size: 1000px;
	background-position: 60%;
	background-color: var(--dark);
	height: 100vh;
	display: flex;
	align-items: center;
}

h1 {
  font-size: 2rem;
}

h2 {
	font-size: 1rem;
	font-weight: normal;
}

span {
	display: block;
	font-weight: normal;
	font-size: 1.5rem;
}

strong {
	color: var(--pink);
}

@media (min-width: 700px){
	h1 {
		font-size: 3rem;
		max-width: 30rem;
	}

	span {
		width: 60%;
		margin: 3rem auto;
	}

	header {
		background-size: 120%;
		background-position: 30%;
		text-align: left;
		height: 70vh;
	}

	span {
		text-align: left;
		margin: 3rem 0;
	}

	.btn {
	margin: 2rem 0;	
	}

}

@media (min-width: 1000px){

	header {
		background-position: -10%;
		padding-top: 10rem;
		background-size: 100%;
		background-color: var(--dark);
	}

	a {
		max-width: 20rem;
	}


}


</style>

<template>
	<header id="promessa">
		<div class="fade-left">
			<h1 class="">
				Otimize seu marketing digital 
				<span>e aumente a taxa de conversão do seu negócio</span>
			</h1>
			<h2>Conheça nossas soluções <strong>de marketing</strong> <br> baseadas em <strong>inteligência, otimização e dados.</strong></h2>
			<a class="btn">Fale agora mesmo com um especialista</a>
		</div>
	</header>
</template>
