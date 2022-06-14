<script>
    import block3_1a from '../../../assets/block3_1a.png'
    import block3_1b from '../../../assets/block3_1b.png'
    import block3_1c from '../../../assets/block3_1c.png'
    import Nested from '../module_03/Nested.svelte'
    import '/src/styles/articleStyles.css'
</script>

<main>
    <div class="container">
        <h1>
            <span class="chapterName">Props</span>
            <br />
            <span class="chapterSubHeading">3.1 Declaring Props</span>
        </h1>
        <div class="spacer"></div>

        <section>
          
                <p>
                    So far, we've dealt exclusively with internal state — that is to say, the values are only accessible
                    within a given component. <br /><br />
                    In any real application, you'll need to pass data from one component down to its children. To do
                    that, we need to declare properties, generally shortened to 'props'. In Svelte, we do that with the
                    <span class="highlighter">export</span> keyword. Edit the
                    <span class="highlighter">Nested.svelte</span> component:
                </p>
                <div class="codeBlockImg">
                    <img src="{block3_1a}" alt="code block3_1a" />
                </div>
                <p>
                    Just like <span class="highlighter">$:</span>, this may feel a little weird at first. That's not how
                    export normally works in JavaScript modules! Just roll with it for now — it'll soon become second
                    nature.
                </p>
                <div class="codeBlockImg">
                    <img src="{block3_1b}" alt="code block3_1b" />
                </div>
                  <div class="example">
                <h4>Example:</h4>
                <div class="codeBlockImg" id="expandPic">
                    <img src="{block3_1c}" alt="code block3_1c" />
                </div>
                <Nested answer={42}/>
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
