<script>
	export default {
		props: ['total'],
		data(){
			return {
				real: 1,
			}
		},
		mounted(){
			setInterval(() => {
				if(this.real < this.total){
					this.real = parseInt(this.real + (this.total / 50))
				}
			},10)
		}
	}
</script>

<template>
	<p>{{ real }}</p>
</template>