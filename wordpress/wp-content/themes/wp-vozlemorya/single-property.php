<?php get_header(); ?>
</div>

<?php if (have_posts()): while (have_posts()) : the_post(); ?>
    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>


  <div class="uk-block tm-block-main uk-block-default" style="padding-bottom:0;">
    <div class="">
      <div id="tm-middle" class="tm-middle uk-grid" data-uk-grid-match data-uk-grid-margin>
        <div class="tm-main uk-width-medium-1-1">
          <main id="tm-content" class="tm-content">
            <div id="system-message-container"> </div>
            <div class="uk-article">
              <div class="uk-container uk-container-center">
                <h1 class="uk-article-title"><?php the_title(); ?></h1>
                <div class="uk-grid uk-grid-small tm-margin-compensate">
                  <div class="uk-h3 uk-text-muted uk-width-1-1 uk-width-small-3-4"> <span>Harmony Suites 10, Святой Влас</span> </div>
                  <div class="uk-width-1-1 uk-width-small-1-4 uk-text-right uk-text-left-small"> <i class="uk-icon-eye" title="10327 хиты"></i>&nbsp;10327 </div>
                </div>
              </div>
              <div class="uk-margin-top uk-visible-large">&nbsp;</div>
              <?php $gallery_images = get_field('apartments_gallery');

              if( $gallery_images ): ?>
                <div class="uk-grid uk-margin">
                  <div class="uk-width-1-1">
                    <div class="uk-panel">
                      <div class="rama-wrap">

                        <div id="sync1" class="owl-carousel owl-theme">
                          <?php foreach( $gallery_images as $gallery_image ): ?>
                            <div class="item">
                              <a rel="lightbox" class="post-slide-link" href="<?php echo $gallery_image['url']; ?>">
                                <!-- <img class="post-slide-img" src="https://visairkutsk.ru/wp-content/uploads/2017/05/P1270379-600x450.jpg" alt=""> -->
                                <div class="post-slide-img" style="background-image: url('<?php echo $gallery_image['sizes']['large']; ?>')"></div>
                              </a>
                            </div>
                          <?php endforeach; ?>

                        </div>

                        <div id="thumbs_navs">
                          <div id="sync2" class="owl-carousel owl-theme">
                            <?php foreach( $gallery_images as $gallery_image ): ?>
                              <div class="item">
                                <img src="<?php echo $gallery_image['sizes']['small']; ?>" alt="">
                              </div>
                            <?php endforeach; ?>

                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>


              <?php endif; ?>





              <div class="uk-margin-top uk-visible-large"></div>
              <div class="uk-container uk-container-center uk-margin">
                <div class="uk-grid uk-grid-match uk-grid-medium" data-uk-grid-match="{target:'> div > .uk-panel', row:true}" data-uk-grid-margin>
                  <div class="uk-width-1-1 uk-width-medium-1-2 uk-width-large-2-3 property-descripton-wrapper">
                    <div class="uk-panel uk-panel-header">
                      <div class="uk-h3 uk-panel-title">Описание</div>
                        <?php the_content(); ?>
                    </div>
                  </div>
                  <div class="uk-width-1-1 uk-width-medium-1-2 uk-width-large-1-3">
                    <div class="uk-panel uk-panel-header">
                      <div class="uk-h3 uk-panel-title">Детайли</div>
                      <ul class="uk-list uk-list-space">
                        <li> <span class="uk-display-inline-block uk-text-top uk-width-1-2 icon-row"><i class="uk-icon-map-marker"></i>Местоположение</span><span class="uk-display-inline-block uk-text-top uk-width-1-2 uk-text-right uk-text-bold">Святой Влас, Болгария</span> </li>
                        <li> <span class="uk-display-inline-block uk-text-top uk-width-1-2 icon-row"><i class="uk-icon-home"></i>Тип недвижимости</span><span class="uk-display-inline-block uk-text-top uk-width-1-2 uk-text-right uk-text-bold">Трихкомнатная</span> </li>
                        <li> <span class="uk-display-inline-block uk-text-top uk-width-1-2 icon-row"><i class="uk-icon-bookmark-o"></i>Статус</span><span class="uk-display-inline-block uk-text-top uk-width-1-2 uk-text-right uk-text-bold">Для продажа</span> </li>
                        <li> <span class="uk-display-inline-block uk-text-top uk-width-1-2 icon-row"><i class="uk-icon-navicon"></i>Этаж</span><span class="uk-display-inline-block uk-text-top uk-width-1-2 uk-text-right uk-text-bold">4</span> </li>
                        <li> <span class="uk-display-inline-block uk-text-top uk-width-1-2 icon-row"><i class="uk-icon-eye"></i>Вид</span><span class="uk-display-inline-block uk-text-top uk-width-1-2 uk-text-right uk-text-bold">Бассейн</span> </li>
                        <li> <span class="uk-display-inline-block uk-text-top uk-width-1-2 icon-row"><i class="uk-icon-square-o"></i>Площадь</span><span class="uk-display-inline-block uk-text-top uk-width-1-2 uk-text-right uk-text-bold">112.24 м<sup>2</sup></span> </li>
                        <li> <span class="uk-display-inline-block uk-text-top uk-width-1-2 icon-row"><i class="uk-icon-check-square-o"></i>Жилая площадь</span><span class="uk-display-inline-block uk-text-top uk-width-1-2 uk-text-right uk-text-bold">96.77 м<sup>2</sup></span> </li>
                        <li> <span class="uk-display-inline-block uk-text-top uk-width-1-2 icon-row"><i class="uk-icon-qrcode"></i>Комнаты</span><span class="uk-display-inline-block uk-text-top uk-width-1-2 uk-text-right uk-text-bold">3 </span> </li>
                        <li> <span class="uk-display-inline-block uk-text-top uk-width-1-2 icon-row"><i class="uk-icon-tint"></i>Ванные комнаты</span><span class="uk-display-inline-block uk-text-top uk-width-1-2 uk-text-right uk-text-bold">1 </span> </li>
                      </ul>
                      <ul class="uk-list uk-list-space"> <li> <span class="uk-display-inline-block uk-text-top uk-width-1-2 icon-row"><i class="uk-icon-map-marker"></i>Location</span><span class="uk-display-inline-block uk-text-top uk-width-1-2 uk-text-right uk-text-bold">Saint Vlas, Bulgaria</span> </li> <li> <span class="uk-display-inline-block uk-text-top uk-width-1-2 icon-row"><i class="uk-icon-home"></i>Property Type</span><span class="uk-display-inline-block uk-text-top uk-width-1-2 uk-text-right uk-text-bold">Two bedroom</span> </li> <li> <span class="uk-display-inline-block uk-text-top uk-width-1-2 icon-row"><i class="uk-icon-bookmark-o"></i>Status</span><span class="uk-display-inline-block uk-text-top uk-width-1-2 uk-text-right uk-text-bold">For Sale</span> </li> <li> <span class="uk-display-inline-block uk-text-top uk-width-1-2 icon-row"><i class="uk-icon-navicon"></i>Floor</span><span class="uk-display-inline-block uk-text-top uk-width-1-2 uk-text-right uk-text-bold">4</span> </li> <li> <span class="uk-display-inline-block uk-text-top uk-width-1-2 icon-row"><i class="uk-icon-eye"></i>View</span><span class="uk-display-inline-block uk-text-top uk-width-1-2 uk-text-right uk-text-bold">Pool</span> </li> <li> <span class="uk-display-inline-block uk-text-top uk-width-1-2 icon-row"><i class="uk-icon-square-o"></i>Area</span><span class="uk-display-inline-block uk-text-top uk-width-1-2 uk-text-right uk-text-bold">112.24 m<sup>2</sup></span> </li> <li> <span class="uk-display-inline-block uk-text-top uk-width-1-2 icon-row"><i class="uk-icon-check-square-o"></i>Living area</span><span class="uk-display-inline-block uk-text-top uk-width-1-2 uk-text-right uk-text-bold">96.77 m<sup>2</sup></span> </li> <li> <span class="uk-display-inline-block uk-text-top uk-width-1-2 icon-row"><i class="uk-icon-qrcode"></i>Rooms</span><span class="uk-display-inline-block uk-text-top uk-width-1-2 uk-text-right uk-text-bold">3 </span> </li> <li> <span class="uk-display-inline-block uk-text-top uk-width-1-2 icon-row"><i class="uk-icon-tint"></i>Bathrooms</span><span class="uk-display-inline-block uk-text-top uk-width-1-2 uk-text-right uk-text-bold">1 </span> </li> </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="uk-block tm-block-bottom-b uk-block-muted uk-margin-large">
                <div class="uk-container uk-container-center">
                  <div class="uk-width-1-1">
                    <div class="uk-panel uk-panel-header">
                      <p class="uk-h3 uk-panel-title">Особености</p>
                      <ul class="uk-grid uk-grid-small" data-uk-grid-match="{target:'> div', row:true}" data-uk-grid-margin>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Кондиционер</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Интернет / WiFi</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Спутниковое ТВ</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Лифт</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Балкон</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Бассейн</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Детский бассейн</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Площадка для детей</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Паркинг</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">24ч. охрана</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Прачечная</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Ресторан</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Бар у бассейна</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Офис / Рецепция</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Клубный комплекс</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Домофоны</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Противопожарная защита</div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="uk-container uk-container-center uk-margin-large">
                <div class="uk-grid uk-margin" data-uk-grid-margin="">
                  <div class="uk-width-1-1 uk-width-large-1-3">
                    <p class="uk-h3">Консултант</p>
                    <div id="contact-agent overflow-hidden">
                      <div class="agent-information">
                        <div class="agent-image uk-text-center uk-width-1-2 uk-push-small-1-4"> <span style="display:inline-block; overflow:hidden; width:100%; height:0; padding-bottom:100%; border-radius:50%;"><img alt="Пеньо Танев" src="http://www.harmony-suites.ru/images/bt_socialconnect/avatar/a34c464accf7335dfb7a5a7912e28dbe_(Penyo_avatar)_.jpeg"></span> </div>
                        <div class="uk-panel uk-text-center-xsmall uk-margin-top">
                          <div class="uk-h3 uk-h4 uk-margin-top-remove uk-margin-bottom-remove tm-alt-font  tm-text-highlight">Пеньо Танев</div>
                          <p class="uk-margin-top-remove tm-alt-font">Менеджер по продажам</p>
                          <div class="uk-margin">
                            <div class="uk-margin-remove uk-clearfix"> <i class="uk-icon uk-icon-phone" style="margin-right:3px;"></i> <a href="tel:359893611404">+359 897 001 800</a> <i class="uk-icon uk-icon-whatsapp" style="color:#47C252; margin-left:5px;" title="WhatsApp"></i> <i style="color:#7C529E; margin-left:3px;" class="uk-icon ftl-icon-viber" title="Viber"></i> </div>
                            <div class="uk-margin-remove uk-clearfix"> <i class="uk-icon uk-icon-at" style="margin-right:3px;"></i> <span><a href="mailto:p.tanev@harmony-suites.com">p.tanev@harmony-suites.com</a></span> </div>
                            <div class="uk-margin-remove uk-clearfix"> <i class="uk-icon uk-icon-skype" style="margin-right:3px;"></i> <a href="skype:brany_harmony_palace">p.tanev</a> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="uk-width-1-1 uk-width-large-2-3">
                    <p class="uk-h3">Отправить заявку</p>
                    <div class="sendrequest-form">
                      <div class="visforms-form">
                        <div class="alert alert-danger error-note" style="display: none;"></div>
                        <div class="category-desc"> Получи лучшее предложение! Оставьте Ваши контактные данные, и мы свяжемся с Вами! </div>
                        <form action="/harmony-suites-10/kvartiry-dlya-prodazhi/send" method="post" name="visform" id="mod-visform1" class="uk-form uk-margin visform ">
                          <fieldset class="fieldset-1 active">
                            <input class="" id="field5" value="hs10_408" name="modvisform119ordsrcref" value="" type="hidden" />
                            <input class="" id="field104" name="modvisform119ga-cid" value="" type="hidden" />
                            <div class="field1 uk-form-row uk-grid  required">
                              <label class="  visCSSlabel uk-form-label uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-4  " id="modvisform119namelbl" for="field1">Имя</label>
                              <div class="uk-width-1-1 uk-width-medium-2-3 uk-width-large-3-4">
                                <input class=" inputbox visCSSinput uk-width-1-1 " id="field1" aria-labelledby="modvisform119namelbl" name="modvisform119name" placeholder="Ваше имя" aria-required="true" required="1" value="" type="text" />
                              </div>
                            </div>
                            <div class="field2 uk-form-row uk-grid  required">
                              <label class="  visCSSlabel uk-form-label uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-4  " id="modvisform119phonelbl" for="field2">Телефон</label>
                              <div class="uk-width-1-1 uk-width-medium-2-3 uk-width-large-3-4">
                                <input class=" inputbox visCSSinput uk-width-1-1 " id="field2" aria-labelledby="modvisform119phonelbl" name="modvisform119phone" placeholder="Ваш телефон" aria-required="true" required="1" value="" type="text" />
                              </div>
                            </div>
                            <div class="field3 uk-form-row uk-grid  required">
                              <label class="  visCSSlabel uk-form-label uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-4  " id="modvisform119emaillbl" for="field3">E-mail</label>
                              <div class="uk-width-1-1 uk-width-medium-2-3 uk-width-large-3-4">
                                <input class=" inputbox visCSSinput uk-width-1-1 " id="field3" aria-labelledby="modvisform119emaillbl" name="modvisform119email" placeholder="Ваш e-mail" aria-required="true" required="1" value="" type="email" />
                              </div>
                            </div>
                            <div class="field4 uk-form-row uk-grid  required">
                              <label class="  visCSSlabel uk-form-label uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-4  " id="modvisform119messagelbl" for="field4">Сообщение</label>
                              <div class="uk-width-1-1 uk-width-medium-2-3 uk-width-large-3-4">
                                <textarea class=" inputbox visCSSinput uk-width-1-1 " id="field4" cols="10" rows="4" aria-labelledby="modvisform119messagelbl" name="modvisform119message" aria-required="true" required="1"></textarea>
                              </div>
                            </div>
