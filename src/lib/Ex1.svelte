<script>
    import block1 from '../assets/block1.png'
    import '../articleStyles.css'

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
            <span class="chapterSubHeading">Assignments & Declarations</span>
        </h1>

        <section>
            <div class="example">
                <h4>Example of the count having a reactive declaration:</h4>

                <button on:click="{increment}">Clicks: {count}</button>
                <p>
                    <span class="makeOrange">{count} {count === 1 ? 'click' : 'clicks'}</span> doubled would be
                    {doubled}
                    <br />
                    <span class="makeOrange">{count} {count === 1 ? 'click' : 'clicks'}</span> clicks tripled would be
                    {tripled}
                </p>
            </div>
        </section>
        <section>
            <p>
                Svelte automatically updates the DOM when your component's state changes. Often, some parts of a
                component's state need to be computed from other parts (such as a
                <span class="highlighter">fullname</span> derived from a <span class="highlighter">firstname</span> and
                a <span class="highlighter">lastname</span>), and recomputed whenever they change.
            </p>
            <div class="codeBlockImg-LG">
                <img src="{block1}" alt="code block 1" width="100%" />
            </div>
        </section>
    </div>
</main>
