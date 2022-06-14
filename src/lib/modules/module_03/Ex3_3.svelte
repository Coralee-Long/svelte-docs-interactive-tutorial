<script>
    import block3_3a from '../../../assets/block3_3a.png'
    import block3_3b from '../../../assets/block3_3b.png'
    import Info from '../module_03/Info.svelte'
    import '/src/styles/articleStyles.css'

    	const pkg = {
		name: 'Svelte',
		version: 3,
		speed: 'blazing',
		website: 'https://svelte.dev'
	};

</script>

<main>
    <div class="container">
        <h1>
            <span class="chapterName">Props</span>
            <br />
            <span class="chapterSubHeading">3.3 Spread Props</span>
        </h1>
        <div class="spacer"></div>

        <section>
            <p>
                If you have an object of properties, you can 'spread' them onto a component instead of specifying each
                one:
            </p>
            <div class="codeBlockImg" id="reducePic">
                <img src="{block3_3a}" alt="code block3_3a" />
            </div>
            <p>
                Conversely, if you need to reference all the props that were passed into a component, including ones
                that weren't declared with <span class="highlighter">export</span>, you can do so by accessing
                <span class="highlighter">$$props</span> directly. It's not generally recommended, as it's difficult for
                Svelte to optimise, but it's useful in rare cases.
            </p>

            <div class="example">
                <h4>Example:</h4>
                <div class="codeBlockImg" id="expandPic">
                    <img src="{block3_3b}" alt="code block3_3b" />
                </div>
                <Info name={pkg.name} version={pkg.version} speed={pkg.speed} website={pkg.website} />
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
