<script>
    import block4_4a from '../../../assets/block4_4a.png'
    import block4_4b from '../../../assets/block4_4b.png'
    import block4_4c from '../../../assets/block4_4c.png'

    let cats = [
        { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
        { id: 'z_AbfPXTKms', name: 'Maru' },
        { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' },
    ]
</script>
<main>
    <div class="container">
        <h1>
            <span class="chapterName">Logic</span>
            <br />
            <span class="chapterSubHeading">4.4 <em>EACH</em> Blocks</span>
        </h1>
        <div class="spacer"></div>

        <section>
            <p>If you need to loop over lists of data, use an <span class="highlighter">each</span> block:</p>
            <div class="codeBlockImg">
                <img src="{block4_4a}" alt="code block4_4a" />
            </div>
            <p>
                The expression (<span class="highlighter">cats</span>, in this case) can be any array or array-like
                object (i.e. it has a <span class="highlighter">length</span> property). You can loop over generic
                iterables with each <span class="highlighter">[...iterable]</span>.<br /><br />
                You can get the current index as a second argument, like so:
            </p>
            <div class="codeBlockImg">
                <img src="{block4_4b}" alt="code block4_4b" />
            </div>

            <div class="example">
                <h4>Example:</h4>

                <div class="codeBlockImg" id="expandPic">
                    <img src="{block4_4c}" alt="code block4_4c" />
                </div>
                <div class="list">
                    <ul>
                        {#each cats as cat}

                        <li>
                            <a target="_blank" href="https://www.youtube.com/watch?v={cat.id}"> {cat.name} </a>
                        </li>
                        {/each}
                    </ul>
         
                    <!------------- 	 OR DESTRUCTURED: 	 ------------->
                    <h5>DESTRUCTURED VERSION:</h5>
                    <ul>
                        {#each cats as {id, name}}

                        <li>
                            <a target="_blank" href="https://www.youtube.com/watch?v={id}"> {name} </a>
                        </li>
                        {/each}
                    </ul>
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

    h5 {
        padding: 2rem 0 0.5rem 0;
        margin: 0;
        font-weight: 400;
        font-size: 1rem;
        background-color: #ffffff;
        color: rgba(255, 62, 0, 0.9);
        text-align: left;
    }
    ul {
        text-align: left;
        margin: 0;
    }

    ul li {
        list-style: none;
        padding: 0.2rem;
    }

    a {
    
        color: rgba(255, 62, 0, 0.5);
    }

    .list {
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        padding: 1rem;
    }
</style>
