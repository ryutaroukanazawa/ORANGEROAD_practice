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
let activePath = location.pathname

window.addEventListener('scroll', function () {
  
  // headerの高さを取得
  let hd_height = $("#hd-id").height();

  // headerが画面内に入っている & headerの高さを越したら
    if (hd_height <= window.pageYOffset) {
      fixed.style.position = "fixed";
      fixed.style.backgroundColor = "white";

      for (let i = 0; i < fixedLineColor_len; i++) {
        fixedLineColor[i].style.backgroundColor = "black";
    }

    for (i = 0; i < fixedFontColor_len; i++) {
        fixedFontColor[i].style.color = "black";
    }

    for (i = 0; i < fixedArrowColor_len; i++) {
        fixedArrowColor[i].style.borderTopColor = "black";
        fixedArrowColor[i].style.borderRightColor = "black";
    }

    } else {
        if (activePath === "/top.html") {
            fixed.style.position = "absolute";
        } else {
            fixed.style.position = "initial";
        }
      fixed.style.backgroundColor = "initial";

      for (i = 0; i < fixedLineColor_len; i++) {
        fixedLineColor[i].style.backgroundColor = "white";
    }

        for (i = 0; i < fixedFontColor_len; i++) {
            fixedFontColor[i].style.color = "white";
        }

        for (i = 0; i < fixedArrowColor_len; i++) {
            fixedArrowColor[i].style.borderTopColor = "white";
            fixedArrowColor[i].style.borderRightColor = "white";
        }
    }
});

/*
===============
Opening-Animation
===============
*/
const jsLoaderBg = ".js-loader-bg";
const opTitle = ".op-title";
const jsDot = ".js-loader-dot-wrap > span";
const jsText = ".js-mv_title-item span";
const jsHeader = ".js-header";

if (activePath === "/top.html") {

    /* 文字列を分割しspanで囲む */
    (function () {
        const jsText = document.querySelectorAll(".js-mv_title-item");
        jsText.forEach((target) => {
        let newText = "";
        const text = target.textContent;
        const result = text.split("");
        for (let i = 0; i < result.length; i++) {
            newText += "<span>" + result[i] + "</span>";
        }
        target.innerHTML = newText;
        });
    })();

    gsap.set(jsText, {
        opacity: 0,
        y: 30,
    });
    gsap.set(jsHeader, {
        opacity: 0,
        y: -50,
    });
    gsap.set(jsDot, {
        opacity: 0,
        y: -50,
    });
    gsap.set(opTitle, {
        opacity: 0,
    });

    const openingTl = gsap.timeline();

    /* ドットが左から0.5秒おきに降ってくる */
    openingTl.to(
    jsDot,
    {
        opacity: 1,
        y: 0,
        duration: 1.0,
        delay: 0.8,
        stagger: {
        amount: 0.5, //0.5秒おきに
        from: "start", // 左から
        ease: "power4.inOut",
        },
        repeat: 2,
    })

    /* opening titleの文字を消す */
    .to(opTitle, {
        opacity: 1,
    }, "-=5.0")

    /* opening titleの文字を消す */
    .to(opTitle, {
        opacity: 0,
    })

    /* ドットを消す */
    .to(jsDot, {
    opacity: 0,
    }, "-=0.5")
    
    /* ドットが消えた後カーテンが上から開く */
    .to(jsLoaderBg, {
    y: "100%",
    delay: 0.5,
    })

    /* 文字が1文字ずつ登場 */
    .to(jsText, {
        duration: 1.5,
        opacity: 1,
        y: 0,
        stagger: {
            amount: 1.5,
            from: "start",
            ease: "sine.in",
        },
        },
    "-=0.1"  // 前のアニメーションが完了する0.1秒前に実行する書き方
    )

    /* 文字が登場後トップページが上から参上！！ */
    .to(jsHeader, {
    opacity: 1,
    y: 0,
    });
};
/*
===============
hamburger-menu
===============
*/
const hamburgerTl = new TimelineLite({paused:true});
hamburgerTl.to(".hamburger-line1", {
        y: 11,
        rotation: 45,
        duration: 0.2,
        ease: "sine.out",
    })
    .to(".hamburger-line3", {
        y: -11,
        rotation: -45,
        duration: 0.2,
        ease: "sine.out",
    }, "-=0.2")
    .to(".hamburger-line2", {
        opacity: 0,
        duration: 0.2,
        ease: "sine.out",
        onComplete: () => {
            console.log("Complete!")
          },
    }, "-=0.2")
    .to(".fv", {
        opacity: 0,
    })

    // ハンバーガーメニューをクリックで、アニメーションの再生・逆再生を制御
    const hamburgerOpen = document.getElementById("hambuerger-menu-open");
    const hamburgerHeader = document.getElementById("hd-id");
    const hamburgerButton = document.getElementById("hamburger-button");

    $(".mobile-menu-icon").click(function(){
    if (hamburgerOpen.classList.contains("hamburger-fixed-fv")) {
        hamburgerTl.reverse();
    } else {
        hamburgerTl.play();
    }
    hamburgerOpen.classList.toggle("hamburger-fixed-fv");
    hamburgerHeader.classList.toggle("hamburger-fixed-hd");
    hamburgerButton.classList.toggle("hamburger-menu");
    });

