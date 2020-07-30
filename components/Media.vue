<style scoped>
.desktop, .tablet {
	display: none;
}

@media (min-width: 700px){
	.mobile {
		display: none;
	}

	.tablet {
		display: block;
	}
}

@media (min-width: 1000px){
	.desktop {
		display: block;
	}

	.tablet {
		display: none;
	}
}

</style>

<script>
	export default {
		props: ['size']
	}
</script>

<template>
	<div>
		<div class="mobile">
			<slot name="mobile" ></slot>			
		</div>
		<div class="tablet">
			<slot name="tablet"></slot>			
		</div>
		<div class="desktop">
			<slot name="desktop"></slot>			
		</div>
	</div>
</template>