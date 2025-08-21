
// 다크모드
const isBrowserDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
let darksetitem = localStorage.getItem('color-theme');
if (!darksetitem) {
    isBrowserDarkMode ? (localStorage.setItem('color-theme', 'dark'), document.documentElement.setAttribute('color-theme', 'dark')) : localStorage.setItem('color-theme', 'light')
} else if (darksetitem == 'dark') {
    document.documentElement.setAttribute('color-theme', 'dark');
}

const colormodeBt = document.querySelector('.color-mode-bt');
const htmlElement = document.documentElement;

if (colormodeBt) {
    colormodeBt.addEventListener('click', function () {
        const currentTheme = htmlElement.getAttribute('color-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        htmlElement.setAttribute('color-theme', newTheme);
    });
}


// 리스트 아래로
const headerMenuBt = document.querySelector('.header-menu-bt');
const headerMenu = document.querySelector('.header-menu');

headerMenuBt.addEventListener('click', function () {
    let curWidth = headerMenu.offsetWidth;
    let autoWidth = headerMenu.scrollWidth;
    if (curWidth === 0) {
        headerMenu.style.width = autoWidth + 'px';
        headerMenuBt.classList.add('header-menu-open');
    } else {
        headerMenu.style.width = '0';
        headerMenuBt.classList.remove('header-menu-open');
    }
});

const headerMinBt = document.querySelector('.header-min-bt');
const activeMenu = document.querySelectorAll(".header-menu li");

headerMinBt.addEventListener('click', function () {
    headerMenu.classList.toggle('header-menu-on');
    headerMinBt.classList.toggle('header-min-open');
    menuUpMov()
});
function minMenuClose() {
    headerMenu.classList.remove('header-menu-on');
    headerMinBt.classList.remove('header-min-open');
    unlockScroll()
}
function menuUpMov() {
    activeMenu.forEach(function (activeMenu, index) {
        if (headerMenu.classList.contains('header-menu-on')) {
            setTimeout(() => {
                activeMenu.style.opacity = "1";
                activeMenu.style.transform = "translateY(0rem)";
                lockScroll();
            }, index * 100)

        } else {
            activeMenu.style.opacity = "0";
            activeMenu.style.transform = "translateY(5rem)";
            unlockScroll();
        }
    });
}

function checkWidth() {
    // 768px 이상인지 확인하는 미디어 쿼리
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    if (mediaQuery.matches) {
        activeMenu.forEach(function (activeMenu) {
            activeMenu.style.opacity = "1";
            activeMenu.style.transform = "translateY(0rem)";
        });
    } else {
        activeMenu.forEach(function (activeMenu) {
            activeMenu.style.opacity = "0";
            activeMenu.style.transform = "translateY(5rem)";
        });
    }
}

// 페이지 로드 시 함수 실행
checkWidth();

// 창 크기가 변경될 때마다 함수 실행
window.addEventListener('resize', checkWidth);





function smoothScroll(target) {
    const targetSection = document.querySelector(target);
    const targetPosition = targetSection.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800; // Time in milliseconds to scroll

    let start = null;
    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }

    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

    window.requestAnimationFrame(step);
}


// 
// 스크롤 이벤트 감지
window.addEventListener("scroll", function () {
    // 현재 스크롤 위치
    const scrollPosition = window.scrollY;

    // 변형을 적용할 요소 선택
    const element = document.querySelector(".home-text-box");

    // 스크롤 위치에 따라 Y축으로 이동하는 효과 적용
    const translateYValue = -scrollPosition / 4;
    element.style.transform = "translateX(-8rem) translateY(" + translateYValue + "px)";

    // 일정 스크롤 위치 이상에서만 투명도 부드럽게 조절
    const triggerScroll = window.innerHeight * 0.6;

    if (scrollPosition > triggerScroll) {
        const targetOpacity = Math.max(0, 1 - (scrollPosition - triggerScroll) / (window.innerHeight * 0.2));
        element.style.opacity = targetOpacity;
    } else {
        element.style.opacity = '1'; // 기본 투명도
    }
});


window.addEventListener('scroll', highlightNav);

function highlightNav() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('nav li');

    let currentSectionIndex = 0;

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSectionIndex = index;
        }
    });

    navItems.forEach((item, index) => {
        if (index === currentSectionIndex) {
            item.classList.add('nav-ckd');
        } else {
            item.classList.remove('nav-ckd');
        }
    });
}

// function scrollToSection(index) {
//     const sections = document.querySelectorAll('section');
//     const targetSection = sections[index];

