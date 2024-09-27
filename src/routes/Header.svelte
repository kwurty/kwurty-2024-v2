<script>
	import { page } from '$app/stores';
	const links = [
		{
			link: '/',
			title: 'About Me'
		},
		{
			link: '/projects',
			title: 'Projects'
		},
		{
			link: '/contact',
			title: 'Contact'
		}
	];
</script>

<header class="pt-4 clouds-container">
		<div class="nes-container light with-title h-40 w-full ml-5">
			<p class="title border-black border-4 -translate-y-2 absolute">Menu</p>
			<nav class="flex w-full h-full align-middle justify-center">
				<ul class="flex gap-10 m-auto">
					{#each links as link}
					<li
						aria-current={$page.url.pathname.split('/')[1] == link.link.split('/')[1]
							? 'page'
							: undefined}
					>
					<a href={link.link}><button class="nes-btn is-primary">{link.title} </button></a>
				</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style>

.nes-btn.is-primary:hover{
	animation: flashBackground .35s linear infinite;
}

.light {
	background-color: rgba(255,255,255,.75)
}

.nes-container {
	width: 800px;
	height: 120px;
}

nav {
	width: 100%;

    scrollbar-gutter: stable;
}

@keyframes flashBackground {
	from {
		background-color: #7dc9fc;
	}
	to {
		background-color: #4baae9;
	}
}

@keyframes animatedBackground {
  from {
    background-position: 0 0;
  }
/*use negative width if you want it to flow right to left else and positive for left to right*/
  to {
    background-position: -10000px 0;
  }
}
</style>