<!--                             <div class="captchaCont uk-form-row uk-grid  required">
                              <label class="visCSSlabel uk-form-label uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-4" id="captcha-lbl" for="recaptcha_response_field"><span class="hasTooltip" title="Введите код">Код безопасности</span></label>
                              <div class="uk-width-1-1 uk-width-medium-2-3 uk-width-large-3-4">
                                <div id="dynamic_recaptcha_1" class="g-recaptcha required" data-sitekey="6LdnqAwUAAAAAO06ZgEClbD4Ofm8RjJKP_5oan3U" data-theme="light" data-size="compact"></div>
                              </div>
                              </div> -->
                              <div class="visBtnCon uk-width-1-1 uk-form-row uk-text-center uk-container-center">
                                <input class="btn uk-button uk-button-large uk-button-primary uk-width-1-2 uk-width-large-1-3 uk-margin-large-top" id="field6" aria-label="Отправить" value="Отправить" disabled="disabled" name="modvisform119send" type="submit" />
                              </div>
                          </fieldset>
                          <input type="hidden" name="return" value="aHR0cDovL3d3dy5oYXJtb255LXN1aXRlcy5ydS9oYXJtb255LXN1aXRlcy0xMC9rdmFydGlyeS1kbHlhLXByb2RhemhpL2R2dXNwYWxueWotdHJla2hrb21uYXRueWotYXBhcnRhbWVudC0xMC00MDg," />
                          <input type="hidden" value="1" name="postid" />
                          <input type="hidden" value="modvisform119" name="context" />
                          <input type="hidden" value="pagebreak" name="addSupportedFieldType[]" />
                          <input type="hidden" name="774a938a50c43f5880a622eec059e475" value="1" />
                        </form>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="uk-container uk-container-center uk-margin-large">
                  <p class="uk-h3">Похожая недвижимость</p>
                  <div class="uk-margin uk-grid-width-1-1 uk-grid-width-small-1-2 uk-grid-width-medium-1-2 uk-grid-width-large-1-3 uk-grid uk-grid-match uk-grid-medium uk-text-left " data-uk-grid-match="{target:'> div > .uk-panel', row:true}" data-uk-grid-margin="">
                    <div>
                      <div class="uk-panel uk-panel-box uk-panel-box-hover uk-overlay-hover">
                        <a class="uk-position-cover uk-position-z-index" href="/harmony-suites-10/kvartiry-dlya-prodazhi/dvuspalnyj-apartament-pentkhaus-10-701"></a>
                        <p class="uk-h4 uk-margin-top-remove uk-margin-bottom-remove uk-margin-bottom-remove tm-alt-font  tm-text-highlight tm-compensate-whitespace-top"> <a class="uk-link-reset" href="/harmony-suites-10/kvartiry-dlya-prodazhi/dvuspalnyj-apartament-pentkhaus-10-701">Двуспальный апартамент – пентхаус 10-701</a> </p>
                        <p class="uk-margin-top-remove  tm-alt-font  ">Harmony Suites 10</p>
                        <div class="uk-margin uk-text-center uk-position-relative">
                          <div class="uk-overlay" style="width:100%;"> <img src="/images/bt_property/113/thumb-1490733979-dvuspalnyj-apartament-pentkhaus-10-701-4.jpg" class=" uk-overlay-scale" alt="Двуспальный апартамент – пентхаус 10-701" width="100%"> </div>
                        </div>
                        <div class="uk-margin-remove uk-grid uk-grid-collapse uk-position-relative" data-uk-grid-margin style="opacity:.6; cursor:pointer; z-index:99999999;">
                          <div data-uk-tooltip title="Вид" class="uk-width-1-5 uk-width-medium-1-5 uk-text-center tm-alt-font" style="white-space:nowrap;"><i class="uk-icon-eye"></i>
                            <br/><span style="font-size:12px;">Море</span></div>
                          <div data-uk-tooltip title="Площадь" class="uk-width-1-5 uk-width-medium-1-5 uk-text-center tm-alt-font" style="white-space:nowrap;"><i class="uk-icon-square-o"></i>
                            <br/><span style="font-size:12px;">191,39 м<sup>2</sup></span></div>
                          <div data-uk-tooltip title="Жилая площадь" class="uk-width-1-5 uk-width-medium-1-5 uk-text-center tm-alt-font" style="white-space:nowrap;"><i class="uk-icon-check-square-o"></i>
                            <br/><span style="font-size:12px;">165,02 м<sup>2</sup></span></div>
                          <div data-uk-tooltip title="Комнаты" class="uk-width-1-5 uk-width-medium-1-5 uk-text-center tm-alt-font" style="white-space:nowrap;"><i class="uk-icon-qrcode"></i>
                            <br/><span style="font-size:12px;">3 </span></div>
                          <div data-uk-tooltip title="Ванные комнаты" class="uk-width-1-5 uk-width-medium-1-5 uk-text-center tm-alt-font" style="white-space:nowrap;"><i class="uk-icon-tint"></i>
                            <br/><span style="font-size:12px;">2 </span></div>
                        </div>
                        <div class="tm-block-divider uk-margin uk-clearfix">&nbsp;</div>
                        <div class="uk-margin">
                          <div class="uk-grid uk-grid-small">
                            <div class="uk-width-1-1 uk-margin">
                              <p class="uk-text-justify" style="font-size: 14px; line-height: normal;">Апартамент № 10-701 – представляет собой прекрасный пентхаус с собственной огромной террасой. </p>
                            </div>
                            <div class="uk-width-2-5 tm-price">
                              <p style="color: rgb(255, 255, 255) ! important; font-weight: 600; text-align: right; font-size: 10px; line-height: 13px; padding: 4px 5px; background: rgb(81, 159, 9);" class="uk-margin-small tm-alt-font">Для продажа</p>
                              <p class="uk-margin-remove tm-alt-font uk-text-small uk-text-muted" style="padding-top: 2px;"> 3x комнатная </p>
                            </div>
                            <div class="uk-width-3-5">
                              <p style="line-height: 20px; padding-left: 7px; font-size: 18px; margin-top:1px; margin-bottom:4px;">Святой Влас</p>
                              <p class="uk-margin-remove" style="line-height: 20px; padding-left: 7px; paddin-bottom:2px;">Болгария</p>
                              <p class="uk-margin-small tm-alt-font uk-text-small" style="padding-left: 7px; text-transform:lowercase; color: #CC0000;"><span class='negotiable-price'>Позвоните по цене</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="uk-panel uk-panel-box uk-panel-box-hover uk-overlay-hover">
                        <a class="uk-position-cover uk-position-z-index" href="/harmony-suites-10/kvartiry-dlya-prodazhi/odnospalnyj-apartament-10-703"></a>
                        <p class="uk-h4 uk-margin-top-remove uk-margin-bottom-remove uk-margin-bottom-remove tm-alt-font  tm-text-highlight tm-compensate-whitespace-top"> <a class="uk-link-reset" href="/harmony-suites-10/kvartiry-dlya-prodazhi/odnospalnyj-apartament-10-703">Односпальный апартамент 10-703</a> </p>
                        <p class="uk-margin-top-remove  tm-alt-font  ">Harmony Suites 10</p>
                        <div class="uk-margin uk-text-center uk-position-relative">
                          <div class="uk-overlay" style="width:100%;"> <img src="/images/bt_property/119/thumb-1490733724-odnospalnyj-apartament-10-703-6.jpg" class=" uk-overlay-scale" alt="Односпальный апартамент 10-703" width="100%"> </div>
                        </div>
                        <div class="uk-margin-remove uk-grid uk-grid-collapse uk-position-relative" data-uk-grid-margin style="opacity:.6; cursor:pointer; z-index:99999999;">
                          <div data-uk-tooltip title="Вид" class="uk-width-1-5 uk-width-medium-1-5 uk-text-center tm-alt-font" style="white-space:nowrap;"><i class="uk-icon-eye"></i>
                            <br/><span style="font-size:12px;">Гора</span></div>
                          <div data-uk-tooltip title="Площадь" class="uk-width-1-5 uk-width-medium-1-5 uk-text-center tm-alt-font" style="white-space:nowrap;"><i class="uk-icon-square-o"></i>
                            <br/><span style="font-size:12px;">64.07 м<sup>2</sup></span></div>
                          <div data-uk-tooltip title="Жилая площадь" class="uk-width-1-5 uk-width-medium-1-5 uk-text-center tm-alt-font" style="white-space:nowrap;"><i class="uk-icon-check-square-o"></i>
                            <br/><span style="font-size:12px;">55.24 м<sup>2</sup></span></div>
                          <div data-uk-tooltip title="Комнаты" class="uk-width-1-5 uk-width-medium-1-5 uk-text-center tm-alt-font" style="white-space:nowrap;"><i class="uk-icon-qrcode"></i>
                            <br/><span style="font-size:12px;">2 </span></div>
                          <div data-uk-tooltip title="Ванные комнаты" class="uk-width-1-5 uk-width-medium-1-5 uk-text-center tm-alt-font" style="white-space:nowrap;"><i class="uk-icon-tint"></i>
                            <br/><span style="font-size:12px;">1 </span></div>
                        </div>
                        <div class="tm-block-divider uk-margin uk-clearfix">&nbsp;</div>
                        <div class="uk-margin">
                          <div class="uk-grid uk-grid-small">
                            <div class="uk-width-1-1 uk-margin">
                              <p class="uk-text-justify" style="font-size: 14px; line-height: normal;">Апартамент № 10-703 – представляет собой прекрасный односпальный апартамент.</p>
                            </div>
                            <div class="uk-width-2-5 tm-price">
                              <p style="color: rgb(255, 255, 255) ! important; font-weight: 600; text-align: right; font-size: 10px; line-height: 13px; padding: 4px 5px; background: rgb(81, 159, 9);" class="uk-margin-small tm-alt-font">Для продажа</p>
                              <p class="uk-margin-remove tm-alt-font uk-text-small uk-text-muted" style="padding-top: 2px;"> 2х комнатная </p>
                            </div>
                            <div class="uk-width-3-5">
                              <p style="line-height: 20px; padding-left: 7px; font-size: 18px; margin-top:1px; margin-bottom:4px;">Святой Влас</p>
                              <p class="uk-margin-remove" style="line-height: 20px; padding-left: 7px; paddin-bottom:2px;">Болгария</p>
                              <p class="uk-margin-small tm-alt-font uk-text-small" style="padding-left: 7px; text-transform:lowercase; color: #CC0000;"><span class='negotiable-price'>Позвоните по цене</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="uk-panel uk-panel-box uk-panel-box-hover uk-overlay-hover">
                        <a class="uk-position-cover uk-position-z-index" href="/harmony-suites-10/kvartiry-dlya-prodazhi/dvuspalnyj-apartament-pentkhaus-10-704"></a>
                        <p class="uk-h4 uk-margin-top-remove uk-margin-bottom-remove uk-margin-bottom-remove tm-alt-font  tm-text-highlight tm-compensate-whitespace-top"> <a class="uk-link-reset" href="/harmony-suites-10/kvartiry-dlya-prodazhi/dvuspalnyj-apartament-pentkhaus-10-704">Двуспальный апартамент – пентхаус 10-704</a> </p>
                        <p class="uk-margin-top-remove  tm-alt-font  ">Harmony Suites 10</p>
                        <div class="uk-margin uk-text-center uk-position-relative">
                          <div class="uk-overlay" style="width:100%;"> <img src="/images/bt_property/168/thumb-1508923577-dvuspalnyj-apartament-pentkhaus-10-704-1.jpg" class=" uk-overlay-scale" alt="Двуспальный апартамент – пентхаус 10-704" width="100%"> </div>
                        </div>
                        <div class="uk-margin-remove uk-grid uk-grid-collapse uk-position-relative" data-uk-grid-margin style="opacity:.6; cursor:pointer; z-index:99999999;">
                          <div data-uk-tooltip title="Вид" class="uk-width-1-5 uk-width-medium-1-5 uk-text-center tm-alt-font" style="white-space:nowrap;"><i class="uk-icon-eye"></i>
                            <br/><span style="font-size:12px;">Море</span></div>
                          <div data-uk-tooltip title="Площадь" class="uk-width-1-5 uk-width-medium-1-5 uk-text-center tm-alt-font" style="white-space:nowrap;"><i class="uk-icon-square-o"></i>
                            <br/><span style="font-size:12px;">191,39 м<sup>2</sup></span></div>
                          <div data-uk-tooltip title="Жилая площадь" class="uk-width-1-5 uk-width-medium-1-5 uk-text-center tm-alt-font" style="white-space:nowrap;"><i class="uk-icon-check-square-o"></i>
                            <br/><span style="font-size:12px;">165,02 м<sup>2</sup></span></div>
                          <div data-uk-tooltip title="Комнаты" class="uk-width-1-5 uk-width-medium-1-5 uk-text-center tm-alt-font" style="white-space:nowrap;"><i class="uk-icon-qrcode"></i>
                            <br/><span style="font-size:12px;">3 </span></div>
                          <div data-uk-tooltip title="Ванные комнаты" class="uk-width-1-5 uk-width-medium-1-5 uk-text-center tm-alt-font" style="white-space:nowrap;"><i class="uk-icon-tint"></i>
                            <br/><span style="font-size:12px;">2 </span></div>
                        </div>
                        <div class="tm-block-divider uk-margin uk-clearfix">&nbsp;</div>
                        <div class="uk-margin">
                          <div class="uk-grid uk-grid-small">
                            <div class="uk-width-1-1 uk-margin">
                              <p class="uk-text-justify" style="font-size: 14px; line-height: normal;">Апартамент № 10-704 – представляет собой прекрасный пентхаус с собственной огромной террасой. </p>
                            </div>
                            <div class="uk-width-2-5 tm-price">
                              <p style="color: rgb(255, 255, 255) ! important; font-weight: 600; text-align: right; font-size: 10px; line-height: 13px; padding: 4px 5px; background: rgb(81, 159, 9);" class="uk-margin-small tm-alt-font">Для продажа</p>
                              <p class="uk-margin-remove tm-alt-font uk-text-small uk-text-muted" style="padding-top: 2px;"> 3x комнатная </p>
                            </div>
                            <div class="uk-width-3-5">
                              <p style="line-height: 20px; padding-left: 7px; font-size: 18px; margin-top:1px; margin-bottom:4px;">Святой Влас</p>
                              <p class="uk-margin-remove" style="line-height: 20px; padding-left: 7px; paddin-bottom:2px;">Болгария</p>
                              <p class="uk-margin-small tm-alt-font uk-text-small" style="padding-left: 7px; text-transform:lowercase; color: #CC0000;"><span class='negotiable-price'>Позвоните по цене</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="uk-margin-large-top">
                <div class="uk-hidden" id="wk-map-ex5a6f228b02316-marker-1">
                  <div class="uk-text-left">
                    <div class="uk-margin uk-text-center"> <img src="/images/bt_property/83/thumb-1511867367-10-408 (12).jpg" class="uk-responsive-width  uk-overlay-scale" alt="Harmony Suites 10"> </div>
                    <div class="uk-margin">
                      <p class="uk-h4 tm-alt-font tm-text-highlight uk-margin-remove">Harmony Suites 10</p>Святой Влас, Болгария </div>
                  </div>
                </div>
              </div>
          </main>
          </div>
        </div>
      </div>
    </div>