//     window.scrollTo({
//         top: targetSection.offsetTop,
//         behavior: 'smooth'
//     });
// }


const transbridge = `
<div class="title">
<h1>Transbridge 페이지 제작</h1>
<p>Transbridge Main, B2B, B2C 페이지 제작</p>
</div>

<ul>
<li>
    <h2>Transbridge Main
        <a href="https://transbridge.io/" target="_blank">
            바로가기
        </a>
    </h2>
    <div class="prj-detail-img">
        <img src="img/transbridge.png"  alt="sample">
    </div>
    <div>
        기획, 디자인 Figma를 이용해 토의 및 가상 페이지 제작 후 퍼블리싱. <br />
        모든 사이트는 반응형으로 제작되었습니다.
        <div class="stack-hash">
            <span>#Figma</span>
            <span>#퍼블리싱 100%</span>
        </div>
    </div>
</li>
<li>
    <h2>Transbridge B2B
        <a href="https://transbridge.io/b2b" target="_blank">
            바로가기
        </a>
    </h2>
    <div class="prj-detail-img">
        <img src="img/transbridge-b2b.png"  alt="sample">
    </div>
    <div>
        기획, 디자인 Figma를 이용해 토의 및 가상 페이지 제작 후 퍼블리싱. <br />
        모든 사이트는 반응형으로 제작되었습니다.
        <div class="stack-hash">
            <span>#Figma</span>
            <span>#퍼블리싱 100%</span>
        </div>
    </div>
</li>
<li>
    <h2>Transbridge B2C
        <a href="https://transbridge.io/b2c" target="_blank">
            바로가기
        </a>
    </h2>
    <div class="prj-detail-img">
        <img src="img/transbridge-b2c.png"  alt="sample">
    </div>
    <div>
        기획, 디자인 Figma를 이용해 토의 및 가상 페이지 제작 후 퍼블리싱. <br />
        모든 사이트는 반응형으로 제작되었습니다.
        <br />
        <br />
        B2C 사이트의 경우 NFT, Token 브릿지 기능이 작동하는 페이지가 있으며, <br />
        해당 페이지는 백엔드 개발자와 협업하여 완성되었습니다. <br />
        
        <div class="stack-hash">
            <span>#Figma</span>
            <span>#퍼블리싱 100%</span>
            <span>#Javascript</span>
        </div>
    </div>
</li>
</ul>
`
const kthulu = `
<div class="title">
<h1>Kthulu Wallet 퍼블리싱</h1>
<p>Kthulu Home, 웹 익스텐션, 앱 퍼블리싱</p>
</div>

<ul>
<li>
    <h2>
        Kthulu Web Extension
        <a href="#" target="_blank" class="disable">바로가기</a>
    </h2>
    <div class="prj-detail-img">
        <img src="img/kthulu-eximg.png"  alt="sample" style="max-width: 100%">
    </div>
    <div>
        기획/디자인/퍼블리싱 진행하였으며, 백엔드 개발자와 협업해 완성했습니다. <br />
        모션 및 간단한 기능(token, nft 선택시 변환, 레이어 등), 다크모드, 언어기능 등 참여했습니다.
        <br /><br />
        크롬 웹스토어 : <a href="https://chrome.google.com/webstore/detail/kthulu/dopebbafflfackjabdpnbgkijpgfkpeh?utm_source=ext_sidebar&hl=ko" target="_blank"> https://chrome.google.com/webstore/detail/kthulu/dopebbafflfackjabdpnbgkijpgfkpeh?utm_source=ext_sidebar&hl=ko </a>
        <br />
웨일 스토어 : <a href="https://store.whale.naver.com/detail/anbpfbpedmjphojdgcdnlnfajjongpeb" target="_blank"> https://store.whale.naver.com/detail/anbpfbpedmjphojdgcdnlnfajjongpeb </a>
<br />
엣지 스토어 : <a href="https://microsoftedge.microsoft.com/addons/detail/kthulu/jkflojkdbbljhbbdgnfanagcmjmndjah?hl=vi" target="_blank"> https://microsoftedge.microsoft.com/addons/detail/kthulu/jkflojkdbbljhbbdgnfanagcmjmndjah?hl=vi </a>
<br />
사파리 : <a href="https://apps.apple.com/kr/app/kthulu-wallet/id1644852081" target="_blank"> https://apps.apple.com/kr/app/kthulu-wallet/id1644852081 </a>
<br /><br />
**▶ 크툴루 (월렛)**
<br /><br />
구글 플레이스토어 : <a href="https://play.google.com/store/apps/details?id=io.kthulu.abc&hl=en-KR" target="_blank"> https://play.google.com/store/apps/details?id=io.kthulu.abc&hl=en-KR </a>
<br />
애플 앱스토어 : <a href="https://apps.apple.com/kr/app/kthulu-wallet/id1644852081" target="_blank"> https://apps.apple.com/kr/app/kthulu-wallet/id1644852081 </a>
<br />
        <div class="stack-hash">
            <span>#퍼블리싱 100%</span>
            <span>#반응형</span>
            <span>#Javascript</span>
            <span>#Git</span>
        </div>
    </div>
</li>
<li>
    <h2>
        [개인 프로젝트] Kthulu Web Docs
        <a href="http://jiseon.site/docs/index.html" target="_blank">바로가기</a>
    </h2>
    <div class="prj-detail-img">
        <img src="img/kthulu-img.png"  alt="sample">
    </div>
    <div>
        GitBook 사용 전 테스트로 만들었던 Kthulu Docs입니다. <br />                                    
        <div class="stack-hash">
            <span>#퍼블리싱 100%</span>
            <span>#Javascript</span>
        </div>
    </div>
</li>
<li>
    <h2>
        Kthulu Home
        <a href="https://kthulu.io/" target="_blank">바로가기</a>
    </h2>
    <div>
        kthulu wallet에 대한 간단한 랜딩페이지입니다. <br />
        GitBook을 이용해 Docs 사용자 파트 업데이트에도 참여했습니다.
        <div class="stack-hash">
            <span>#퍼블리싱 100%</span>
            <span>#반응형</span>
            <span>#GitBook</span>
        </div>
    </div>
</li>
</ul>
`
const heavenart = `
<div class="title">
<h1>Heaven Art 퍼블리싱</h1>
<p>Market, Trnasfer, Bridge 페이지 등 제작</p>
</div>
<ul>
<li>
    <h2>
        Heaven Art
        <a href="http://jiseon.site/nh-market/nft/" target="_blank">바로가기</a>
    </h2>
    <div class="prj-detail-img">
        <img src="img/heavenart-sample.png" alt="sample" style="max-width: 600px">
    </div>
    <div>
        NFT Marketplace 입니다. <br />
        NFT Create, Explore, Sell 등은 사용자가 이용 가능한 페이지이며,<br />
        Token, Swap, Panel, Wallet 탭 기능은 관리자만 이용 가능합니다.
    </div>
</li>
<li>
    <h2>
        Trnasfer Page
        <a href="http://jiseon.site/nh-market/transfer/" target="_blank">바로가기</a>
    </h2>
    <div>
        Transfer 전용 페이지입니다. <br>
        Transfer 진행 및 확인이 가능한 페이지를 제작했습니다.
    </div>
</li>
<li>
    <h2>
        Bridge Page
        <a href="http://jiseon.site/nh-market/bridge/eth_mint.html" target="_blank">바로가기</a>
    </h2>
    <div>
        Bridge 전용 페이지입니다. <br>
        Token 혹은 NFT Bridge 진행 및 확인이 가능한 페이지를 제작했습니다.
    </div>
</li>
</ul>
`
const abchome = `
<div class="title">
<h1>ABC home</h1>
<p>ABC 홈페이지 제작</p>
</div>
<ul>
<li>
    <h2>
        ABC Home 
        <a href="https://abc.ne.kr/intro.html" target="_blank">바로가기</a>
    </h2>
    <div class="prj-detail-img">
        <img src="img/abchome.png" alt="sample" style="max-width: 100%">
    </div>
    <div>
        abc 메인 페이지입니다.
    </div>
</li>
</ul>
`

