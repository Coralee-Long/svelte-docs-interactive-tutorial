<script>
    import logoWhite from '../../assets/svelte-white.png'
</script>

<main>
    <div class="navContainer">
        <div class="logoContainer">
            <img src="{logoWhite}" alt="white Svelte logo" />
        </div>
        <div class="logoTextContainer">
            <h1 class="logoText">Svelte Basics</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sections</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </div>
</main>

<style>
    /* --------------------------------- 1201px +++  */

    @media screen and (min-width: 1201px) {
        main {
            width: 100%;
            margin: 0;
            padding: 0;
        }

        .navContainer {
            height: 120px;
            background-color: #ff3e00;
            width: 100%;
            min-width: max-content;
            margin: 0 0 5rem 0;
            padding: 0 3rem;
            display: flex;
            align-content: center;
            position: fixed;
            filter: drop-shadow(0px 10px 21px rgba(0, 0, 0, 0.42));
            top: 0;
            left: 0;
            /*  */
        }

        .logoContainer {
            height: 100%;
            width: 8%;
            min-width: 80px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }

        .logoContainer img {
            width: auto;
            height: 60%;
        }
        .logoTextContainer {
            height: 100%;
            width: 20%;
            min-width: 150px;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            padding: 0 1rem;
            margin: 0;
        }

        .logoText {
            color: white;
            flex-shrink: 1;
            margin: 0;
            padding: 0;
            text-align: left;
        }
        nav {
            width: 72%;
            display: flex;
            justify-content: center;
            padding: 1rem;
        }
        nav ul {
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        li {
            display: flex;
            list-style: none;
            padding: 0.5rem 1rem;
        }

        ul a {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
                'Helvetica Neue', sans-serif;
            font-weight: 400;
            text-decoration: none;
            color: white;
            text-transform: uppercase;
            letter-spacing: 0.2rem;
        }
    }

    /* --------------------------------- 801px - 1200px  */

    @media screen and (max-width: 1200px) {
        main {
            width: 100%;
            min-width: max-content;
            margin: 0;
            padding: 0;
        }

        .navContainer {
            height: 120px;
            background-color: #ff3e00;
            width: 100%;
            margin-bottom: 5rem;
            padding: 0 3rem;
            display: flex;
            align-content: center;
            position: fixed;
            filter: drop-shadow(0px 10px 21px rgba(0, 0, 0, 0.42));
            top: 0;
            /*  */
        }

        .logoContainer {
            height: 100%;
            width: 10%;
            min-width: 80px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }

        .logoContainer img {
            width: auto;
            height: 60%;
        }
        .logoTextContainer {
            height: 100%;
            width: 20%;
            min-width: 150px;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            padding: 0 1rem;
            margin: 0;
        }

        .logoText {
            color: white;
            flex-shrink: 1;
            margin: 0;
            padding: 0;
            text-align: left;
        }
        nav {
            width: 70%;
            display: flex;
            justify-content: center;
            padding: 1rem;
        }
        nav ul {
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        li {
            display: flex;
            list-style: none;
            padding: 0.5rem 1rem;
        }

        ul a {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
                'Helvetica Neue', sans-serif;
            font-weight: 400;
            text-decoration: none;
            color: white;
            text-transform: uppercase;
            letter-spacing: 0.2rem;
        }
    }

    /* --------------------------------- 601px - 800px  */

    @media screen and (max-width: 800px) {
        main {
            width: 100%;
            min-width: max-content;
            margin: 0;
            padding: 0;
        }

        .navContainer {
            height: 120px;
            background-color: #ff3e00;
            width: 100%;
            margin-bottom: 5rem;
            padding: 0 1rem;
            display: flex;
            align-content: center;
            position: fixed;
            filter: drop-shadow(0px 10px 21px rgba(0, 0, 0, 0.42));
            top: 0;

            /*  */
        }

        .logoContainer {
            height: 100%;
            width: 10%;
            min-width: 80px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }

        .logoContainer img {
            width: auto;
            height: 60%;
        }
        .logoTextContainer {
            display: none;
        }

        .logoText {
            color: white;
            flex-shrink: 1;
            margin: 0;
            padding: 0;
            text-align: left;
        }
        nav {
            width: 90%;
            display: flex;
            justify-content: center;
            padding: 1rem;
        }
        nav ul {
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        li {
            display: flex;
            list-style: none;
            padding: 0.5rem 1rem;
        }

        ul a {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
                'Helvetica Neue', sans-serif;
            font-weight: 400;
            text-decoration: none;
            color: white;
            text-transform: uppercase;
            letter-spacing: 0.2rem;
        }
    }

    /* --------------------------------- 301 - 600px  */
    @media screen and (max-width: 600px) {
        main {
            width: 100%;
            min-width: max-content;
            margin: 0;
            padding: 0;
        }

        .navContainer {
            height: 250px;
            background-color: #ff3e00;
            min-width: 100%;
            margin: 0 0 5rem 0;
            padding: 0 2rem;
            display: flex;
            align-content: center;
            justify-content: center;
            position: fixed;
            filter: drop-shadow(0px 10px 21px rgba(0, 0, 0, 0.42));
            top: 0;
            left: 0;
            /* border: 2px solid lime; */
        }

        .logoContainer {
            height: 100%;
            width: 35%;
            min-width: 120px;
            display: flex;
            justify-content: center;
            align-items: center;
            /* border: 2px solid lime; */
        }

        .logoContainer img {
            width: auto;
            height: 55%;
        }
        .logoTextContainer {
            display: none;
        }

        .logoText {
            color: white;
            flex-shrink: 1;
            margin: 0;
            padding: 0;
            text-align: left;
        }
        nav {
            width: 65%;
            display: flex;
            justify-content: center;
            padding: 1rem;
            /* border: 2px solid blue; */
        }
        nav ul {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
        }

        li {
            display: flex;
            list-style: none;
            padding: 0.5rem 1rem;
            /* border: 3px solid lime; */
        }

        ul a {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
                'Helvetica Neue', sans-serif;
            font-size: 1.2rem;
            font-weight: 400;
            text-decoration: none;
            color: white;
            text-transform: uppercase;
            letter-spacing: 0.2rem;
            text-align: right;
        }
    }

    /* --------------------------------- 0px - 300px  */
    @media screen and (max-width: 300px) {
        main {
            width: 100%;
            min-width: max-content;
            margin: 0;
            padding: 0;
        }

        .navContainer {
            height: 480px;
            background-color: #ff3e00;
            width: 100%;
            margin: 0 0 5rem 0;
            padding: 0 2rem;
            display: flex;
            flex-direction: column;
            align-content: space-around;
            position: fixed;
            filter: drop-shadow(0px 10px 21px rgba(0, 0, 0, 0.42));
            top: 0;

            /*  */
        }

        .logoContainer {
            height: 30%;
            width: 100%;
            min-width: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .logoContainer img {
            width: auto;
            height: 80%;
        }
        .logoTextContainer {
            display: none;
        }

        .logoText {
            color: white;
            flex-shrink: 1;
            margin: 0;
            padding: 0;
            text-align: left;
        }
        nav {
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 1rem;
            /* border: 2px solid blue; */
        }
        nav ul {
            width: 100%;
            min-width: 100px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
        }

        li {
            display: flex;
            list-style: none;
            padding: 1rem 1rem;
        }

        ul a {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
                'Helvetica Neue', sans-serif;
            font-size: 1.4rem;
            font-weight: 400;
            text-decoration: none;
            color: white;
            text-transform: uppercase;
            letter-spacing: 0.2rem;
        }
    }
</style>
