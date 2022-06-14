<script>
    export let name
    export let version
    export let speed
    export let website
</script>

<p class="exampleText">
    The <span class="makeOrange">{name}</span> package is {speed} fast. Download
    <span class="makeOrange">version {version}</span> from
    <a href="https://www.npmjs.com/package/{name}" target="_blank">npm</a>
    and <a href="{website}" target="_blank">learn more here</a>
</p>
