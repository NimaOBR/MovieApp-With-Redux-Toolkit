export const Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1401,
                settings: {
                  slidesToShow: 6,
                  slidesToScroll:7,
                  infinite: true,
                  dots: false,
                }
              },
            {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll:3,
                  infinite: true,
                  dots: false,
                }
              },
            {
              breakpoint: 1080,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: false,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
}