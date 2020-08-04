<style scoped>
h2, h3, p {
	text-align: center;
}

form {
	display: flex;
	flex-direction: column;
	font-size: 1.2rem;
	max-width: 30rem;
	margin: auto;
	text-align: left;
}

input, textarea, select {
	width: 100%;
	border: none;
	background-color: white;
	margin-bottom: 2px;
	border: 10px solid white;
}

.colorbox {
	background: linear-gradient(to right, var(--pink), var(--cyan), var(--violet), var(--blue));
}

button {
  background-color: var(--pink);
  color: white;
  font-weight: bold;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  transition: 0.3s;
  border: none;
  margin: 1rem;
  width: 30%;
  margin-left: auto;
}

button:hover {
  background-color: var(--cyan);
  color: var(--dark);
  cursor: pointer;
}

label {
	color: var(--dark);
	font-weight: bold;
	border: 10px solid white;
}

textarea:focus, input:focus, select:focus{
    outline: none;
}

</style>

<template>
	<section id="opt-in">
		<h2>Comece agora mesmo a traçar o sucesso do seu negócio</h2>
		<form>
			<label>NOME</label>
			<div class="colorbox">
				<input>
			</div>
			<label>EMAIL</label>
			<div class="colorbox">
				<input>
			</div>
			<label>NOME DA EMPRESA</label>
			<div class="colorbox">
				<input>
			</div>
			<label>QUANTO INVESTE EM MARKETING ATUALMENTE</label>
			<div class="colorbox">
				<select name="" id="">
					<option value="">R$ 3.000,00 a R$ 5.000,00</option>
					<option value="">R$ 5.000,00 a R$ 10.000,00</option>
					<option value="">R$ 10.000,00 a R$ 25.000,00</option>
					<option value="">Mais de R$ 25.000,00</option>
				</select>
			</div>	
			<label>MENSAGEM</label>
			<div class="colorbox">
				<textarea style="margin-bottom: -2px"></textarea>
			</div>
			<button type="submit">ENVIAR</button>
		</form>
	</section>
</template>