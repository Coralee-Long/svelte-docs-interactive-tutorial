<script>
    import NavBar from '/src/lib/layout/Navbar.svelte'
    import FooterBar from '/src/lib/layout/FooterBar.svelte'
    import Module_02 from '../src/lib/modules/module_02/Module_02.svelte'

</script>

<main>

    <NavBar />

    <section class="articleSection">
       <Module_02/>
    </section>

    <FooterBar />
</main>

<!------------ STYLES --------------->

<style>
    :root {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
            'Helvetica Neue', sans-serif;
    }


    /* --------------------------------- 1201px +++  */

    @media screen and (min-width: 1201px) {

    main {
        width: 100%;
        min-width: 1200px;
        height: 100%;
        text-align: center;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* border: 3px solid blue; */
    }

    .articleSection {
        width: 100%;
        max-width: 1200px;
        margin: 200px auto 100px auto;
        padding: 0;
        /* border: 2px solid lime */
        }
    }

    /* --------------------------------- 801px - 1200px  */

    @media screen and (max-width: 1200px) {

    main {
        width: 100%;
        min-width: 800px;
        height: 100%;
        text-align: center;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* border: 3px solid blue; */
    }
        
     .articleSection {
        width: 100%;
        margin-top: 200px;
        margin-bottom: 100px;
        padding: 0;
        /* border: 2px solid lime; */
        }
    }

    /* --------------------------------- 601px - 800px  */

    @media screen and (max-width: 800px) {
    
    main {
        width: 100%;
        height: 100%;
        text-align: center;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* border: 3px solid blue; */
    }

    .articleSection {
        width: 100%;
        margin-top: 200px;
        margin-bottom: 100px;
        padding: 0;
        }
    }

    /* --------------------------------- 301 - 600px  */

    @media screen and (max-width: 600px) {

    main {
        width: 100%;
        min-width:fit-content;
        height: 100%;
        text-align: center;
        padding: 0;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* border: 3px solid blue; */
    }

    .articleSection {
        width: 100%;
        margin: 325px auto 75px auto;
        padding: 0 1rem;
        /* border: 3px dashed lime; */

        }
    }

    /* --------------------------------- 0px - 300px  */
    @media screen and (max-width: 300px) {

    
    main {
        width: 100%;
        max-width: 300px;
        height: 100%;
        text-align: center;
        padding: 0;
  
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* border: 3px solid red; */
    }
     
    .articleSection {
        width: 100%;
        max-width: 300px;
        margin-top: 550px;
        margin-bottom: 50px;
        margin-left: 1rem;
        padding: 0 0.5rem;
        }
    }
    
</style>
