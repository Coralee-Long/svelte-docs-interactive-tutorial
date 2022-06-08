<script>
    import block3a from '../assets/block3a.png'
    import block3b from '../assets/block3b.png'
    import block3c from '../assets/block3c.png'
    import block3d from '../assets/block3d.png'
    import block3e from '../assets/block3e.png'
    import '../articleStyles.css'
</script>

<main>
    <div class="container">
        <h1>
            <span class="chapterName">Reactivity</span>
            <br />
            <span class="chapterSubHeading">Updating Arrays & Objects</span>
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
            <div class="codeBlockImg-MD">
                <img src="{block3a}" alt="code block 3a" width="100%" />
            </div>
        </section>
        <section>
            <p>You could also write this more concisely using the ES6 spread syntax:</p>
            <div class="codeBlockImg-MD">
                <img src="{block3b}" alt="code block 3b" width="100%" />
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
            <div class="codeBlockImg-MD">
                <img src="{block3c}" alt="code block 3c" width="100%" />
            </div>
            <p>
                ...won't trigger reactivity on <span class="highlighter">obj.foo.bar</span>, unless you follow it up
                with <span class="highlighter">obj = obj</span>. <br /><br />A simple rule of thumb: the updated
                variable must directly appear on the left hand side of the assignment.
            </p>
        </section>
        <div class="spacer"></div>
    </div>
</main>
