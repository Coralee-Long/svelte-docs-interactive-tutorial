<script>
    import block2_1 from '../../../assets/block2_1.png'
    import '/src/styles/articleStyles.css'
    let count = 0

    $: doubled = count * 2
    $: tripled = count * 3

    $: console.log(`The count is currently: ${count}`)

    const increment = () => {
        count += 1
    }

    let codeBlock = `
    <p>
        let count = 0 <br />
        $: doubled = count * 2 <br />
        $: tripled = count * 3 <br />
    </p>
    `
</script>

<main>
    <div class="container">
        <h1>
            <span class="chapterName">Reactivity</span>
            <br />
            <span class="chapterSubHeading">2.1 Assignments & Declarations</span>
        </h1>
        <div class="spacer"></div>
        <section>
            <p>
                Svelte automatically updates the DOM when your component's state changes. Often, some parts of a
                component's state need to be computed from other parts (such as a
                <span class="highlighter">fullname</span> derived from a <span class="highlighter">firstname</span> and
                a <span class="highlighter">lastname</span>), and recomputed whenever they change.
            </p>
        </section>
        <section>
            <div class="example">
                <h4>Example of the count having a reactive declaration:</h4>
                <div class="codeBlockImg" id="expandPic">
                    <img src="{block2_1}" alt="code block2_1" />
                </div>
                <button on:click="{increment}">Clicks: {count}</button>
                <p class="exampleText">
                    <span class="makeOrange">{count} {count === 1 ? 'click' : 'clicks'}</span> doubled would be
                    {doubled}
                    <br />
                    <span class="makeOrange">{count} {count === 1 ? 'click' : 'clicks'}</span> clicks tripled would be
                    {tripled}
                </p>
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
