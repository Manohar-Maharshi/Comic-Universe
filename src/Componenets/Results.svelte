<script>
	import { onMount } from 'svelte';
	import Loader from './Loader.svelte';
	import SearchBar from './SearchBar.svelte';

	let searchTerm;
	let HerosArray = [];
	let filterArray = [];


	onMount(async () => {
		HerosArray = [];
		const res = await fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json");
		const json = await res.json();
		json.forEach((item)=>{


			HerosArray.push(item);
			HerosArray = HerosArray;

		})
	});








	$: filterArray = HerosArray.filter( item => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);


</script>

<SearchBar bind:value={searchTerm}/>











<main>
	{#each filterArray as person}
		<div class="card">
			<img class="img" src="{person.images.sm}" alt="{person.name}">
			<div class="details">
				<p class="madeup-name truncate">{person.name} </p>
				<p class="orginal-name"> {person.biography.fullName === "" ? "" : `(${person.biography.fullName})`}</p>
				<p class="pub">{person.biography.publisher}</p>
			</div>
			<div class="extra-details">
				<div class="left">
					<p class="combat">combat: <span>{person.powerstats.combat}</span></p>
				    <p class="durability">durability: <span>{person.powerstats.durability}</span></p>
				    <p class="intelligence">intelligence: <span>{person.powerstats.intelligence}</span></p>
				</div>
			    <div class="right">
			    	<p class="power">power: <span>{person.powerstats.power}</span></p>
			    	<p class="speed">speed: <span>{person.powerstats.speed}</span></p>
			    	<p class="strength">strength: <span>{person.powerstats.strength}</span></p>
			    </div>
			</div>
		</div>
	{:else}
		<Loader />
	{/each}
</main>



<style>
	main{
		margin-top: 3rem;
		width: 100%;
		min-height: 50vh;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.truncate {
		text-align: center;
	  width: 220px;
	  margin: 0 auto;
	  white-space: nowrap;
	  overflow: hidden;
	  text-overflow: ellipsis;
	}
	.card{
		position: relative;
		padding: 0.5rem 1.5rem;
		background-color: #2d2d2d;
		width: 21rem;
		height: 5rem;
		border-radius: 3px;
		display: flex;
		align-items: center;
		text-transform: capitalize;
		overflow: hidden;
		margin: 0.5rem;
	}
	.card .img{
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		object-fit: cover;
		box-shadow: 0px 0px 1px 5px rgba(255,224,25,0.75);
	}
	.details{
		flex: 1;
		color: #b9b9b9;
		text-align: center;
	}
	.madeup-name{
		font-size: 1.8rem;
		font-weight: bold;
	}
	.orginal-name{
		font-size: 0.7rem;
		font-style: italic;
	}
	.pub{
		background-color: #FFE019;
		color: #161616;
		font-weight: bold;
		font-size: 0.7rem;
		padding:0 0.5rem;
		position: absolute;
		top: 0;
		right: 0;
		border-top-right-radius: 5px;
	}
	.extra-details{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		transform: translateX(24.1rem);
		background-color: #0b0d0f;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		flex-wrap: wrap;
		color: #FFE019;
		font-size: 1.01rem;
		transition: transform 0.3s ease;
	}
	.intelligence:hover{
		color: #7272FF;
	}
	.power:hover{
		color: #147c65;
	}
	.combat:hover{
		color:  #F81F2E;
	}
	.durability:hover{
		color: #8c877f;
	}
	.speed:hover{
		color: #ffb80e;
	}
	.strength:hover{
		color: #F81F2E;
	}
	.card:hover .extra-details{
		transform: translateX(0);
	}
</style>