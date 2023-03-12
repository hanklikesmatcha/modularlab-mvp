<script lang='ts'>
    import {captaliseWord} from '../utils/formatting';
    /**
	 * @type {any}
	 */
     export let path;
     const tokens = path.split('/').filter((token: any) => token !== '' ).slice(2);
        let tokenPath = '';
        let crumbs = tokens.map((token: any) => {
            tokenPath += '/' + token;
            return {
                label: token === 'user'? 'profile': token,
                href: tokenPath,
            };
        });

        crumbs.unshift({ label: 'home', href: '/' });
</script>

<div data-sveltekit-preload-data class="text-sm breadcrumbs">
    <ul>
        {#each crumbs as c, i}
            <li><a href={c.href}>{captaliseWord(c.label)}</a></li> 
        {/each}
    </ul>
</div>