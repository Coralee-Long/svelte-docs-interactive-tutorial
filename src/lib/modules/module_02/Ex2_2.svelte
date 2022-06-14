<script>
    import block2_2a from '../../../assets/block2_2a.png'
    import block2_2b from '../../../assets/block2_2b.png'
    import block2_2c from '../../../assets/block2_2c.png'
    import '/src/styles/articleStyles.css'
</script>

<main>
    <div class="container">
        <h1>
            <span class="chapterName">Reactivity</span>
            <br />
            <span class="chapterSubHeading">2.2 Statements</span>
        </h1>
        <div class="spacer"></div>
        <section>
            <p>
                We're not limited to declaring reactive values — we can also run arbitrary statements reactively. For
                example, we can log the value of <span class="highlighter">count</span> whenever it changes:
            </p>
            <div class="codeBlockImg">
                <img src="{block2_2a}" alt="code block2_2a" />
            </div>
        </section>
        <section>
            <p>You can easily group statements together with a block:</p>
            <div class="codeBlockImg">
                <img src="{block2_2b}" alt="code block2_2b" />
            </div>
        </section>
        <section>
            <p>
                You can even put the <span class="highlighter">$:</span> in front of things like
                <span class="highlighter">if</span> blocks:
            </p>
            <div class="codeBlockImg">
                <img src="{block2_2c}" alt="code block2_2c" />
            </div>
        </section>
    </div>
</main>

<style>
    main {
        width: 100%;
        /* border: 3px solid lime; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
