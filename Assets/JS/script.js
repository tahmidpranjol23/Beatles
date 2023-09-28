$(function(){

// back to top

    $('.back_to_top').click(function(){
        $('html, body').animate({
            scrollTop: 0,
        }, 1000)
    });

// preloader

    $(window).on('load', function(){
        $('.preloader_part').delay(500).fadeOut(500);
    })

// navbar bg on scroll

    $(window).scroll(function(){
        var scrollingPoint = $(this).scrollTop();
        if(scrollingPoint > 500) {
            $('.navbar').addClass('bg-on-scroll');
            $('.back_to_top').fadeIn(500);
            
        } else {
            $('.back_to_top').fadeOut(500);
            $('.navbar').removeClass('bg-on-scroll');
            
        }
        
    })
})

// venoBox

new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});

// Timer Count Down

{
    // Specify the deadline date
    const deadlineDate = new Date('September 31, 2023 23:59:59').getTime();

    // Cache all countdown boxes into consts
    const countdownDays = document.querySelector('.countdown__days .number');
    const countdownHours = document.querySelector('.countdown__hours .number');
    const countdownMinutes = document.querySelector('.countdown__minutes .number');
    const countdownSeconds = document.querySelector('.countdown__seconds .number');

    // Update the count down every 1 second (1000 milliseconds)
    setInterval(() => {
        // Get current date and time
        const currentDate = new Date().getTime();

        // Calculate the distance between current date and time and the deadline date and time
        const distance = deadlineDate - currentDate;

        // Calculations the data for remaining days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor(distance % (1000 * 60) / 1000);

        // Insert the result data into individual countdown boxes
        countdownDays.innerHTML = days;
        countdownHours.innerHTML = hours;
        countdownMinutes.innerHTML = minutes;
        countdownSeconds.innerHTML = seconds;
    }, 1000);
};

// Cliant counter

$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 8000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });
  
  });
  