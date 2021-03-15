(function ($) {
    $(function () {
        $(document).on('click', '.js-profile', function () {
            const $loginPopup = $('.js-popup-login');

            $.magnificPopup.open({
                items: {
                    src: $loginPopup,
                    type: 'inline',
                },
                mainClass: 'popup-login',
                preloader: false,
                closeOnBgClick: true,
                callbacks: {
                    open: function () {
                        $loginPopup.removeClass('hidden');
                        $('html').addClass('fixed');
                    },
                    close: function () {
                        $('html').removeClass('fixed');
                    }
                }
            });

            return false;
        });

        $(document).on('click', '.js-close-popup', function () {
            $.magnificPopup.close();
        });

        $(document).on('click', '.js-link-go-to-reg', function () {
            $.magnificPopup.close();


            const $regPopup = $('.js-popup-reg');

            $.magnificPopup.open({
                items: {
                    src: $regPopup,
                    type: 'inline',
                },
                mainClass: 'popup-login',
                preloader: false,
                closeOnBgClick: true,
                callbacks: {
                    open: function () {
                        $regPopup.removeClass('hidden');
                        $('html').addClass('fixed');
                    },
                    close: function () {
                        $('html').removeClass('fixed');
                    }
                }
            });

        });

        const $faqHolder = $('.js-faq-holder');

        $faqHolder.on('click', '.js-faq-button', function () {
            const $newItem = $(this).closest('.js-faq-item');
            const isOpened = $newItem.hasClass('active');
            $faqHolder.find('.js-faq-item.active').removeClass('active');

            if (isOpened) {
                return;
            }

            $newItem.addClass('active');
        });

        const $select2Holder = $('.js-select2');

        $select2Holder.each(function () {
            $(this).select2({
                width: 'style',
                dropdownParent: $(this).parent(),
            });
        });

        const $swiperContainer = $('.js-swiper');

        $swiperContainer.each(function (index, item) {
            const $pagination = $(item).find('.js-swiper-pagination');
            console.log(item);
        $(item).data('swiperSlider', new Swiper(item, {

                slidesPerView: 1,
                effect: 'fade',
                pagination: {
                    el: $pagination.get(0),
                },
                breakpoints: {
                    1280: {
                        allowTouchMove: false,
                    }
                }
            }));
        });

        $swiperContainer.on('mousemove', function (evt) {
            const $container = $(this);
            const swiperInstance = $container.data('swiperSlider');
            const containerHeight = $container.height();
            const totalItems = $container.find('.swiper-slide').length;
            const containerOffsetTop = $container.offset().top;
            const containerOffsetBottom = containerOffsetTop + containerHeight;
            const deltaMouse = evt.offsetY;
            const step = containerHeight / totalItems;
            const indexSlide = Math.ceil(deltaMouse / step);

            if ($(window).innerWidth() < 1280) {
                return;
            }

            if (indexSlide === 0) {
                swiperInstance.slideTo(indexSlide, 500);
                return;
            }

            swiperInstance.slideTo(indexSlide - 1, 500);
        });

        $swiperContainer.on('mouseleave', function (evt) {
            if ($(window).innerWidth() < 1280) {
                return;
            }

            $(this).data('swiperSlider').slideTo(0, 500);
        });

        //Навигация в лк
        const $navigationHolder = $('.js-navigation-profile');

        $navigationHolder.each(function () {
            const $holder = $(this);

            $holder.on('click', '.js-navigation-item', function () {
                const $target = $(this);

                if (!$target.hasClass('active') && $(window).innerWidth() > 1280) {
                    return true;
                }

                $holder.toggleClass('opened');
            });
        });

        $(window).on('scroll', function (evt) {
            const offsetY = evt.target.scrollingElement.scrollTop;
            const $scrollUpButton = $('.js-scroll-up-inner');

            if (offsetY > 80) {
                $scrollUpButton.addClass('visible');
                return;
            }

            $scrollUpButton.removeClass('visible');
        });

        $(document).on('click', '.js-scroll-up-button', function () {
            $(window).scrollTop(0);
        });
    });
})(jQuery)