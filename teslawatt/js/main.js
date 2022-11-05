window.addEventListener("scroll", function () {
  var header = document.querySelector(".navBar");
  header.classList.toggle("sticky", window.scrollY > 200);
});

const nav = document.querySelector("nav");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

openMenu.addEventListener("click", () => {
  nav.classList.add("showMenu");
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
});
closeMenu.addEventListener("click", () => {
  nav.classList.remove("showMenu");
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
});

jQuery(function () {
  jQuery("#showall").click(function () {
    jQuery(".target").show();
  });
  jQuery(".Single").click(function () {
    jQuery(".target").hide();
    jQuery(".prikaziPoruku").hide();
    jQuery(".targetActive").hide();
    jQuery(".target_box").show();
    jQuery(".minus").hide();
    jQuery(".plus").show();
    jQuery("#div" + $(this).attr("target")).show();

    jQuery(".Single").removeClass("activeSingle");
    $(this).addClass("activeSingle");
  });

  jQuery(".test1").click(function () {
    if ($("#poruka1").is(":visible")) {
      jQuery("#poruka1").hide();
      jQuery("#poruka2").hide();
      jQuery("#poruka3").hide();
      jQuery("#plus0").show();
      jQuery("#minus0").hide();
    } else {
      jQuery("#poruka1").show();
      jQuery("#poruka2").hide();
      jQuery("#poruka3").hide();

      jQuery("#minus1").hide();
      jQuery("#plus1").show();
      jQuery("#minus2").hide();
      jQuery("#plus2").show();

      jQuery("#plus0").hide();
      jQuery("#minus0").show();
    }
  });
  jQuery(".test2").click(function () {
    if ($("#poruka2").is(":visible")) {
      jQuery("#poruka2").hide();
      jQuery("#poruka1").hide();
      jQuery("#poruka3").hide();
      jQuery("#plus1").show();
      jQuery("#minus1").hide();
    } else {
      jQuery("#poruka2").show();
      jQuery("#poruka1").hide();
      jQuery("#poruka3").hide();

      jQuery("#minus0").hide();
      jQuery("#plus0").show();
      jQuery("#minus2").hide();
      jQuery("#plus2").show();

      jQuery("#plus1").hide();
      jQuery("#minus1").show();
    }
  });
  jQuery(".test3").click(function () {
    if ($("#poruka3").is(":visible")) {
      jQuery("#poruka2").hide();
      jQuery("#poruka1").hide();
      jQuery("#poruka3").hide();
      jQuery("#plus2").show();
      jQuery("#minus2").hide();
    } else {
      jQuery("#poruka2").hide();
      jQuery("#poruka1").hide();
      jQuery("#poruka3").show();

      jQuery("#minus0").hide();
      jQuery("#plus0").show();
      jQuery("#minus1").hide();
      jQuery("#plus1").show();

      jQuery("#plus2").hide();
      jQuery("#minus2").show();
    }
  });
  jQuery(".test4").click(function () {
    if ($("#poruka4").is(":visible")) {
      jQuery("#poruka4").hide();
      jQuery("#poruka5").hide();
      jQuery("#poruka6").hide();
      jQuery("#plus3").show();
      jQuery("#minus3").hide();
    } else {
      jQuery("#poruka6").hide();
      jQuery("#poruka5").hide();
      jQuery("#poruka4").show();

      jQuery("#minus4").hide();
      jQuery("#plus4").show();
      jQuery("#minus5").hide();
      jQuery("#plus5").show();

      jQuery("#plus3").hide();
      jQuery("#minus3").show();
    }
  });
  jQuery(".test5").click(function () {
    if ($("#poruka5").is(":visible")) {
      jQuery("#poruka4").hide();
      jQuery("#poruka5").hide();
      jQuery("#poruka6").hide();
      jQuery("#plus4").show();
      jQuery("#minus4").hide();
    } else {
      jQuery("#poruka6").hide();
      jQuery("#poruka5").show();
      jQuery("#poruka4").hide();

      jQuery("#minus5").hide();
      jQuery("#plus5").show();
      jQuery("#minus3").hide();
      jQuery("#plus3").show();

      jQuery("#plus4").hide();
      jQuery("#minus4").show();
    }
  });
  jQuery(".test6").click(function () {
    if ($("#poruka6").is(":visible")) {
      jQuery("#poruka4").hide();
      jQuery("#poruka5").hide();
      jQuery("#poruka6").hide();
      jQuery("#plus5").show();
      jQuery("#minus5").hide();
    } else {
      jQuery("#poruka6").show();
      jQuery("#poruka5").hide();
      jQuery("#poruka4").hide();

      jQuery("#minus4").hide();
      jQuery("#plus4").show();
      jQuery("#minus3").hide();
      jQuery("#plus3").show();

      jQuery("#plus5").hide();
      jQuery("#minus5").show();
    }
  });
  jQuery(".test7").click(function () {
    if ($("#poruka7").is(":visible")) {
      jQuery("#poruka7").hide();
      jQuery("#poruka8").hide();
      jQuery("#poruka9").hide();
      jQuery("#plus6").show();
      jQuery("#minus6").hide();
    } else {
      jQuery("#poruka7").show();
      jQuery("#poruka8").hide();
      jQuery("#poruka9").hide();

      jQuery("#minus8").hide();
      jQuery("#plus8").show();
      jQuery("#minus7").hide();
      jQuery("#plus7").show();

      jQuery("#plus6").hide();
      jQuery("#minus6").show();
    }
  });
  jQuery(".test8").click(function () {
    if ($("#poruka8").is(":visible")) {
      jQuery("#poruka7").hide();
      jQuery("#poruka8").hide();
      jQuery("#poruka9").hide();
      jQuery("#plus7").show();
      jQuery("#minus7").hide();
    } else {
      jQuery("#poruka7").hide();
      jQuery("#poruka8").show();
      jQuery("#poruka9").hide();

      jQuery("#minus8").hide();
      jQuery("#plus8").show();
      jQuery("#minus6").hide();
      jQuery("#plus6").show();

      jQuery("#plus7").hide();
      jQuery("#minus7").show();
    }
  });
  jQuery(".test9").click(function () {
    if ($("#poruka9").is(":visible")) {
      jQuery("#poruka7").hide();
      jQuery("#poruka8").hide();
      jQuery("#poruka9").hide();
      jQuery("#plus8").show();
      jQuery("#minus8").hide();
    } else {
      jQuery("#poruka7").hide();
      jQuery("#poruka8").hide();
      jQuery("#poruka9").show();

      jQuery("#minus7").hide();
      jQuery("#plus7").show();
      jQuery("#minus6").hide();
      jQuery("#plus6").show();

      jQuery("#plus8").hide();
      jQuery("#minus8").show();
    }
  });
});
jQuery(".ants17").hide();
jQuery(function () {
  jQuery(".SingleAnt").click(function () {
    jQuery(".SingleAnt").removeClass("activeAnt");
    $(this).addClass("activeAnt");
  });
  jQuery("#option1").click(function () {
    $(this).addClass("activeAnt");
    jQuery(".chooser1").show();
    jQuery(".chooser2").hide();
    jQuery(".ants9").show();
    jQuery(".ants17").hide();
  });
  jQuery("#option2").click(function () {
    jQuery(".chooser1").hide();
    jQuery(".chooser2").show();
    jQuery(".ants9").hide();
    jQuery(".ants17").show();
  });
});
