<script>
    import block4_5a from '../../../assets/block4_5a.png'
    import block4_5b from '../../../assets/block4_5b.png'
    import block4_5c from '../../../assets/block4_5c.png'
    import Thing from './Thing.svelte';

	let things = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' },
	];

	function handleClick() {
		things = things.slice(1);
	}

</script>
<main>
    <div class="container">
        <h1>
            <span class="chapterName">Logic</span>
            <br />
            <span class="chapterSubHeading">4.5 Keyed <em>EACH</em> Blocks</span>
        </h1>
        <div class="spacer"></div>

        <section>
            <p>By default, when you modify the value of an <span class="highlighter">each</span>    block, it will add and remove items at the end of the block, and update any values that have changed. That might not be what you want.<br/><br/>

            It's easier to show why than to explain. Click the 'Remove first thing' button a few times, and notice what happens: it does not remove the first <span class="highlighter">&lt;Thing&gt;</span> component, but rather the last DOM node. Then it updates the <span class="highlighter">name</span> value in the remaining DOM nodes, but not the emoji.<br/><br/>

            Instead, we'd like to remove only the first <span class="highlighter">&lt;Thing&gt;</span> component and its DOM node, and leave the others unaffected.<br/><br/>

            To do that, we specify a unique identifier (or "key") for the <span class="highlighter">each</span> block:
            </p>
            <div class="codeBlockImg">
                <img src="{block4_5a}" alt="code block4_5a" />
            </div>
            <p>
                Here, <span class="highlighter">(thing.id)</span> is the <span class="makeOrange">key</span>, which tells Svelte how to figure out which DOM node to change when the component updates.<br /><br />
                You can use any object as the key, as Svelte uses a Map internally — in other words you could do <span class="highlighter">(thing)</span>  instead of <span class="highlighter">(thing.id)</span>. Using a string or number is generally safer, however, since it means identity persists without referential equality, for example when updating with fresh data from an API server.
            </p>

            <div class="example">
                <h4>Example:</h4>

                <div class="codeBlockImg" id="expandPic">
                    <img src="{block4_5b}" alt="code block4_5b" />
                    <img src="{block4_5c}" alt="code block4_5c" />
                    <button on:click={handleClick}>Remove first thing</button>

                {#each things as thing (thing.id)} 
	                <Thing name={thing.name}/>
                {/each}
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
