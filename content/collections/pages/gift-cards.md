---
id: 7e7d638d-49f6-4db7-8afb-2e96414dd1ae
blueprint: page
title: 'Gift Cards'
author: 94e568f9-72df-4173-bbff-14d10b25e99c
updated_by: 94e568f9-72df-4173-bbff-14d10b25e99c
updated_at: 1734208342
blocks:
  -
    id: m4octmkt
    banner_background_image: banners/contact-banner.png
    banner_heading: 'Buy A Giftcard'
    banner_button:
      button_text: 'Book Now'
      button_link: 'entry::d3ae9c4e-a611-48a4-b980-355de6aa1d0a'
    type: banner
    enabled: true
  -
    id: m4oa2iyi
    type: breadcrumbs
    enabled: true
  -
    id: m4ocsexg
    code_widget_code:
      code: |-
        <div id="bookapp-gift-widget"></div>
        <script type="text/javascript">
        !function(e,t,n){var u=n.queue||[];e.BookAppWidgetReady=n=function(e){n.queue.push(e)},n.queue=u;var o="script",a=t.createElement(o),i=t.getElementsByTagName(o)[0];a.src="https://cdn.book.app/embed/v1.js",a.type="text/javascript",a.async=!0,a.addEventListener("load",function(){for(;n.queue.length;)n.queue.shift()()},!1),i.parentNode.insertBefore(a,i)}(window,document,window.BookAppWidgetReady||function(){});
        BookAppWidgetReady(function () {
        	BookApp.widget('#bookapp-gift-widget', 'kpbeautyuk', { initial: BookApp.Page.Gift });
        });
        </script>
      mode: markdown
    type: code_widget
    enabled: true
  -
    id: m4oa2k68
    entires_grid_heading: 'My Treatments'
    entires_grid_entries:
      - cbf41a36-6fd3-4b5a-8017-480f533bb9af
      - 28e68618-89a0-4f6b-be3f-08bcf8874444
      - 6139e0cb-22e0-44ac-b68d-04e587b4d05c
      - 656da8a3-6ae8-407c-bc1c-2d1927a5460b
    type: entires_grid
    enabled: true
parent: home
---
