<style scoped>
ul {
	list-style: none;
	background-color: var(--darkt);
	width: 100%;
	position: fixed;
	right: 0;
	top: 4rem;
	text-align: left;
	padding-left: 1rem;
	margin: 0;
	max-width: 15rem;
	height: 100vh;
	padding-top: 3rem;
}

li {
	color: white;
	text-transform: uppercase;
	font-weight: bold;
	padding: 1rem;
}

a {
	color: white;
	text-decoration: none;
}

a:hover {
	color: var(--pink);
	cursor: pointer;
}

</style>

<template>
	<ul>
		<li>
			<a href="#">Home</a>
		</li>
		<li>
			<a href="#">Nossos Serviços</a>
		</li>
		<li>
			<a href="#">Cases de sucesso</a>
		</li>
		<li>
			<a href="#">Quem somos</a>
		</li>
		<li>
			<a href="#">Trabalhe Conosco</a>
		</li>
	</ul>
</template>