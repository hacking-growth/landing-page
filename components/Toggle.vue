<script>
	export default {
		data: () => ({
			open: false
		}),
		methods: {
			toggle(){
				this.open = !this.open;
			}
		}
	}
</script>

<template>
	<div>
		<div v-if="!open" @click="toggle()">
			<slot name="on"></slot>
		</div>
		<div v-if="open" @click="toggle()">
			<slot name="off"></slot>
		</div>
		<div v-if="open">
			<slot name="content"></slot>
		</div>
	</div>
</template>