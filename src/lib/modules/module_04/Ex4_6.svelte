<script>
    import block4_6a from '../../../assets/block4_6a.png'
    import block4_6b from '../../../assets/block4_6b.png'
    import block4_6c from '../../../assets/block4_6c.png'
    import Thing from './Thing.svelte';

        async function getRandomNumber() {
		const res = await fetch(`/tutorial/random-number`);
		const text = await res.text();

		if (res.ok) {
			return text;
		} else {
			throw new Error(text);
		}
	}

	let promise = getRandomNumber();

	function handleClick() {
		promise = getRandomNumber();
	}

</script>
<main>
    <div class="container">
        <h1>
            <span class="chapterName">Logic</span>
            <br />
            <span class="chapterSubHeading">4.6 <em>AWAIT</em> Blocks</span>
        </h1>
        <div class="spacer"></div>

        <section>
            <p>Most web applications have to deal with asynchronous data at some point. Svelte makes it easy to <span class="makeOrange">await</span> the value of <span class="makeOrange">promises</span> directly in your markup:
            </p>
            <div class="codeBlockImg">
                <img src="{block4_6a}" alt="code block4_6a" />
            </div>
            <p>
               Only the most recent <span class="highlighter">promise</span> is considered, meaning you don't need to worry about race conditions.<br/><br/>
            </p>
             <div class="codeBlockImg">
                <img src="{block4_6b}" alt="code block4_6b" />
            </div>

            <div class="example">
                <h4>Example:</h4>

                <div class="codeBlockImg" id="expandPic">
                    <img src="{block4_6c}" alt="code block4_6c" />
   
   <!-- EXAMPLE CODE     
                <button on:click={handleClick}>
                generate random number
                </button>

                {#await promise}
	                <p>...waiting</p>
                {:then number}
	                <p>The number is {number}</p>
                {:catch error}
	                <p style="color: red">{error.message}</p>
                {/await} -->

                <p class="exampleText">Click <a target="_blank" href="https://svelte.dev/tutorial/await-blocks">Here</a> to see it work on Svelte Docs</p>
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

      a {
        color: rgba(255, 62, 0, 0.5);
    }
</style>
