$(document).ready(function() {
    var slideIndex = 1;
    showSlide(slideIndex);
  
    function changeSlide(n) {
      showSlide(slideIndex += n);
    }
  
    function showSlide(n) {
      var slides = $('.slideshow-image');
      if (n > slides.length) {
        slideIndex = 1;
      } else if (n < 1) {
        slideIndex = slides.length;
      }
      slides.hide();
      slides.eq(slideIndex - 1).show();
    }
  
    $('.prev').click(function() {
      changeSlide(-1);
    });
  
    $('.next').click(function() {
      changeSlide(1);
    });
  
    $('.product-card').hover(
      function() {
        $(this).css('transform', 'scale(1.1)');
      },
      function() {
        $(this).css('transform', 'scale(1)');
      }
    );
  });


  $(document).ready(function() {
    // Menggunakan event handler .click() pada class product-card
    $('.product-card').click(function() {
      // Menampilkan detail barang dengan animasi slideDown
      $(this).find('.product-detail').slideDown();
    });
  
    // Menggunakan event handler .mouseleave() pada class product-card
    $('.product-card').mouseleave(function() {
      // Menyembunyikan detail barang dengan animasi slideUp
      $(this).find('.product-detail').slideUp();
    });
  });

  $(document).ready(function() {
    // Menggunakan event handler .click() pada class product-card
    $('.product-card').click(function() {
      // Mengambil nilai atribut href pada elemen link di dalam product-card
      var link = $(this).find('a').attr('href');
      
      // Mengarahkan pengguna ke halaman baru
      window.location.href = 'Detail.html';
    });
  });