<script>
    import logo from '../assets/svelte.png'
</script>

<main>
    <div class="leftLogoContainer">
        <img src="{logo}" alt="Svelte Logo" />
    </div>
    <div class="rightHeadingContainer">
        <h1 class="mainHeading">Svelte Basics</h1>
    </div>
</main>

<style>
    main {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    /* Small Devices */

    @media only screen and (max-width: 720px) {
        .leftLogoContainer {
            display: flex;
            vertical-align: center;
            justify-content: flex-end;
            padding: 0;
            margin: 0;
            /* border: 3px solid green; */
            max-width: 250px;
        }

        img {
            height: 100%;
            width: 100%;
            padding-left: 1rem;
        }

        .rightHeadingContainer {
            display: flex;
            vertical-align: center;
            justify-content: center;
            padding: 0;
            margin: 0;
            min-height: 200px;
            /* border: 3px solid green; */
        }

        .mainHeading {
            color: #ff3e00;
            text-transform: uppercase;
            font-size: 4rem;
            font-weight: 200;
            padding: 0 1rem;
            margin: auto;
            line-height: 4rem;
            text-align: left;
        }
    }

    /* Large Devices */

    @media only screen and (min-width: 721px) {
        .leftLogoContainer {
            display: flex;
            vertical-align: center;
            justify-content: flex-end;
            padding: 0;
            margin: 0;
            /* border: 3px solid green; */
            max-width: 250px;
        }

        img {
            height: 100%;
            width: 100%;
            padding-left: 1rem;
        }

        .rightHeadingContainer {
            display: flex;
            vertical-align: center;
            justify-content: center;
            padding: 0;
            margin: 0;
            min-height: 200px;
            /* border: 3px solid green; */
        }

        .mainHeading {
            color: #ff3e00;
            text-transform: uppercase;
            font-size: 4rem;
            font-weight: 200;
            padding: 0 1rem;
            margin: auto;
            line-height: 4rem;
            text-align: left;
        }
    }
</style>
