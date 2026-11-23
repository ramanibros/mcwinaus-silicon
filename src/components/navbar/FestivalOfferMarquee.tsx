import Link from 'next/link';

const offerItems = [
    'Festival Growth Offer — Save Up To 30%',
    '5-Page WordPress Website — $499',
    'Social Media Package — $179',
    'Limited Time Only — Claim Now',
];

const OfferGroup = ({hidden = false}: {hidden?: boolean}) => (
    <span className="festival-offer-marquee__group" aria-hidden={hidden || undefined}>
        {offerItems.map((item) => (
            <span className="festival-offer-marquee__item" key={item}>
                <span className="festival-offer-marquee__sparkle" aria-hidden="true">✦</span>
                {item}
            </span>
        ))}
    </span>
);

const FestivalOfferMarquee = () => (
    <div className="festival-offer-marquee">
        <Link
            href="/festival-offer"
            className="festival-offer-marquee__link"
            aria-label="View the Festival Growth Offer and save up to 30 percent"
        >
            <span className="festival-offer-marquee__track">
                <OfferGroup/>
                <OfferGroup hidden/>
            </span>
        </Link>

        <style jsx global>{`
            .festival-offer-header {
                --festival-offer-marquee-height: 34px;
                padding-top: calc(var(--festival-offer-marquee-height) + .5rem) !important;
            }

            .festival-offer-marquee {
                position: absolute;
                inset: 0 0 auto;
                height: var(--festival-offer-marquee-height);
                overflow: hidden;
                background: linear-gradient(90deg, #5b21b6 0%, #7c3aed 48%, #db2777 100%);
                border-bottom: 1px solid rgba(255, 255, 255, .22);
                color: #fff;
                z-index: 1;
            }

            .festival-offer-marquee__link {
                display: flex;
                align-items: center;
                height: 100%;
                color: inherit;
                text-decoration: none;
                white-space: nowrap;
            }

            .festival-offer-marquee__track {
                display: flex;
                width: max-content;
                animation: festival-offer-scroll 28s linear infinite;
                will-change: transform;
            }

            .festival-offer-marquee__link:hover .festival-offer-marquee__track,
            .festival-offer-marquee__link:focus-visible .festival-offer-marquee__track {
                animation-play-state: paused;
            }

            .festival-offer-marquee__link:focus-visible {
                outline: 2px solid #fff;
                outline-offset: -3px;
            }

            .festival-offer-marquee__group {
                display: flex;
                align-items: center;
                flex-shrink: 0;
            }

            .festival-offer-marquee__item {
                display: inline-flex;
                align-items: center;
                gap: .55rem;
                padding-right: 2.75rem;
                font-size: .78rem;
                font-weight: 700;
                letter-spacing: .035em;
                line-height: 1;
                text-transform: uppercase;
            }

            .festival-offer-marquee__sparkle {
                color: #fde68a;
                font-size: .8rem;
            }

            @keyframes festival-offer-scroll {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
            }

            @media (prefers-reduced-motion: reduce) {
                .festival-offer-marquee__track {
                    animation: none;
                }

                .festival-offer-marquee__group[aria-hidden='true'] {
                    display: none;
                }
            }
        `}</style>
    </div>
);

export default FestivalOfferMarquee;
