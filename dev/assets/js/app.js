
$(document).ready(function(){
  $('.carousel').carousel();
  $("input[type=tel]").mask("(999) 999-9999");

  $.validator.setDefaults({
    highlight: function(element) {
      $(element).parent().addClass("is-error");
    },
    unhighlight: function(element) {
      $(element).parent().removeClass("is-error");
    }
	});

  //form validation
  $("#genelBilgilerForm").validate({
    submitHandler: function() {
      $('#onayBildirimi').modal();
    }
  });

  $("#nufusBilgileriForm").validate();
  $("#sifreDegistirForm").validate({
    rules: {
      yeniSifreTekrar: {
        equalTo: "#yeniSifre"
      }
    },
    submitHandler: function(e) {
      $('#sifreDegistir').modal('hide');
    }
  });
  $("#adresEkleForm").validate({
    submitHandler: function(e) {
      $('#adresEkle').modal('hide');
    }
  });
  $("#telefonEkleForm").validate({
    submitHandler: function(e) {
      $('#telefonEkle').modal('hide');
    }
  });
  $("#yabanciDilEkleForm").validate({
    submitHandler: function(e) {
      $('#yabanciDilEkle').modal('hide');
    }
  });
  $("#yeniOgrenimEkleForm").validate({
    submitHandler: function(e) {
      $('#ogrenimEkle').modal('hide');
    }
  });
  $("#acilDurumEkleForm").validate({
    submitHandler: function(e) {
      $('#acilDurumEkle').modal('hide');
    }
  });
  $("#asgariGecimIndirimiEkleForm").validate({
    submitHandler: function(e) {
      $('#asgariGecimIndirimiEkle').modal('hide');
    }
  });
  $("#beceriEkleForm").validate({
    submitHandler: function(e) {
      $('#beceriEkle').modal('hide');
    }
  });

  $(".sidebar__toggle").on("click", function(){
    $("body").toggleClass("no-sidebar");
  });

  $('.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).show();
    $('.dropdown-menu-child').hide();
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).hide();
	});

	$('.dropdown.dropdown-child').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).show();
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).hide();
	});
  
});