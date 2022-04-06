<!DOCTYPE HTML>
<html>
	<head>
		<title>Construcampi</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<!-- CSS SEM INCLUDE!! SENAO BUGA -->
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
		<link rel="stylesheet" href="public/assets/css/main.css" />
		<link rel="stylesheet" href="public/assets/css/animacoes.css" />
	</head>
	<body class="landing is-preload">
		<div id="page-wrapper" style="position:relative; display: block;">
			<!-- Header -->
			<?php include "includes/header.php"; ?>
			<!-- Banner -->
			<section id="banner">
				<h2>CONSTRU</a>C<span style="color:#f00">A</span>MPI</h2>
				<p>Seu objetivo é o nosso principal compromisso e responsabilidade</p>
				<ul class="actions special">
					<li><a href="#" class="button">Saíba mais</a></li>
				</ul>
			</section>

			<!-- Main -->
				<section id="main" class="container">
					<!-- VIdeo -->
					<section class="box special">
							<header class="major">
								<h2>Introdução
								<br />
								Sobre a empresa</h2>
								<p>texto descritivo.</p>
							</header>
							<!-- Da pra perceber um offset estranho ao selecionar o icone, isso é por causa da div Não ter o translate, o translate esta criando aquele efeito de ampliar -->
							<div id="video_player_home" style='position:relative;'>
								<div class="grow">
									<i class="icon solid major fa-solid fa-play"></i>
								</div>
								
								<video preload="auto" autoplay muted loop playsinline="" webkit-playsinline="" x5-playsinline="" style="width: 100%; height: 100%;">
									<source src="./public/videos/video_site.mp4">
								</video>
								
							</div>
						</section>
						
						<section class="box special features">
							<div class="features-row">
								<section>
									<span class="icon solid major fa-bolt accent2"></span>
									<h3>Magna etiam</h3>
									<p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
								</section>
								<section>
									<span class="icon solid major fa-chart-area accent3"></span>
								<h3>Ipsum dolor</h3>
								<p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
							</section>
						</div>
						<div class="features-row">
							<section>
								<span class="icon solid major fa-cloud accent4"></span>
								<h3>Sed feugiat</h3>
								<p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
							</section>
							<section>
								<span class="icon solid major fa-lock accent5"></span>
								<h3>Enim phasellus</h3>
								<p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
							</section>
						</div>
					</section>

					<div class="row">
						<div class="col-6 col-12-narrower">

							<section class="box special">
								<span class="image featured"><img src="public/images/pic02.jpg" alt="" /></span>
								<h3>Sed lorem adipiscing</h3>
								<p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
								<ul class="actions special">
									<li><a href="#" class="button alt">Learn More</a></li>
								</ul>
							</section>

						</div>
						<div class="col-6 col-12-narrower">

							<section class="box special">
								<span class="image featured"><img src="public/images/pic03.jpg" alt="" /></span>
								<h3>Accumsan integer</h3>
								<p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
								<ul class="actions special">
									<li><a href="#" class="button alt">Learn More</a></li>
								</ul>
							</section>

						</div>
					</div>

				</section>

				<section>
					<h3 class="text-light text-center">Onde estamos localizados</h3>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.103124475027!2d-46.85204328502365!3d-23.492794784716946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf02394b674fc9%3A0x66136606865c6ceb!2sEdificio%20Amazonia!5e0!3m2!1spt-BR!2sbr!4v1649184281592!5m2!1spt-BR!2sbr" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
				
				</section>

			<!-- Footer -->
		 	<?php include("includes/footer.php"); ?>
		</div>

		<!-- SCRIPTS SEM IMPORT -->
		<script src="public/assets/js/lib/jquery.min.js"></script>
		<script src="public/assets/js/lib/jquery.dropotron.min.js"></script>
		<script src="public/assets/js/lib/jquery.scrollex.min.js"></script>
		<script src="public/assets/js/lib/browser.min.js"></script>
		<script src="public/assets/js/lib/breakpoints.min.js"></script>
		<script src="public/assets/js/lib/util.js"></script>
		<script src="public/assets/js/lib/main.js"></script>
		<script src="public/assets/js/home/home.js"></script>
		<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
		<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
	</body>
</html>