<div class="uk-offcanvas-content">



      <h1 class="single-title inner-title"></h1>
      <?php if ( has_post_thumbnail()) :?>
        <a class="single-thumb" href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
          <?php the_post_thumbnail(); // Fullsize image for the single post ?>
        </a>
      <?php endif; ?><!-- /post thumbnail -->

      <span class="date"><?php the_time('d F Y'); ?> <?php the_time('H:i'); ?></span>
      <span class="author"><?php _e( 'Published by', 'wpeasy' ); ?> <?php the_author_posts_link(); ?></span>
      <span class="comments"><?php comments_popup_link( __( 'Leave your thoughts', 'wpeasy' ), __( '1 Comment', 'wpeasy' ), __( '% Comments', 'wpeasy' )); ?></span><!-- /post details -->



      <?php the_tags( __( 'Tags: ', 'wpeasy' ), ', ', '<br>'); // Separated by commas with a line break at the end ?>

      <p><?php _e( 'Categorised in: ', 'wpeasy' ); the_category(', '); // Separated by commas ?></p>

      <p><?php _e( 'This post was written by ', 'wpeasy' ); the_author(); ?></p>

      <?php edit_post_link(); ?>

      <?php comments_template(); ?>

    </article>
  <?php endwhile; endif; ?>



<?php get_footer(); ?>
