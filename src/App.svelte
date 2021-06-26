<script>
  import Title from './Componenets/Title.svelte';
  import Results from './Componenets/Results.svelte';
  import Footer from './Componenets/Footer.svelte';
</script>

<main>
  <Title />
  <Results />
  <Footer />
</main>

<style>
  :global(body){
    font-family: 'Ruda', sans-serif;
    font-weight: 600;
    padding: 0 1.5rem;
    margin: 0 auto;
    background-color: #161616;
    list-style: none;
    line-height: 1.5;
  }
  main{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>
