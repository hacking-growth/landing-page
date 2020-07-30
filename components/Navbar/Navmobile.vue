<template>
	<Toggle>
		<template #on>
			<Hamburguer/>
		</template>
		<template #off>
			<Close/>
		</template>
		<template #content>
			<Navmenu/>
		</template>
	</Toggle>
</template>