<!-- <aside class="sidebar" role="complementary">

  <?php //if ( is_active_sidebar('widgetarea1') ) : ?>
    <?php //dynamic_sidebar( 'widgetarea1' ); ?>
  <?php //else : ?>

    If you want display static widget content - write code here
    RU: Здесь код вывода того, что необходимо для статического контента виджетов

  <?php //endif; ?>
</aside>/sidebar -->
  <?php

  $currentLanguage  = get_bloginfo('language');

  if ( $currentLanguage == "ru-RU" ) {
    $home__id = '37';

  }  else if ( $currentLanguage == "en-US" ) {
    $home__id = '1627';

  }
  else if ( $currentLanguage == "pl-PL" ) {
    $home__id = '1597';

  }
  ?>

<div class="tm-sidepanel uk-width-9-10 uk-width-medium-3-5 uk-width-large-1-3 tm-sidepanel-left uk-block-default uk-hidden-small sidepanel_hidden">
  <button class="tm-button-sidepanel uk-button uk-button-large uk-hidden-small" style="opacity:0.9;" >А К Ц И Я <i class="uk-icon-angle-down uk-margin-small-left"></i></button>
  <button class="tm-button-sidepanel uk-button uk-button-large uk-visible-small" style="opacity:0.9;" ><i class="uk-icon-star"></i></button>
  <div class="uk-panel uk-panel-box uk-panel-box-secondary uk-hidden-small">
    <div class="visforms-form">
      <div class="alert alert-danger error-note" style="display: none;"></div>
      <div class="category-desc">
        <div class="uk-hidden-small">

        </div>
        <div class="uk-visible-small uk-margin-top">&nbsp;</div>
        <div class="uk-h3 uk-h4 uk-margin-top-remove uk-margin-bottom-remove tm-alt-font  tm-text-highlight tm-compensate-whitespace-top uk-text-center" style="width: 100%; font-size: 1.5em;">Специальные предложения</div>
        <p style="text-align: center;">Зарегистрируйтесь сейчас, чтобы получать эксклюзивные предложения, цены, последние новости и специальные скидки !
          <br>
          <br>
        </p>
      </div>
      <form action="/specialnye-predlozhenija/send" method="post" name="visform" id="mod-visform11" class="uk-form uk-margin visform " novalidate="novalidate">
        <fieldset class="fieldset-1 active">
          <input class="" id="field101" name="modvisform246ga-cid" value="524026747.1516184838" type="hidden">
          <div class="field83 uk-form-row uk-grid  required" aria-required="true">
            <label class="  visCSSlabel uk-form-label uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-4  " id="modvisform246namelbl" for="field83">Имя</label>
            <div class="uk-width-1-1 uk-width-medium-2-3 uk-width-large-3-4">
              <input class=" inputbox visCSSinput uk-width-1-1 " id="field83" aria-labelledby="modvisform246namelbl" name="modvisform246name" placeholder="Ваше имя" aria-required="true" required="1" value="" type="text">
            </div>
          </div>
          <div class="field84 uk-form-row uk-grid  required" aria-required="true">
            <label class="  visCSSlabel uk-form-label uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-4  " id="modvisform246phonelbl" for="field84">Телефон</label>
            <div class="uk-width-1-1 uk-width-medium-2-3 uk-width-large-3-4">
              <input class=" inputbox visCSSinput uk-width-1-1 " id="field84" aria-labelledby="modvisform246phonelbl" name="modvisform246phone" placeholder="Ваш телефон" aria-required="true" required="1" value="" type="text">
            </div>
          </div>
          <div class="field85 uk-form-row uk-grid  required" aria-required="true">
            <label class="  visCSSlabel uk-form-label uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-4  " id="modvisform246emaillbl" for="field85">E-mail</label>
            <div class="uk-width-1-1 uk-width-medium-2-3 uk-width-large-3-4">
              <input class=" inputbox visCSSinput uk-width-1-1 " id="field85" aria-labelledby="modvisform246emaillbl" name="modvisform246email" placeholder="Ваш e-mail" aria-required="true" required="1" value="" type="email">
            </div>
          </div>
          <div class="visBtnCon uk-width-1-1 uk-form-row uk-text-center uk-container-center">
            <input class="btn uk-button uk-button-large uk-button-primary uk-width-1-2 uk-width-large-1-3 uk-margin-large-top" id="field88" aria-label=" Регистрация" value=" Регистрация" name="modvisform246send" type="submit">&nbsp;</div>
        </fieldset>
        <input type="hidden" name="return" value="aHR0cDovL3d3dy5oYXJtb255LXN1aXRlcy5ydS9oYXJtb255LXN1aXRlcy0xMC9rdmFydGlyeS1kbHlhLXByb2RhemhpL2R2dXNwYWxueWotYXBhcnRhbWVudC1wZW50a2hhdXMtMTAtNzAx">
        <input type="hidden" value="11" name="postid">
        <input type="hidden" value="modvisform246" name="context">
        <input type="hidden" value="pagebreak" name="addSupportedFieldType[]">
        <input type="hidden" name="f7902deaace3cc28722276a0230dc272" value="1">
      </form>
    </div>
  </div>
</div>
