<script>
    import Ex2_1 from '../modules/module_02/Ex2_1.svelte'
    import Ex2_2 from '../modules/module_02/Ex2_2.svelte'
    import Ex2_3 from '../modules/module_02/Ex2_3.svelte'

    // export let modules = [<Ex2_1 />, <Ex2_2 />, <Ex2_3 />] // Attempted to see if I could map Components

    export let modules = ['apple', 'banana', 'cherry']
</script>
<main>
    <div id="test">
        <ul>
            {#each modules as module}
            <li>{module}</li>
            {/each}
        </ul>
    </div>
</main>

<style>
    #test {
        width: 100%;
        height: 100%;
        border: 3px solid lime;
    }
</style>
