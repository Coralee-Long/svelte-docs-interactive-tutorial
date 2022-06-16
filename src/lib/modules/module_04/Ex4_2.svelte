<script>
    import block4_2a from '../../../assets/block4_2a.png'
    import block4_2b from '../../../assets/block4_2b.png'

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
            <span class="chapterSubHeading">4.2 <em>ELSE</em> Blocks</span>
        </h1>
        <div class="spacer"></div>

        <section>
            <p>
                Since the two conditions — <span class="highlighter">user.loggedIn</span> and
                <span class="highlighter">if !user.loggedIn</span> — are mutually exclusive, we can simplify this
                component slightly by using an else block: <br /><br />
                To conditionally render some markup, we wrap it in an <span class="highlighter">if</span> block:
            </p>
            <div class="codeBlockImg" id="expandPic">
                <img src="{block4_2a}" alt="code block4_2a" />
            </div>
            <p>
                A <span class="highlighter">#</span> character always indicates a block opening tag. <br />
                A <span class="highlighter">/</span> character always indicates a block closing tag.<br />
                A <span class="highlighter">:</span> character, as in
                <span class="highlighter">&#123; :else &#125;</span>, indicates a block continuation tag.
            </p>

            <div class="example">
                <h4>Example:</h4>
                <div class="codeBlockImg" id="expandPic">
                    <img src="{block4_2b}" alt="code block4_2b" />
                    {#if user.loggedIn}
                    <button on:click="{toggle}">Log out</button>
                    {:else}
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
