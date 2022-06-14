<script>
    import block4_1a from '../../../assets/block4_1a.png'
    import block4_1b from '../../../assets/block4_1b.png'

    let user = { loggedIn: false }

    function toggle() {
        user.loggedIn = !user.loggedIn
    }
</script>
<main>
    <div class="container">
        <h1>
            <span class="chapterName">Logic</span>
            <br />
            <span class="chapterSubHeading">4.1 <em>IF</em> Blocks</span>
        </h1>
        <div class="spacer"></div>

        <section>
            <p>
                HTML doesn't have a way of expressing <em>logic</em>, like conditionals and loops. Svelte does.
                <br /><br />
                To conditionally render some markup, we wrap it in an <span class="highlighter">if</span> block:
            </p>
            <div class="codeBlockImg" id="expandPic">
                <img src="{block4_1a}" alt="code block4_1a" />
            </div>

            <div class="example">
                <h4>Example:</h4>
                <div class="codeBlockImg" id="expandPic">
                    <img src="{block4_1b}" alt="code block4_1b" />
                    {#if user.loggedIn}
                    <button on:click="{toggle}">Log out</button>
                    {/if} {#if !user.loggedIn}
                    <button on:click="{toggle}">Log in</button>
                    {/if}
                </div>
            </div>
        </section>

        <div class="spacer"></div>
    </div>
</main>

<style>
    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
