import { useRef ,useLayoutEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const RoundLineAnimation = () => {

    const ref = useRef([]);
    ref.current = [];
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        ref.current.forEach((el) => {
            const wrapper = el.querySelector('.animline');
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: "top bottom-=50",
                    toggleActions: "play none none reset",
                    // markers: true,
                    // toggleActions: "restart none none reset"
                }
            })
            tl.fromTo(wrapper, { 
                // opacity: 0,
                strokeDasharray:1920,
                strokeDashoffset:1920,
            }, { 
                // opacity: 0.5, 
                duration: 1 ,
                strokeDasharray:1350,
                strokeDashoffset:1920,
                ease: "power1.inOut",
            });
            // tl.to(wrapper, { duration: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"})
        })
    }, [])
    const addtoRefs = (el) => {
        if (el && !ref.current.includes(el)) {
            ref.current.push(el);
        }
    }

    return (
        <div className="absolute left-0 top-0 z-10 pointer-events-none rotate-180" ref={addtoRefs}>
            <svg width="616" height="616" className='w-full h-full' viewBox="0 0 616 616" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1677_65)">
                    <mask id="mask0_1677_65" maskUnits="userSpaceOnUse" x="0" y="-1" width="616" height="617">
                        <path d="M306.1 616V608L315.1 607.9L315.2 615.9L306.1 616ZM297.9 615.9L288.9 615.5L289.3 607.5L298.3 607.9L297.9 615.9ZM323.3 615.6L322.8 607.6L331.8 607L332.3 615L323.3 615.6ZM280.7 614.8L271.7 613.9L272.5 605.9L281.4 606.8L280.7 614.8ZM340.5 614.3L339.6 606.4L348.5 605.3L349.5 613.2L340.5 614.3ZM263.6 612.8L254.7 611.4L256 603.5L264.9 604.9L263.6 612.8ZM357.5 612L356.1 604.1L365 602.5L366.4 610.4L357.5 612ZM246.6 609.8L237.8 607.9L239.5 600.1L248.3 602L246.6 609.8ZM374.4 608.8L372.6 601L381.3 598.9L383.2 606.7L374.4 608.8ZM229.8 605.9L221.1 603.5L223.3 595.8L231.9 598.2L229.8 605.9ZM391.2 604.6L389 596.9L397.6 594.4L399.9 602.1L391.2 604.6ZM213.3 601.1L204.8 598.2L207.4 590.6L215.9 593.5L213.3 601.1ZM407.6 599.5L404.9 592L413.3 589L416 596.5L407.6 599.5ZM197.1 595.4L188.7 592L191.7 584.6L200 588L197.1 595.4ZM423.7 593.4L420.6 586L428.9 582.5L432 589.9L423.7 593.4ZM181.2 588.7L173 584.9L176.4 577.7L184.5 581.5L181.2 588.7ZM439.5 586.5L436 579.3L444.1 575.3L447.6 582.5L439.5 586.5ZM165.7 581.2L157.8 576.9L161.6 569.9L169.5 574.2L165.7 581.2ZM454.9 578.8L451 571.8L458.8 567.4L462.7 574.4L454.9 578.8ZM150.6 572.8L142.9 568.1L147.1 561.3L154.8 566L150.6 572.8ZM469.8 570.1L465.5 563.4L473.1 558.6L477.4 565.3L469.8 570.1ZM136.1 563.6L128.7 558.5L133.3 551.9L140.7 557L136.1 563.6ZM484.2 560.7L479.5 554.2L486.8 548.9L491.5 555.4L484.2 560.7ZM122.1 553.6L115 548L119.9 541.7L127 547.2L122.1 553.6ZM498 550.4L493 544.2L500 538.6L505 544.8L498 550.4ZM108.6 542.8L101.8 536.9L107.1 530.9L113.9 536.8L108.6 542.8ZM511.3 539.4L505.9 533.5L512.6 527.5L518 533.4L511.3 539.4ZM95.8 531.3L89.4 525L95 519.3L101.4 525.6L95.8 531.3ZM523.9 527.7L518.2 522.1L524.5 515.7L530.2 521.3L523.9 527.7ZM83.7 519.1L77.6 512.4L83.5 507L89.6 513.6L83.7 519.1ZM535.8 515.3L529.8 510L535.7 503.3L541.7 508.6L535.8 515.3ZM72.2 506.2L66.5 499.2L72.7 494.1L78.4 501.1L72.2 506.2ZM547.1 502.2L540.8 497.2L546.4 490.1L552.7 495L547.1 502.2ZM61.5 492.7L56.2 485.4L62.7 480.7L68 488L61.5 492.7ZM557.6 488.6L551 484L556.2 476.6L562.8 481.2L557.6 488.6ZM51.6 478.7L46.7 471.1L53.4 466.8L58.3 474.4L51.6 478.7ZM567.3 474.3L560.5 470.1L565.2 462.5L572 466.7L567.3 474.3ZM42.4 464.1L37.9 456.3L44.9 452.4L49.3 460.2L42.4 464.1ZM576.2 459.6L569.2 455.8L573.5 447.9L580.5 451.7L576.2 459.6ZM34.1 449L30.1 440.9L37.3 437.4L41.3 445.5L34.1 449ZM584.2 444.4L577 441L580.9 432.9L588.1 436.3L584.2 444.4ZM26.7 433.5L23.1 425.2L30.5 422.1L34 430.4L26.7 433.5ZM591.4 428.7L584 425.6L587.4 417.3L594.8 420.3L591.4 428.7ZM20.1 417.5L17 409L24.5 406.3L27.6 414.7L20.1 417.5ZM597.7 412.7L590.1 410.1L593 401.6L600.6 404.2L597.7 412.7ZM14.4 401.3L11.8 392.7L19.5 390.4L22.1 399L14.4 401.3ZM603.1 396.3L595.4 394.1L597.9 385.5L605.6 387.7L603.1 396.3ZM9.7 384.7L7.6 376L15.4 374.1L17.5 382.8L9.7 384.7ZM607.6 379.7L599.8 377.9L601.8 369.1L609.6 370.8L607.6 379.7ZM5.9 367.9L4.3 359L12.2 357.6L13.8 366.4L5.9 367.9ZM611.1 362.9L603.2 361.6L604.7 352.7L612.6 354L611.1 362.9ZM3 351L1.9 342L9.8 341L10.9 349.9L3 351ZM613.7 345.8L605.7 344.9L606.7 336L614.7 336.8L613.7 345.8ZM1.1 333.8L0.5 324.8L8.5 324.3L9.1 333.3L1.1 333.8ZM615.3 328.7L607.3 328.3L607.8 319.3L615.8 319.7L615.3 328.7ZM0.1 316.6L0 307.6L8 307.5L8.1 316.5L0.1 316.6ZM616 311.5H608V302.5H616V311.5ZM8.1 299.8L0.1 299.5L0.5 290.5L8.5 290.9L8.1 299.8ZM607.7 294.7L607.2 285.7L615.2 285.2L615.7 294.2L607.7 294.7ZM9 283L1 282.2L1.9 273.2L9.9 274L9 283ZM606.5 278L605.5 269.1L613.4 268.2L614.4 277.2L606.5 278ZM10.9 266.3L3 265.1L4.4 256.2L12.3 257.4L10.9 266.3ZM604.4 261.3L602.9 252.5L610.8 251.1L612.3 260L604.4 261.3ZM13.7 249.8L5.9 248.1L7.8 239.3L15.6 241L13.7 249.8ZM601.3 244.8L599.3 236L607.1 234.2L609.1 243L601.3 244.8ZM17.4 233.4L9.7 231.3L12.1 222.6L19.8 224.7L17.4 233.4ZM597.3 228.6L594.8 220L602.5 217.7L605 226.4L597.3 228.6ZM22 217.3L14.4 214.8L17.3 206.3L24.9 208.8L22 217.3ZM592.4 212.5L589.4 204L596.9 201.3L599.9 209.8L592.4 212.5ZM27.5 201.5L20.1 198.6L23.4 190.2L30.8 193.2L27.5 201.5ZM586.6 196.8L583.2 188.5L590.6 185.4L594.1 193.7L586.6 196.8ZM33.9 186L26.6 182.6L30.4 174.4L37.7 177.8L33.9 186ZM580 181.4L576.1 173.3L583.3 169.8L587.2 177.9L580 181.4ZM41.2 170.8L34.1 167L38.3 159L45.3 162.8L41.2 170.8ZM572.5 166.4L568.1 158.5L575.1 154.6L579.5 162.5L572.5 166.4ZM49.3 156.1L42.5 152L47.2 144.3L54 148.5L49.3 156.1ZM564.2 151.8L559.4 144.2L566.2 139.9L571 147.5L564.2 151.8ZM58.1 141.9L51.5 137.4L56.6 130L63.2 134.5L58.1 141.9ZM555 137.7L549.8 130.4L556.3 125.8L561.5 133.1L555 137.7ZM67.8 128.2L61.5 123.3L67 116.2L73.3 121.1L67.8 128.2ZM545.1 124.2L539.5 117.2L545.7 112.2L551.3 119.2L545.1 124.2ZM78.2 115.1L72.1 109.9L78 103.1L84 108.3L78.2 115.1ZM534.5 111.2L528.5 104.5L534.5 99.2L540.5 105.9L534.5 111.2ZM89.4 102.5L83.6 97L89.9 90.5L95.6 96.1L89.4 102.5ZM523.1 98.9L516.8 92.6L522.4 86.9L528.8 93.3L523.1 98.9ZM101.2 90.6L95.8 84.7L102.4 78.6L107.8 84.5L101.2 90.6ZM511.1 87.2L504.4 81.2L509.7 75.2L516.4 81.2L511.1 87.2ZM113.7 79.4L108.6 73.2L115.5 67.5L120.6 73.7L113.7 79.4ZM498.4 76.2L491.4 70.6L496.4 64.3L503.4 69.9L498.4 76.2ZM126.8 68.9L122.1 62.5L129.4 57.2L134.1 63.7L126.8 68.9ZM485.2 65.9L477.9 60.7L482.5 54.2L489.9 59.4L485.2 65.9ZM140.4 59.1L136 52.4L143.6 47.5L147.9 54.2L140.4 59.1ZM471.4 56.4L463.8 51.6L468 44.8L475.6 49.6L471.4 56.4ZM154.6 50.2L150.6 43.3L158.4 38.8L162.4 45.7L154.6 50.2ZM457 47.6L449.1 43.3L453 36.3L460.9 40.7L457 47.6ZM169.2 42L165.6 34.9L173.7 30.8L177.3 38L169.2 42ZM442.3 39.7L434.2 35.8L437.7 28.6L445.8 32.5L442.3 39.7ZM184.3 34.7L181.1 27.4L189.4 23.8L192.6 31.1L184.3 34.7ZM427.1 32.6L418.8 29.2L421.8 21.8L430.1 25.2L427.1 32.6ZM199.8 28.2L197 20.7L205.5 17.6L208.3 25.1L199.8 28.2ZM411.5 26.4L403 23.4L405.6 15.8L414.1 18.8L411.5 26.4ZM215.6 22.6L213.2 15L221.8 12.4L224.1 20.1L215.6 22.6ZM395.6 21L387 18.5L389.2 10.8L397.9 13.3L395.6 21ZM231.7 17.8L229.8 9.99999L238.6 7.79999L240.5 15.6L231.7 17.8ZM379.4 16.6L370.6 14.6L372.4 6.79999L381.2 8.79999L379.4 16.6ZM248 14L246.5 6.09999L255.4 4.39999L256.9 12.3L248 14ZM363 13.1L354.1 11.6L355.4 3.69999L364.3 5.19999L363 13.1ZM264.6 11.1L263.5 3.19999L272.4 1.99999L273.4 9.89999L264.6 11.1ZM346.4 10.4L337.5 9.39999L338.4 1.49999L347.4 2.49999L346.4 10.4ZM281.2 9.19999L280.6 1.19999L289.6 0.499994L290.2 8.49999L281.2 9.19999ZM329.7 8.79999L320.7 8.29999L321.1 0.299994L330.1 0.799994L329.7 8.79999ZM298 8.09999L297.8 0.0999939L306.8 -0.100006H313V7.89999H305.6L298 8.09999Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_1677_65)">
                        <path className='animline' d="M308 612C475.895 612 612 475.895 612 308C612 140.105 475.895 4 308 4C140.105 4 4 140.105 4 308C4 475.895 140.105 612 308 612Z" stroke="url(#paint0_linear_1677_65)" strokeWidth="10" strokeLinecap="square"/>
                    </g>
                </g>
                <defs>
                    <linearGradient id="paint0_linear_1677_65" x1="29.3968" y1="-21.4463" x2="582.456" y2="632.543" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF0036"/>
                        <stop offset="1" stopColor="#9C1A36"/>
                    </linearGradient>
                    <clipPath id="clip0_1677_65">
                        <rect width="616" height="616" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}

export default RoundLineAnimation;