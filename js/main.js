/*
===============
header nav : position: fixed
===============
*/
const fixed = document.getElementById("hd-id");
const fixedLineColor = document.getElementsByClassName("fixed-line-color");
let fixedLineColor_len = fixedLineColor.length;
const fixedFontColor = document.getElementsByClassName("fixed-font-color");
let fixedFontColor_len = fixedFontColor.length;
const fixedArrowColor = document.getElementsByClassName("fixed-arrow-color");
let fixedArrowColor_len = fixedArrowColor.length;
let activePath = location.pathname;

/*
===============
hamburger-menu
===============
*/
//ハンバーガーNAVを透明＆上にずらす
gsap.set(".humburger-display", {
  opacity: 0,
  y: -50,
});

const hamburgerTl = new TimelineLite({ paused: true });
hamburgerTl
  .to(".hamburger-line1", {
    y: 12,
    rotation: 45,
    duration: 0.8,
    ease: "sine.out",
  })
  .to(
    ".hamburger-line3",
    {
      y: -12,
      rotation: -45,
      duration: 0.8,
      ease: "sine.out",
    },
    "-=0.8"
  )
  .to(
    ".hamburger-line2",
    {
      opacity: 0,
      duration: 0.4,
      ease: "sine.out",
      onComplete: () => {},
    },
    "-=0.8"
  )
  .to(
    ".humburger-display",
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "sine.out",
    },
    "-=0.8"
  );

// ハンバーガーメニューをクリックで、アニメーションの再生・逆再生を制御
const ham = document.querySelector("#js-hamburger"); //js-hamburgerの要素を取得し、変数hamに格納
const nav = document.querySelector("#js-nav"); //js-navの要素を取得し、変数navに格納
const bd = document.querySelector("body");

//ハンバーガーメニューをクリックしたら
ham.addEventListener("click", function () {
  bd.classList.toggle("no_scroll");

  if (ham.classList.contains("active")) {
    hamburgerTl.play();
    fixed.style.backgroundColor = "initial";
    fixed.style.position = "fixed";
  } else {
    hamburgerTl.reverse();
    fixed.style.backgroundColor = "white";
    fixed.style.position = "initial";
  }

  ham.classList.toggle("active"); // ハンバーガーメニューにactiveクラスを付け外し
  nav.classList.toggle("active"); // ナビゲーションメニューにactiveクラスを付け外し
  hamLineChange(); //ハンバーガーメニューのラインカラーを変更
});

