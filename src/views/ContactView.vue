<template>
<section class="hero-wrap hero-wrap-2" :style="{ backgroundImage: 'url(' + require('@/assets/image/7.jpg') + ')' }" data-stellar-background-ratio="0.5">
            <div class="overlay"></div>
            <div class="container">
              <div class="row no-gutters slider-text align-items-end">
                <div class="col-md-9  pb-5">
                    <p class="breadcrumbs mb-2"><span class="mr-2"><a href="/">Главная <i class="ion-ios-arrow-forward"></i></a></span> <span>Контакты <i class="ion-ios-arrow-forward"></i></span></p>
                  <h1 class="mb-0 bread">Контакты</h1>
                </div>
              </div>
            </div>
          </section>
             
          <section class="ftco-section">
              <div class="container">
                  <div class="row justify-content-center">
                          <div class="col-md-12">
                              <div class="wrapper">
                                  <div class="row no-gutters mb-5">
                                      <div class="col-md-7">
                                          <div class="contact-wrap w-100 p-md-5 p-4">
                                              <h3 class="mb-4">Связаться с нами</h3>
                                              <div id="form-message-warning" class="mb-4"></div> 
                                        <div id="form-message-success" class="mb-4">
                                      Ваше сообщение  будет отправлено на почту ,спасибо!:)
                                        </div>
                                              <form method="POST" id="contactForm" name="contactForm" class="contactForm">
                                                  <div class="row">
                                                      <div class="col-md-6">
                                                          <div class="form-group">
                                                              <label class="label" for="name">Имя</label>
                                                              <input type="text" class="form-control" name="name" id="name" placeholder="Имя">
                                                          </div>
                                                      </div>
                                                      <div class="col-md-6"> 
                                                          <div class="form-group">
                                                              <label class="label" for="email">Почта</label>
                                                              <input type="email" class="form-control" name="email" id="email" placeholder="Почта">
                                                          </div>
                                                      </div>
                                                      <div class="col-md-12">
                                                          <div class="form-group">
                                                              <label class="label" for="subject">Тема</label>
                                                              <input type="text" class="form-control" name="subject" id="subject" placeholder="Тема">
                                                          </div>
                                                      </div>
                                                      <div class="col-md-12">
                                                          <div class="form-group">
                                                              <label class="label" for="#">Сообщение</label>
                                                              <textarea name="message" class="form-control" id="message" cols="30" rows="4" placeholder="Сообщение"></textarea>
                                                          </div>
                                                      </div>
                                                      <div class="col-md-12">
                                                          <div class="form-group">
                                                          <input type="submit"  value="Отправить сообщение" class="btn btn-primary">
                                                              <div class="submitting"></div>
                                                          </div>
                                                          
                                                      </div>
                                                  </div>
                                              </form>
                                          </div>
                                      </div>
                                      
                                </div>
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-md-3">
                                          <div class="dbox w-100 text-center">
                                      <div class="icon d-flex align-items-center justify-content-center">
                                          <span class="fa fa-map-marker"></span>
                                      </div>
                                      <div class="text">
                                      <p><span>Адресс: </span>микрорайон 7А, 7, Ангарск, Иркутская область</p>
                                    </div>
                                </div>
                                      </div>
                                      <div class="col-md-3">
                                          <div class="dbox w-100 text-center">
                                      <div class="icon d-flex align-items-center justify-content-center">
                                          <span class="fa fa-phone"></span>
                                      </div>
                                      <div class="text">
                                      <p><span>Телефон</span> <a href="tel://89016308140">+79016308140</a></p>
                                    </div>
                                </div>
                                      </div>
                                      <div class="col-md-3">
                                          <div class="dbox w-100 text-center">
                                      <div class="icon d-flex align-items-center justify-content-center">
                                          <span class="fa fa-paper-plane"></span>
                                      </div>
                                      <div class="text">
                                      <p><span>Почта: </span> <a href="mailto:studious19@mail.ru">studious19@mail.ru</a></p>
                                    </div>
                                </div>
                                      </div>
                                      <div class="col-md-3">
                                          <div class="dbox w-100 text-center">
                                      <div class="icon d-flex align-items-center justify-content-center">
                                          <span class="fa fa-globe"></span>
                                      </div>
                                      <div class="text">
                                      <p><span>Сайт</span> <a href="#">Мурашкин Данила</a></p>
                                    </div>
                                </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      
          </section>
</template>