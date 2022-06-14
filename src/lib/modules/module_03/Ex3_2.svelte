<script>
    import block3_2a from '../../../assets/block3_2a.png'
    import block3_2b from '../../../assets/block3_2b.png'
    import block3_2c from '../../../assets/block3_2c.png'
    import Nested from '../module_03/Nested.svelte'
    import '/src/styles/articleStyles.css'
</script>

<main>
    <div class="container">
        <h1>
            <span class="chapterName">Props</span>
            <br />
            <span class="chapterSubHeading">3.2 Default Values</span>
        </h1>
        <div class="spacer"></div>

        <section>
          
                <p>
                    We can easily specify default values for props in
                    <span class="highlighter">Nested.svelte</span> component:
                </p>
                <div class="codeBlockImg">
                    <img src="{block3_2a}" alt="code block3_2a" />
                </div>
                <p>
                    If we now add a second component <em>without</em> an <span class="highlighter">answer</span> prop, it will fall back to the default:
                </p>
                <div class="codeBlockImg">
                    <img src="{block3_2b}" alt="code block3_2b" />
                </div>
                  <div class="example">
                <h4>Example:</h4>
                <div class="codeBlockImg" id="expandPic">
                    <img src="{block3_2c}" alt="code block3_2c" />
                </div>
                <Nested answer={42}/>
                <Nested/>
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
