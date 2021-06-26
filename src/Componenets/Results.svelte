<script>
	import { onMount } from 'svelte';
	import Loader from './Loader.svelte';
	import SearchBar from './SearchBar.svelte';

	let searchTerm;
	let HerosArray = [];
	let filterArray = [];



	let allPublishers = [];
	let uniquePulishers = [];

	let allAlignment = [];
	let uniqueAlignment = [];

	let allRace = [];
	let uniqueRace = [];

	let allGender = [];
	let uniqueGender = []

	onMount(async () => {
		const res = await fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json");
		const json = await res.json();
		json.forEach((item)=>{
			allPublishers.push(item.biography.publisher);
			allPublishers = allPublishers;
			uniquePulishers = [...new Set(allPublishers)].filter(String);
			uniquePulishers = uniquePulishers;

			allAlignment.push(item.biography.alignment);
			allAlignment = allAlignment;
			uniqueAlignment = [...new Set(allAlignment)].filter(String);
			uniqueAlignment = uniqueAlignment;

			allRace.push(item.appearance.race);
			allRace = allRace;
			uniqueRace = [...new Set(allRace)].filter(String);
			uniqueRace = uniqueRace;

			allGender.push(item.appearance.gender);
			allGender = allGender;
			uniqueGender = [...new Set(allGender)].filter(String);
			uniqueGender = uniqueGender;
			// HerosArray.push(item);
			// HerosArray = HerosArray;
		})
	});

















	$: {
 		if(searchTerm != ""){
        	filterArray = HerosArray.filter( item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    	}
	    else{
	        filterArray = [...HerosArray];
	    }
	}


</script>

<SearchBar bind:value={searchTerm}/>

<div class="advanced-search">
	<select name="publisherList">
		{#each uniquePulishers as pub}
		  <option value="{pub}">{pub}</option>
		 {/each}
	</select>
	<select name="alignment">
		{#each uniqueAlignment as ali}
		  <option value="{ali}">{ali === "-" ? "Unique" : ali}</option>
		 {/each}
	</select>
	<select name="Race">
		{#each uniqueRace as rac}
		  <option value="{rac}">{rac}</option>
		 {/each}
	</select>
	<select name="Gender">
		{#each uniqueGender as gen}
		  <option value="{gen}">{gen === "-" ? "Neutral" : gen}</option>
		 {/each}
	</select>
</div>




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
	.advanced-search{
		margin-top: 0.6rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	select{
		margin-right: 0.3rem;
		border: none;
		outline: none;
		font-family: inherit;
		font-size: 1.1rem;
		padding: 0.4rem 0.7rem;
		background-color: #2d2d2d;
		color: #b9b9b9;
		text-transform: capitalize;
	}
	option{
		background-color: #2d2d2d;
		color: #b9b9b9;
		margin: 1rem;
		text-transform: capitalize;

	}
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