<script>
    import block4_3a from '../../../assets/block4_3a.png'
    import block4_3b from '../../../assets/block4_3b.png'

    let x = 7
</script>
<main>
    <div class="container">
        <h1>
            <span class="chapterName">Logic</span>
            <br />
            <span class="chapterSubHeading">4.3 <em>ELSE-IF</em> Blocks</span>
        </h1>
        <div class="spacer"></div>

        <section>
            <p>Multiple conditions can be 'chained' together with <span class="highlighter">else if</span> :</p>
            <div class="codeBlockImg" id="reducePic">
                <img src="{block4_3a}" alt="code block4_3a" />
            </div>

            <div class="example">
                <h4>Example:</h4>

                <div class="codeBlockImg" id="expandPic">
                    <img src="{block4_3b}" alt="code block4_3b" />

                    {#if x > 10}
                    <p class="exampleText">
                        <span class="makeOrange">{x}</span> is greater than <span class="makeOrange">10</span>/p>
                    </p>
                    {:else} {#if 5 > x}
                    <p class="exampleText">
                        <span class="makeOrange">{x}</span> is less than <span class="makeOrange">5</span>
                    </p>
                    {:else}
                    <p class="exampleText">
                        <span class="makeOrange">{x}</span> is between <span class="makeOrange">5</span> and
                        <span class="makeOrange">10</span>
                    </p>
                    {/if} {/if}
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
