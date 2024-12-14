---
id: d3ae9c4e-a611-48a4-b980-355de6aa1d0a
blueprint: page
title: 'Booking Now'
author: 94e568f9-72df-4173-bbff-14d10b25e99c
updated_by: 94e568f9-72df-4173-bbff-14d10b25e99c
updated_at: 1734203948
blocks:
  -
    id: m4ob1llc
    banner_background_image: banners/contact-banner.png
    banner_heading: 'Book An Appointment'
    banner_button:
      button_text: null
      button_link: null
    type: banner
    enabled: true
  -
    id: m4ob1u5a
    type: breadcrumbs
    enabled: true
  -
    id: m4ob445l
    code_widget_code:
      code: |-
        <div class="booking-app" id="bookapp-reservation-widget"></div>
        <script type="text/javascript">
        !function(e,t,n){var u=n.queue||[];e.BookAppWidgetReady=n=function(e){n.queue.push(e)},n.queue=u;var o="script",a=t.createElement(o),i=t.getElementsByTagName(o)[0];a.src="https://cdn.book.app/embed/v1.js",a.type="text/javascript",a.async=!0,a.addEventListener("load",function(){for(;n.queue.length;)n.queue.shift()()},!1),i.parentNode.insertBefore(a,i)}(window,document,window.BookAppWidgetReady||function(){});
        BookAppWidgetReady(function () {
        	BookApp.widget('#bookapp-reservation-widget', 'kpbeautyuk');
        });
        </script>
      mode: markdown
    type: code_widget
    enabled: true
  -
    id: m4ok7u9w
    reviews_swiper_background_image:
      - banners/reviews-swiper-banner/reviews-banner-booking.png
    reviews_swiper_heading: 'What My Clients Say'
    reviews_swiper_reviews_entires:
      - 5c11da19-3290-43b7-a7ae-c68db03040ed
      - aab941dc-5194-4a90-b075-cc2fd0a6faff
      - c83eb6d6-ab25-423a-92a3-430b6d88a6b0
      - 517b939b-6834-4212-af6c-9e0df7f53373
      - 4bfd2949-d6a0-4d7b-ae2d-7895ae72faa4
      - 5eb61849-b279-41e9-b006-e365aadd3290
    type: reviews_swiper
    enabled: true
parent: home
---
