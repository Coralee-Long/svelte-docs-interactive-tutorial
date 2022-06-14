<script>
    import block2_3a from '../../../assets/block2_3a.png'
    import block2_3b from '../../../assets/block2_3b.png'
    import block2_3c from '../../../assets/block2_3c.png'
    import block2_3d from '../../../assets/block2_3d.png'
    import block2_3e from '../../../assets/block2_3e.png'
    import block2_3f from '../../../assets/block2_3f.png'
    import '/src/styles/articleStyles.css'

    let numbers = [1, 2, 3, 4]

    const addNumber = () => {
        numbers = [...numbers, numbers.length + 1]
    }

    $: sum = numbers.reduce((t, n) => t + n, 0)
</script>

<main>
    <div class="container">
        <h1>
            <span class="chapterName">Reactivity</span>
            <br />
            <span class="chapterSubHeading">2.3 Updating Arrays & Objects</span>
        </h1>
        <div class="spacer"></div>

        <section>
            <p>
                Svelte's reactivity is triggered by assignments. Methods that mutate arrays or objects will not trigger
                updates by themselves.<br /><br />
                In this example, clicking the "Add a number" button calls the
                <span class="highlighter">addNumber</span> function, which appends a number to the array but doesn't
                trigger the recalculation of <span class="highlighter">sum</span>. <br /><br />One way to fix that is to
                assign <span class="highlighter">numbers</span> to itself to tell the compiler it has changed:
            </p>
            <div class="codeBlockImg">
                <img src="{block2_3a}" alt="code block2_3a" />
            </div>
        </section>

        <section>
            <p>You could also write this more concisely using the ES6 spread syntax:</p>
            <div class="codeBlockImg">
                <img src="{block2_3b}" alt="code block2_3b" />
            </div>
        </section>

        <section>
            <p>
                The same rule applies to array methods such as <span class="highlighter">pop</span> ,
                <span class="highlighter">shift</span>, and <span class="highlighter">splice</span> and to objects
                methods such as Map.set, Set.add, etc. <br /><br />Assignments to properties of arrays and objects —
                e.g. <span class="highlighter">obj.foo += 1</span> or <span class="highlighter">array[i] = x</span> —
                work the same way as assignments to the values themselves.
            </p>
            <div class="codeBlockImg">
                <img src="{block2_3c}" alt="code block2_3c" />
            </div>
            <p>However, indirect assignments to references such as this...</p>
            <div class="codeBlockImg" id="reducePic">
                <img src="{block2_3d}" alt="code block2_3d" />
            </div>
            <p>...or this...</p>
            <div class="codeBlockImg" id="reducePic">
                <img src="{block2_3e}" alt="code block2_3e" />
            </div>
            <p>
                ...won't trigger reactivity on <span class="highlighter">obj.foo.bar</span>, unless you follow it up
                with <span class="highlighter">obj = obj</span>. <br /><br />A simple rule of thumb: the updated
                variable must directly appear on the left hand side of the assignment.
            </p>
        </section>
        <section>
            <div class="example">
                <h4>Example:</h4>

                <div class="codeBlockImg" id="expandPic">
                    <img src="{block2_3f}" alt="code block2_3f" />
                </div>
                <button on:click="{addNumber}">Add a number</button>
                <p class="exampleText">{numbers.join(' + ')} = {sum}</p>
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
