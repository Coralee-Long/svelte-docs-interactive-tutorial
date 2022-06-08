<script>
    import logoWhite from '../assets/svelte-white.png'
</script>

<main>
    <div class="navContainer">
        <div class="logoContainer">
            <img src="{logoWhite}" alt="white Svelte logo" />
        </div>
    </div>
</main>

<style>
    main {
        min-width: 100%;
    }

    .navContainer {
        height: 150px;
        background-color: #ff3e00;
        width: 100%;
        margin-bottom: 5rem;
        display: flex;
        align-content: center;
    }

    .logoContainer {
        height: 100%;
        width: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px solid yellow;
    }

    .logoContainer img {
        width: auto;
        height: 60%;
    }
</style>
