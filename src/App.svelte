<script>
    import NavBar from '../src/lib/Navbar.svelte'
    import Ex1 from '../src/lib/Ex1.svelte'
    import Ex2 from '../src/lib/Ex2.svelte'
    import Ex3 from '../src/lib/Ex3.svelte'
</script>

<main>
    <NavBar></NavBar>

    <section class="articleSection">
        <Ex1></Ex1>
        <Ex2></Ex2>
        <Ex3></Ex3>
    </section>
</main>

<!------------ STYLES --------------->

<style>
    :root {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
            'Helvetica Neue', sans-serif;

        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* border: 7px solid blue; */
    }

    main {
        width: 100vw;
        text-align: center;
        padding: 0;
        margin: 0;
        min-width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        /* border: 3px solid blue; */
    }

    .topSection {
        width: 90%;
        margin: 2rem 0;
        /* border: 3px solid orange; */
    }

    .articleSection {
        width: 90%;
        /* border: 3px solid lime; */
    }
</style>

<!-- Why do I get an error if I use self-closing tags? -->
<!-- <section class="topSection"> -->

<!-- <TopHeadingSection /> -->
<!-- </section> -->
