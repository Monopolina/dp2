<template>

<section>
    <div class="hero-wrap">
	    <div class="home-slider owl-carousel">
	      <div class="slider-item" :style="{ backgroundImage: 'url(' + require('@/assets/image/2.jpg') + ')' }">
	      	<div class="overlay"></div>
	        <div class="container">
	          <div class="row no-gutters slider-text align-items-center ">
		          <div class="col-md-12 ">
		          	<div class="text w-100 text-center">
		          		<h2>Мурашкин Данил</h2>
			            <h1 class="mb-3">Я здесь, чтобы помочь вам</h1>
		            </div>
		          </div>
		        </div>
	        </div>
	      </div>

	      <!-- <div class="slider-item carousel-inner" :style="{ backgroundImage: 'url(' + require('@/assets/image/3.jpg') + ')' }">
	      	<div class="overlay"></div>
	        <div class="container">
	          <div class="row no-gutters slider-text align-items-center ">
		          <div class="col-md-12 ">
		          	<div class="text w-100 text-center">
		          		<h2>Лучшие мастера по ремонту монторов</h2>
			            <h1 class="mb-3">Мы ремонтируем мониторы</h1>
		            </div>
		          </div>
		        </div>
	        </div>
	      </div>

          <div class="slider-item carousel-inner" :style="{ backgroundImage: 'url(' + require('@/assets/image/4.jpeg') + ')' }">
            <div class="overlay"></div>
            <div class="container">
              <div class="row no-gutters slider-text align-items-center ">
                <div class="col-md-12 ">
                  <div class="text w-100 text-center">
                    <h2>Лучшие интернет-магазин</h2>
                    <h1 class="mb-3">Заходите:)</h1>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
	    </div>
	  </div>

    
    		<div class="row no-gutters">
    			<div class="col-md-12 col-lg-4 services-2 p-4 py-5 d-flex ">
    				<div class="py-3 d-flex">
	    				<div class="icon">
	    					<span class="flaticon-engineer-1"></span>
	    				</div>
	    				<div class="text">
	      				<h3>Эксперты и профессионалы</h3>
	      				<p class="mb-0">У нас работают самые лучшие специалисты</p>
	    				</div>
	    			</div>
    			</div>
    			<div class="col-md-12 col-lg-4 services-2 p-4 py-5 d-flex ">
    				<div class="py-3 d-flex">
	    				<div class="icon">
	    					<span class="flaticon-engineer-1"></span>
	    				</div>
	    				<div class="text">
	      				<h3>Высококачественный ремонт и продажа </h3>
	      				<p class="mb-0">Мы ремонтируем и продаем со скоростью света</p>
	      			</div>
	      		</div>
    			</div>
    			<div class="col-md-12 col-lg-4 services-2 p-4 py-5 d-flex ">
    				<div class="py-3 d-flex">
	    				<div class="icon">
	    					<span class="flaticon-engineer-2"></span>
	    				</div>
	    				<div class="text">
	      				<h3> Поддержка 24/7 </h3>
	      				<p class="mb-0">Наши специалисты свяжутся с вами в любое время!</p>
	      			</div>
	      		</div>
    			</div>
    		</div>
    
   
    
</section>

    
	

    <section class="ftco-section testimony-section bg-primary">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 text-center heading-section heading-section- ">
          	<span class="subheading">Testimonial</span>
            <h2 class="mb-4">Последние отзывы</h2>
          </div>
        </div>
        <div class="row ">
          <div class="col-md-12">
            <div class="carousel-testimony owl-carousel ftco-owl">
              <div class="item">
                <div class="testimony-wrap py-4">
                	<div class="icon d-flex align-items-center justify-content-center"><span class="fa fa-quote-left"></span></div>
                  <div class="text">
                    <p class="mb-4">Советую всем, все быстро сделали даже при такой сложной поломке</p>
                    <div class="d-flex align-items-center">
                    	<div class="user-img" :style="{ backgroundImage: 'url(' + require('@/assets/image/vlad.jpg') + ')' }"></div>
                    	<div class="pl-3">
		                    <p class="name">Зуев Владислав</p>
		                    <span class="position">Школьник</span>
		                  </div>
	                  </div>
                  </div>
                </div>
              </div>
              <div>
              <p class="icon py-4" ></p>
              </div>
              <div class="item">
                <div class="testimony-wrap py-4">
                	<div class="icon d-flex align-items-center justify-content-center"><span class="fa fa-quote-left"></span></div>
                  <div class="text">
                    <p class="mb-4">Сделал все качественно , не смотря на всю сложность разбора монитора , очень благодарен и советую данного мастера !</p>
                    <div class="d-flex align-items-center">
                    	<div class="user-img" :style="{ backgroundImage: 'url(' + require('@/assets/image/boris.jpg') + ')' }"></div>
                    	<div class="pl-3">
		                    <p class="name">Ищенко борис</p>
		                    <span class="position">Студент</span>
		                  </div>
	                  </div>
                  </div>
                </div>
              </div>
              <div>
              <p class="icon py-4" ></p>
              </div>
              <div class="item">
                <div class="testimony-wrap py-4">
                	<div class="icon d-flex align-items-center justify-content-center"><span class="fa fa-quote-left"></span></div>
                  <div class="text">
                    <p class="mb-4">Абсолютно ответственный и грамотный специалист! Быстро и качественно решил  проблему с монитором</p>
                    <div class="d-flex align-items-center">
                    	<div class="user-img" :style="{ backgroundImage: 'url(' + require('@/assets/image/can.jpg') + ')' }"></div>
                    	<div class="pl-3">
		                    <p class="name">Кисмерешкин Александр</p>
		                    <span class="position">Многодетный отец</span>
		                  </div>
	                  </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>        
    </section>

    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section text-center ">
          	<span class="subheading">Наши новости</span>
            <h2>Недавние новости</h2>
          </div>
        </div>
        <div class="row d-flex">
          <div class="col-md-4 d-flex ">
            <div class="blog-entry align-self-stretch">
              <a href="blog-single.html" class="block-20 rounded" :style="{ backgroundImage: 'url(' + require('@/assets/image/1.jpg') + ')' }">
              </a>
              <div class="text mt-3 text-center">
              	<div class="meta mb-2">
                  <div><a href="#">January 30, 2023</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                </div>
                <h3 class="heading"><a href="#">Сегодня мы починили монитор</a></h3>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex ">
            <div class="blog-entry align-self-stretch">
              <a href="blog-single.html" class="block-20 rounded" :style="{ backgroundImage: 'url(' + require('@/assets/image/5.jpg') + ')' }">
              </a>
              <div class="text mt-3 text-center">
              	<div class="meta mb-2">
                  <div><a href="#">January 30, 2023</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                </div>
                <h3 class="heading"><a href="#">Закупили для вас 100 игровых мониторов</a></h3>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex ">
            <div class="blog-entry align-self-stretch">
              <a href="blog-single.html" class="block-20 rounded" :style="{ backgroundImage: 'url(' + require('@/assets/image/6.jpg') + ')' }">
              </a>
              <div class="text mt-3 text-center">
              	<div class="meta mb-2">
                  <div><a href="#">January 30, 2023</a></div>
                  <div><a href="#">Admin</a></div>
                  <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
                </div>
                <h3 class="heading"><a href="#">Сегодня мы продали 1000 игровых мониторов</a></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </section>
    
    	
 
</template> 
<script>
export default {
  name: "HomeView",
};
</script>  