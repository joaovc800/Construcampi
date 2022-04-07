<!DOCTYPE HTML>
<html lang="pt-br">
	<head>
		<title>Construcampi</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<?php include "../includes/css_imports.php";?>
	</head>
	<body class="landing is-preload">
		<div id="page-wrapper" style="position:relative; display: block;">
			<!-- Header -->
			<?php include "../includes/header.php"; ?>
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
								<i class="icon pointer solid bg-gold major fa-solid fa-play"></i>
							</div>	
							<video preload="auto" autoplay muted loop playsinline="" webkit-playsinline="" x5-playsinline="" style="width: 100%; height: 100%;">
								<source src="./public/videos/video_site.mp4">
							</video>	
						</div>
					</section>
						
					<section class="box special features">
						<div class="features-row">
							<section>
								<span class="icon solid major fa-bullseye accent2"></span>
								<h3>Missão</h3>
								<p>Compreender a necessidade do mercado de engenharia, desenvolver soluções de alta qualidade para as demandas de nossos clientes e colaboradores, sempre implementando os valores necessários para obter a alta eficiência de ponta no ramo da construção civil.</p>
							</section>
							<section>
								<span class="icon solid major fa-signal accent3"></span>
								<h3>Visão</h3>
								<p>Trazer, a partir de muita eficiência e confiança em nosso trabalho, a consolidação de nosso nome no mercado, buscando sempre o crescimento atrelado a resultados de alta satisfação de nossos clientes, colaboradores e parceiros.</p>
							</section>
						</div>
						<div class="features-row">
							<section style="padding:10px 0 0 0; width:100%;">
								<span class="icon solid major fa-handshake accent4"></span>
								<h3>Valores</h3>
								<p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
							</section>
						</div>
					</section>

					<div class="row">
						<div class="col-6 col-12-narrower">
							<section class="box special">
								<span class="image featured" style="overflow: hidden;"><img src="public/images/cc1.jpg" alt="" class="grow_image" /></span>
								<h3>Sed lorem adipiscing</h3>
								<p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
								<ul class="actions special">
									<li><a href="#" class="button alt">Learn More</a></li>
								</ul>
							</section>
						</div>
						<div class="col-6 col-12-narrower">
							<section class="box special">
								<span class="image featured" style="overflow: hidden;"><img src="public/images/cc2.jpg" alt="" class="grow_image" /></span>
								<h3>Accumsan integer</h3>
								<p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
								<ul class="actions special">
									<li><a href="#" class="button alt">Learn More</a></li>
								</ul>
							</section>
						</div>
					</div>
				</section>

			<!-- Footer -->
		 	<?php include "../includes/footer.php"; ?>
		</div>
		<div vw class="enabled">
			<div vw-access-button class="active"></div>
			<div vw-plugin-wrapper>
				<div class="vw-plugin-top-wrapper"></div>
			</div>
 		</div>
		 <div id="back" class="text-center">
		 	<i class="fas h5 mt-1 text-light fa-angle-double-up"></i>
		 </div>
		<?php include "../includes/scripts_imports.php";?>
	</body>
</html>