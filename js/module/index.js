/*
===============
visited check
===============
*/
const keyName = "visited";
const keyValue = true;

if (!sessionStorage.getItem(keyName)) {
  //sessionStorageにキーと値を追加

  //ここに初回アクセス時の処理
  console.log("初めての訪問です");
} else {
  //ここに通常アクセス時の処理
  console.log("訪問済みです");
}

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

if (!sessionStorage.getItem(keyName)) {
  bd.classList.toggle("no_scroll"); //オープニングアニメーション中はスクロール不可

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
  openingTl
    .to(jsDot, {
      opacity: 1,
      y: 0,
      duration: 1.0,
      delay: 0.8,
      stagger: {
        amount: 0.5, //0.5秒おきに
        from: "start", // 左から
        ease: "power4.inOut",
      },
      repeat: 0,
    })

    /* opening titleの文字を消す */
    .to(
      opTitle,
      {
        opacity: 1,
      },
      "-=5.0"
    )

    /* opening titleの文字を消す */
    .to(opTitle, {
      opacity: 0,
    })

    /* ドットを消す */
    .to(
      jsDot,
      {
        opacity: 0,
      },
      "-=0.5"
    )

    /* ドットが消えた後カーテンが上から開く */
    .to(jsLoaderBg, {
      y: "100%",
      delay: 0.5,
    })

    /* 文字が1文字ずつ登場 */
    .to(
      jsText,
      {
        duration: 1.5,
        opacity: 1,
        y: 0,
        stagger: {
          amount: 1.5,
          from: "start",
          ease: "sine.in",
        },
      },
      "-=0.1" // 前のアニメーションが完了する0.1秒前に実行する書き方
    )

    /* 文字が登場後トップページが上から参上！！ */
    .to(jsHeader, {
      opacity: 1,
      y: 0,
      onComplete: () => {
        //オープニングアニメーション完了後、スクロール可能＆スライダー
        bd.classList.toggle("no_scroll");
        $(".fv-position").bgswitcher("start");
        sessionStorage.setItem(keyName, keyValue);
      },
    });
} else {
  gsap.set(".c-loader-bg", {
    opacity: 0,
  })

  gsap.set(".l-inner", {
    opacity: 0,
  })
}

/*
===============
BackGround-img Slider
===============
*/
jQuery(function ($) {
  $(".fv-position").bgSwitcher({
    images: [
      "/img/top-fv1-pc.png",
      "/img/top-fv2-pc.png",
      "/img/top-fv3-pc.png",
      "/img/top-fv4-pc.png",
    ], // 切り替える背景画像
    Interval: 5000, //切り替えの間隔 1000=1秒
    start: false, //$.fn.bgswitcher(config)をコールした時に切り替えを開始
    loop: true, //切り替えをループする
    shuffle: false, //背景画像の順番をシャッフルする
    effect: "fade", //エフェクトの種類 (fade / blind / clip / slide / drop / hide)
    duration: 1000, //エフェクトの時間 1000=1秒
    easing: "swing", //エフェクトのイージング
  });
});

/*
===============
hamburger-menu
===============
*/
//ハンバーガーメニュー　ラインカラー変更
function hamLineChange() {
  for (let i = 0; i < fixedLineColor_len; i++) {
    if (ham.classList.contains("active")) {
      fixedLineColor[i].style.backgroundColor = "white";
    } else {
      fixedLineColor[i].style.backgroundColor = "black";
    }
  }
}

window.addEventListener("scroll", function () {
  // headerの高さを取得
  let hd_height = $("#hd-id").height();

  // headerの高さを越したら
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
    fixed.style.position = "absolute";

    fixed.style.backgroundColor = "initial";

    hamLineChange();

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
gsap.to(".js-scroll", {
  width: "50%",
  duration: 0.7,
  repeat: -1,
  ease: Power1.easeNone,
  repeatDelay: 0.7,
});
