<script>
    // import block4_1a from '../../../assets/block5_1a.png'
    // import block5_1b from '../../../assets/block5_1b.png'

    let m = { x: 0, y: 0 }

    function handleMousemove(event) {
        m.x = event.clientX
        m.y = event.clientY
    }
</script>
<main>
    <div class="container">
        <h1>
            <span class="chapterName">Events</span>
            <br />
            <span class="chapterSubHeading">5.1 DOM Events</span>
        </h1>
        <div class="spacer"></div>

        <section>
            <p>
                As we've briefly seen already, you can listen to any event on an element with the
                <span class="highlighter">on:</span> directive:
            </p>
            <!-- <pre>
                <code>
                ```example
                <script>
                    let name = 'Button'
                </script>

                <button>{name}</button>

                <style>
                    button {
                        background: red;
                    }
                </style>
                ```
                </code>
            </pre> -->

            <!-- <div class="codeBlockImg" id="expandPic">
                <img src="{block5_1a}" alt="code block5_1a" />
            </div> -->

            <!-- <div class="example">
                <h4>Example:</h4>
                <div class="codeBlockImg" id="expandPic">
                    <img src="{block5_1b}" alt="code block5_1b" />
                    {#if user.loggedIn}
                    <button on:click="{toggle}">Log out</button>
                    {/if} {#if !user.loggedIn}
                    <button on:click="{toggle}">Log in</button>
                    {/if}
                </div>
            </div> -->
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
