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
    });
})(jQuery)