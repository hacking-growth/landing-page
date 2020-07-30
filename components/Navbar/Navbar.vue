<style scoped>
	nav {
		height: 4rem;
		display: flex;
		justify-content: space-between;
		width: 100%;
		align-items: center;
		position: fixed;
		background-color: var(--darkt);
		z-index: 1000;
	}

	@media(min-width: 1000px){
		nav {
			height: 10rem;
			font-size: 0.8rem;
			background-color: transparent;
			position: absolute;
		}

		.sticky {
			position: fixed;
			height: 4rem;
			background-color: var(--darkt);
		}
	}
</style>

<script>
	export default {
		data(){
			return {
				scroll: 0,
			}
		},
		computed: {
			sticky(){
				return this.scroll > 200 ? 'sticky' : ''
			}
		},
		mounted(){
			window.onscroll = () => {
				this.scroll = window.scrollY
			}
		}
	}
</script>

<template>
	<nav :class="sticky">
		<div></div>
		<Logo/>
		<Media>
			<template #mobile>				
				<Navmobile/>
			</template>
			<template #tablet>
				<Navmobile/>
			</template>
			<template #desktop>
				<Navdesktop/>
			</template>
		</Media>
	</nav>
</template>