function LayerOpen(num) {
    document.querySelector('.layer').classList.add('layer-view');

    // 예시 배열
    const dataArray = [transbridge, kthulu, heavenart, abchome];
    const detailContainer = document.querySelector('.prj-detail');
    detailContainer.innerHTML = dataArray[num];
    lockScroll()
}

function layerClose(el) {
    el.closest('.layer').classList.remove('layer-view');
    unlockScroll()
}


let isScrollLocked = false;
let scrollPosition = 0;

function lockScroll() {
    if (!isScrollLocked) {
        // 스크롤을 막기 전 현재 스크롤 위치 저장
        scrollPosition = window.pageYOffset;

        // 스크롤 막기
        document.body.style.overflow = 'hidden';
        isScrollLocked = true;
    }
}

function unlockScroll() {
    if (isScrollLocked) {
        // 스크롤 해제
        document.body.style.overflow = '';

        // 저장된 스크롤 위치로 이동
        window.scrollTo(0, scrollPosition);
        isScrollLocked = false;
    }
}

window.addEventListener('scroll', () => {
    // 모든 섹션 요소를 선택
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
        // 각 섹션의 상단과 하단 위치 계산
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        // 현재 스크롤 위치 (뷰포트 상단부터의 거리)
        const scrollPosition = window.scrollY + window.innerHeight / 2; // 중간 기준으로 판단

        // 스크롤 위치가 섹션 내에 있는지 확인
        if (scrollPosition > sectionTop && scrollPosition < sectionBottom) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});