/*
===============
all-times-animation
===============
*/
// move-titleのアニメーション
gsap.fromTo(
    ".js-move",
    {
        x: "100%",
    },
    {
        x: "-80%",
        duration: 10,
        repeat: -1,
        ease: Power0.easeNone,
    }
);

// スクロールラインのアニメーション
gsap.to(
    ".js-scroll",
    {
        width: "50%",
        duration: 0.7,
        repeat: -1,
        ease: Power1.easeNone,
        repeatDelay: 0.7,
    }
)

/*
===============
hover-action
===============
*/
let gsap_Class = ".hover-move";
$(gsap_Class).each(function (index, element){
    const tl = new TimelineLite({paused:true});
    tl.to(element, {
            scale: 1.15,
            duration: 0.2,
            ease: "sine.out",
        })
    element.animation = tl;
    })
    
    $(gsap_Class).mouseenter(function(){
    this.animation.play();
    })
    
    $(gsap_Class).mouseleave(function(){
    this.animation.reverse();
});

gsap_Class = ".hover-move-line";
$(gsap_Class).each(function (index, element){
    const tl = new TimelineLite({paused:true});
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
    element.animation = tl;
    })
    
    $(gsap_Class).mouseenter(function(){
    this.animation.play();
    })
    
    $(gsap_Class).mouseleave(function(){
    this.animation.reverse();
});

gsap_Class = ".hover-move-text";
$(gsap_Class).each(function (index, element){
    const tl = new TimelineLite({paused:true});
    tl.to($(element).find(".gsap-move"), {
            scale: 1.1,
            duration: 0.2,
            ease: "sine.out",
        })
    element.animation = tl;
    })
    
    $(gsap_Class).mouseenter(function(){
    this.animation.play();
    })
    
    $(gsap_Class).mouseleave(function(){
    this.animation.reverse();
});

gsap_Class = ".hover-move-line-text";
$(gsap_Class).each(function (index, element){
    const tl = new TimelineLite({paused:true});
    tl.to($(element).find(".gsap-move"), {
            scale: 1.1,
            duration: 1,
            ease: "steps(12)",
            repeat: -1,
        })
    .to($(element).find(".bd-bottom"), {
        duration: 0.2,
        ease: "sine.out",
        width: "100%",
    }, 0)
    element.animation = tl;
    })
    
    $(gsap_Class).mouseenter(function(){
    this.animation.play();
    })
    
    $(gsap_Class).mouseleave(function(){
    this.animation.seek(1);
    this.animation.reverse();
});


gsap_Class = ".hover-move-line-down";
$(gsap_Class).each(function (index, element){
    const tl = new TimelineLite({paused:true});
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
    .to($(element).find(".lineup-hoverlist"), {
        duration: 0.2,
        ease: "sine.out",
        scale: 1,
        opacity: 0.9,
    }, "-=0.2")
    .to($(element).find(".support-hoverlist"), {
        duration: 0.2,
        ease: "sine.out",
        scale: 1,
        opacity: 0.9,
    }, "-=0.2")
    element.animation = tl;
    })
    
    $(gsap_Class).mouseenter(function(){
    this.animation.play();
    })
    
    $(gsap_Class).mouseleave(function(){
    this.animation.reverse();
});

gsap_Class = ".hover-move-line-right";
$(gsap_Class).each(function (index, element){
    const tl = new TimelineLite({paused:true});
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
        repeat: -1
    })
    element.animation = tl;
    })
    
    $(gsap_Class).mouseenter(function(){
    this.animation.play();
    })
    
    $(gsap_Class).mouseleave(function(){
    this.animation.seek(1);
    this.animation.reverse();
});

gsap_Class = ".hover-move-line-up";
$(gsap_Class).each(function (index, element){
    const tl = new TimelineLite({paused:true});
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
        repeat: -1
    })
    element.animation = tl;
    })
    
    $(gsap_Class).mouseenter(function(){
    this.animation.play();
    })
    
    $(gsap_Class).mouseleave(function(){
    this.animation.seek(1);
    this.animation.reverse();
});

gsap_Class = ".hover-right";
$(gsap_Class).each(function (index, element){
    const tl = new TimelineLite({paused:true});
    tl.to($(element).find(".contact-side-arrow-value"), {
        duration: 0.2,
        ease: "sine.out",
        rotation: 405,
        x: "-80%",
    })
    .to($(element).find(".contact-side-arrow-value"), {
        duration: 1,
        ease: "sine.out",
        x: "80%",
        repeat: -1
    })
    element.animation = tl;
    })
    
    $(gsap_Class).mouseenter(function(){
    this.animation.play();
    })
    
    $(gsap_Class).mouseleave(function(){
    this.animation.seek(1);
    this.animation.reverse();
});

gsap_Class = ".hover-transparent";
$(gsap_Class).each(function (index, element){
    const tl = new TimelineLite({paused:true});
    tl.to(element, {
            opacity: 0.6,
            duration: 0.2,
            ease: "sine.out",
        })
    element.animation = tl;
    })
    
    $(gsap_Class).mouseenter(function(){
    this.animation.play();
    })
    
    $(gsap_Class).mouseleave(function(){
    this.animation.reverse();
});