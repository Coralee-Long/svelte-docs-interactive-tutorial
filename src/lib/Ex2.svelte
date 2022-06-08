<script>
    import block2a from '../assets/block2a.png'
    import block2b from '../assets/block2b.png'
    import block2c from '../assets/block2c.png'
    import '../articleStyles.css'
</script>

<main>
    <div class="container">
        <h1>
            <span class="chapterName">Reactivity</span>
            <br />
            <span class="chapterSubHeading">Statements</span>
        </h1>
        <div class="spacer"></div>
        <section>
            <p>
                We're not limited to declaring reactive values — we can also run arbitrary statements reactively. For
                example, we can log the value of <span class="highlighter">count</span> whenever it changes:
            </p>
            <div class="codeBlockImg-MD">
                <img src="{block2a}" alt="code block 2" width="100%" />
            </div>
        </section>
        <section>
            <p>You can easily group statements together with a block:</p>
            <div class="codeBlockImg-MD">
                <img src="{block2b}" alt="code block 2" width="100%" />
            </div>
        </section>
        <section>
            <p>
                You can even put the <span class="highlighter">$:</span> in front of things like
                <span class="highlighter">if</span> blocks:
            </p>
            <div class="codeBlockImg-MD">
                <img src="{block2c}" alt="code block 2" width="100%" />
            </div>
        </section>
    </div>
</main>