window.addEventListener('scroll', () => {
    const designBox = document.querySelectorAll('.stack-box > li');
    designBox.forEach((box) => {
        const windowBottom = window.scrollY;
        const boxBottom = box.offsetTop + box.offsetHeight;

        if (windowBottom >= boxBottom + 650) {
            box.classList.add('tech-active');
        } else {
            // 스크롤이 다시 올라가면 클래스를 제거
            box.classList.remove('tech-active');
        }
    });
});



const target = document.querySelector('.email-txt');
const text = target.innerText;
target.innerHTML = "";
for (let i = 0; i < text.length; i++) {
    let span = document.createElement('span');
    span.textContent = text[i];
    // 각 글자의 애니메이션 시작 지연 시간 설정
    span.style.transitionDelay = `${i * 0.03}s`;
    target.appendChild(span);
}

function animateOnScroll() {
    let spans = target.querySelectorAll('.email-txt span');
    for (let span of spans) {
        let rect = span.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            span.style.opacity = 1;
            span.style.transform = 'translateY(0)';
        }
    }
}

window.addEventListener('scroll', animateOnScroll);


const cursor = document.getElementById('cursor');
const content = document.getElementById('home');

// 마우스 이벤트를 감지하여 원의 위치를 조정합니다.
document.addEventListener('mousemove', function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // 마우스 위치를 따라 이동합니다.
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});



const hoverTarget = document.querySelector('.header-right');
const hoverLogo = document.querySelector('.logo');
const hoverstack = document.querySelector('#stack');
const hoverwork = document.querySelector('#work');
const hovercontact = document.querySelector('#contact');
const hoverfooter = document.querySelector('footer');

// 마우스가 특정 div 위에 올라가면 스타일을 변경합니다.
hoverTarget.addEventListener('mouseenter', function () {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.5)'
    cursor.style.transition = '0.3s all';
});

// 마우스가 특정 div에서 벗어나면 스타일을 원래대로 돌립니다.
hoverTarget.addEventListener('mouseleave', function () {
    cursor.style.transform = 'translate(-50%, -50%)' 
    setTimeout(function(){
        cursor.style.transition = '0s';
    }, 500);
});

hoverLogo.addEventListener('mouseenter', function () {
    cursor.style.transform = 'translate(-50%, -50%) scale(3)'
    cursor.style.transition = '0.3s all';
});
hoverLogo.addEventListener('mouseleave', function () {
    cursor.style.transform = 'translate(-50%, -50%)' 
    setTimeout(function(){
        cursor.style.transition = '0s';
    }, 500);
});

hoverstack.addEventListener('mouseenter', function () {
    cursor.style.opacity = '0';
    cursor.style.transition = '0.3s all';
});
hoverstack.addEventListener('mouseleave', function () {
    cursor.style.opacity = '1';
    setTimeout(function(){
        cursor.style.transition = '0s';
    }, 500);
});

hoverwork.addEventListener('mouseenter', function () {
    cursor.style.opacity = '0';
    cursor.style.transition = '0.3s all';
});
hoverwork.addEventListener('mouseleave', function () {
    cursor.style.opacity = '1';
    setTimeout(function(){
        cursor.style.transition = '0s';
    }, 500);
});


hovercontact.addEventListener('mouseenter', function () {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.5)'
    cursor.style.transition = '0.3s all';
});
hovercontact.addEventListener('mouseleave', function () {
    cursor.style.transform = 'translate(-50%, -50%)'
    setTimeout(function(){
        cursor.style.transition = '0s';
    }, 500);
});

hoverfooter.addEventListener('mouseenter', function () {
    cursor.style.opacity = '0';
    cursor.style.transition = '0.3s all';
});
hoverfooter.addEventListener('mouseleave', function () {
    cursor.style.opacity = '1';
    setTimeout(function(){
        cursor.style.transition = '0s';
    }, 500);
});
