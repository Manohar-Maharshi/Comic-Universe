<script>
	export let value = "";


</script>


<input bind:value={value} type="text" placeholder="Search your favorite Superhero or Supervillain">

<style>
	input{
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: inherit;
		border: none;
		outline: none;
		font-size: 1.2rem;
		width: 40%;
		padding: 0.6rem 1rem;
		margin: 0.5rem;
		border-radius: 3px;
		background-color: #2d2d2d;
		color: #b9b9b9;
		font-weight: bold;
	}
</style>