/*
===============
hover-action
===============
*/
$(window).on("load resize", function () {
  let w = $(window).width();
  if (w >= 900) {
    // ウィンドウサイズ768px以下のときの処理

    let gsap_Class = ".hover-move";
    $(gsap_Class).each(function (index, element) {
      const tl = new TimelineLite({ paused: true });
      tl.to(element, {
        scale: 1.15,
        duration: 0.2,
        ease: "sine.out",
      });
      element.animation = tl;
    });

    $(gsap_Class).mouseenter(function () {
      this.animation.play();
    });

    $(gsap_Class).mouseleave(function () {
      this.animation.reverse();
    });

    gsap_Class = ".hover-move-line";
    $(gsap_Class).each(function (index, element) {
      const tl = new TimelineLite({ paused: true });
      tl.to(element, {
        scale: 1.15,
        duration: 0.2,
        ease: "sine.out",
      }).to($(element).find(".bd-bottom"), {
        duration: 0.2,
        ease: "sine.out",
        width: "100%",
      });
      element.animation = tl;
    });

    $(gsap_Class).mouseenter(function () {
      this.animation.play();
    });

    $(gsap_Class).mouseleave(function () {
      this.animation.reverse();
    });

    gsap_Class = ".hover-move-text";
    $(gsap_Class).each(function (index, element) {
      const tl = new TimelineLite({ paused: true });
      tl.to($(element).find(".gsap-move"), {
        scale: 1.1,
        duration: 0.2,
        ease: "sine.out",
      });
      element.animation = tl;
    });

    $(gsap_Class).mouseenter(function () {
      this.animation.play();
    });

    $(gsap_Class).mouseleave(function () {
      this.animation.reverse();
    });

    gsap_Class = ".hover-move-line-text";
    $(gsap_Class).each(function (index, element) {
      const tl = new TimelineLite({ paused: true });
      tl.to($(element).find(".gsap-move"), {
        scale: 1.1,
        duration: 1,
        ease: "steps(12)",
        repeat: -1,
      }).to(
        $(element).find(".bd-bottom"),
        {
          duration: 0.2,
          ease: "sine.out",
          width: "100%",
        },
        0
      );
      element.animation = tl;
    });

    $(gsap_Class).mouseenter(function () {
      this.animation.play();
    });

    $(gsap_Class).mouseleave(function () {
      this.animation.seek(1);
      this.animation.reverse();
    });

    gsap_Class = ".hover-move-line-down";
    $(gsap_Class).each(function (index, element) {
      const tl = new TimelineLite({ paused: true });
      tl.to(element, {
        scale: 1.15,
        duration: 0.2,
        ease: "sine.out",
      })
        .to($(element).find(".bd-bottom"), {
          duration: 0.2,
          ease: "sine.out",
          width: "100%",
        })
        .to($(element).find(".up_arrow"), {
          duration: 0.2,
          ease: "sine.out",
          rotation: 135,
          y: "-50%",
        })
        .to(
          $(element).find(".lineup-hoverlist"),
          {
            duration: 0.2,
            ease: "sine.out",
            scale: 1,
            opacity: 0.9,
          },
          "-=0.2"
        )
        .to(
          $(element).find(".support-hoverlist"),
          {
            duration: 0.2,
            ease: "sine.out",
            scale: 1,
            opacity: 0.9,
          },
          "-=0.2"
        );
      element.animation = tl;
    });

    $(gsap_Class).mouseenter(function () {
      this.animation.play();
    });

    $(gsap_Class).mouseleave(function () {
      this.animation.reverse();
    });

    gsap_Class = ".hover-move-line-right";
    $(gsap_Class).each(function (index, element) {
      const tl = new TimelineLite({ paused: true });
      tl.to(element, {
        scale: 1.15,
        duration: 0.2,
        ease: "sine.out",
      })
        .to($(element).find(".bd-bottom"), {
          duration: 0.2,
          ease: "sine.out",
          width: "100%",
        })
        .to($(element).find(".side_arrow"), {
          duration: 0.2,
          ease: "sine.out",
          rotation: 405,
          x: "-300%",
        })
        .to($(element).find(".side_arrow"), {
          duration: 1,
          ease: "sine.out",
          x: "0",
          repeat: -1,
        });
      element.animation = tl;
    });

    $(gsap_Class).mouseenter(function () {
      this.animation.play();
    });

    $(gsap_Class).mouseleave(function () {
      this.animation.seek(1);
      this.animation.reverse();
    });

    gsap_Class = ".hover-move-line-up";
    $(gsap_Class).each(function (index, element) {
      const tl = new TimelineLite({ paused: true });
      tl.to(element, {
        scale: 1.15,
        duration: 0.2,
        ease: "sine.out",
      })
        .to($(element).find(".bd-bottom"), {
          duration: 0.2,
          ease: "sine.out",
          width: "100%",
        })
        .to($(element).find(".up_arrow"), {
          duration: 0.2,
          ease: "sine.out",
          rotation: 315,
          y: "50%",
        })
        .to($(element).find(".up_arrow"), {
          duration: 1,
          ease: "sine.out",
          y: "-50%",
          repeat: -1,
        });
      element.animation = tl;
    });

    $(gsap_Class).mouseenter(function () {
      this.animation.play();
    });

    $(gsap_Class).mouseleave(function () {
      this.animation.seek(1);
      this.animation.reverse();
    });

    gsap_Class = ".hover-right";
    $(gsap_Class).each(function (index, element) {
      const tl = new TimelineLite({ paused: true });
      tl.to($(element).find(".contact-side-arrow-value"), {
        duration: 0.2,
        ease: "sine.out",
        rotation: 405,
        x: "-80%",
      }).to($(element).find(".contact-side-arrow-value"), {
        duration: 1,
        ease: "sine.out",
        x: "80%",
        repeat: -1,
      });
      element.animation = tl;
    });

    $(gsap_Class).mouseenter(function () {
      this.animation.play();
    });

    $(gsap_Class).mouseleave(function () {
      this.animation.seek(1);
      this.animation.reverse();
    });

    gsap_Class = ".hover-transparent";
    $(gsap_Class).each(function (index, element) {
      const tl = new TimelineLite({ paused: true });
      tl.to(element, {
        opacity: 0.6,
        duration: 0.2,
        ease: "sine.out",
      });
      element.animation = tl;
    });

    $(gsap_Class).mouseenter(function () {
      this.animation.play();
    });

    $(gsap_Class).mouseleave(function () {
      this.animation.reverse();
    });
  } else {
    // それ以外の処理
  }
});
