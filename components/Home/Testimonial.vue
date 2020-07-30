<style scoped>
img {
	width: 8rem;
	height: 8rem;
	border-radius: 50%;
	background-color: grey;
	border: 2px solid var(--dark);
}

h3, h4{
	font-weight: normal;
}

.row {
	align-items: stretch;
	justify-content: center;
}

.item {
	border: 2px solid var(--dark);
}

@media (min-width: 700px){
	section {
		text-align: left;		
	}

	h2 {
		text-align: center;
	}

	a {
		margin: 0;
	}

	.row > div {
		margin-left: 2rem;
		width: 25%;
		text-align: center;
	}
}
</style>

<script>
	let items = []

	items.push({
		img: 'https://media-exp1.licdn.com/dms/image/C4D03AQF9npZ0RcFWPw/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=cTXYrCJbs1fDaC-JwL4oIPtVT2tF0XFmkE_8hMaGmjM',
		nome: 'Anderson Kleyton',
		titulo: 'Inovação Transformação Digital Indústria 4.0 - RevTec',
		content: `… oferece serviços aderentes a necessidade de cada cliente. Em um mercado onde a maioria tenta “empurrar goela baixo” seus produtos, este é um diferencial.`

	})

	items.push({
		img: 'https://media-exp1.licdn.com/dms/image/C4D03AQH_9cKznSa8UA/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=M_0QkbyNkZo6B0Ne41n9hnj-GcRqtVtPQDbNc4uqkZA',
		nome: 'Geisa Luz',
		titulo: 'Consultora em Doenças Raras | Palestrante | Pós doutora em Saúde Pública | Enfermeira',
		content: `… Já contratei um dos seus serviços … e os resultados foram surpreendentes. Sou muito grata!`

	})

	items.push({
		img: 'https://media-exp1.licdn.com/dms/image/C4D03AQEpP8xjQpch_A/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=FmwCLEz8jrjx-arSGIWxHgHb8YQlHOuCv5uuIvm1RiA',
		nome: 'Matheus Celestino',
		titulo: 'Executivo de Negócios, Resultados Digitais',
		content: `… No inicio de 2019, a Hacking Growth Inovação fechou uma parceria estratégica com a Resultados Digitais, e tive o enorme prazer de fazer essa ponte... Uma empresa totalmente focada em entrega e resultado de seus respectivos clientes. Sempre muito focada naquilo que se propõe a entregar.`

	})
	items.push({
		img: 'https://media-exp1.licdn.com/dms/image/C4D03AQFWHshtL6DLMA/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=TZ66upwy0cLZvBidZdBlGJarJkFmY2jVZ3xAYp18xbY',
		nome: 'Renata Costa',
		titulo: 'Gestora e Consultora de Educação a Distância (EaD) l Professora de Tecnologia da Informação l Conteudista de TI',
		content: `… Excelente sua atuação como Growth Hacker. Nossos diálogos e trocas de informações fizeram o meu SSI decolar!`

	})

	export default {
		data(){
			return {
				items
			}
		}
	}
</script>

<template>
	<section id="depoimentos">
		<h2>Veja algumas opiniões de quem já fechou negócio conosco</h2>
		<div class="row">
			<div v-for="item in items" class="item">
				<div>
					<img v-bind:src="item.img">
				</div>								
				<div>
					<h3><em>{{ item.nome }}</em></h3>
					<h4>{{ item.titulo }}</h4>
					<p>
						“{{ item.content }}”
					</p>
				</div>
			</div>
		</div>
	</section>
</template>