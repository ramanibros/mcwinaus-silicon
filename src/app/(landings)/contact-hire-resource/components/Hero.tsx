'use client';
import React, {useEffect, useRef, useState, useTransition} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import contacts from '@/assets/img/contacts/bg.svg';
import {Col, Container, Row} from 'react-bootstrap';
import IconifyIcon from '@/components/IconifyIcon';
import gsap from 'gsap';
import {SplitText} from 'gsap/SplitText';

// Register SplitText plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(SplitText);
}

const Hero = () => {
    const router = useRouter();
    const readyTextRef = useRef(null);
    const letsChatTextRef = useRef(null);

    const formRef = useRef<HTMLFormElement | null>(null);
    const [isPending, startTransition] = useTransition();
    const [status, setStatus] = useState<string | null>(null);


    // ✅ SUBMIT HANDLER
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus(null);

        const formData = new FormData(e.currentTarget);

        startTransition(async () => {
            try {
                const res = await fetch('https://www.mcwinitech.com.au/mailer/hireResourceSendMail.php', {
                    method: 'POST',
                    body: formData,
                });

                const data = await res.json();

                if (data.success) {
                    setStatus('success');
                    formRef.current?.reset();
                    // Redirect to thank-you page after successful submission
                    router.push('/thank-you?contact-hire-resource');
                } else {
                    setStatus('error');
                }
            } catch (err) {
                setStatus('error');
            }
        });
    };


    useEffect(() => {
        // Split text ONLY for "Ready to grow your Perth business?"
        const splitReadyText = new SplitText(readyTextRef.current, {
            type: 'words,chars',
            wordsClass: 'word',
            charsClass: 'char'
        });

        // Create a timeline for sequential animations
        const tl = gsap.timeline({
            defaults: {ease: "power3.out"}
        });

        // Animate "Ready to grow your Perth business?" text - character by character
        tl.fromTo(splitReadyText.chars,
            {
                opacity: 0,
                y: 30,
                rotationX: -90,
                scale: 0.5
            },
            {
                opacity: 1,
                y: 0,
                rotationX: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.03,
                delay: 0.5
            }
        );

        // Animate "Let's chat!" text - simple animation (not split text)
        tl.fromTo(letsChatTextRef.current,
            {
                opacity: 0,
                y: 60,
                scale: 1.5
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "back.out(1.7)"
            },
            "-=0.3"
        );

        // Add color transition to "Let's chat!" text
        tl.to(letsChatTextRef.current,
            {
                color: '#4f46e5',
                duration: 0.5,
                ease: "power2.inOut"
            },
            "-=0.2"
        );

        // Return to gradient
        tl.to(letsChatTextRef.current,
            {
                color: '',
                duration: 0.8,
                ease: "power2.inOut"
            }
        );

        // Cleanup function to revert split text
        return () => {
            splitReadyText.revert();
        };
    }, []);

    return (
        <section
            className="bg-size-cover bg-position-bottom-center bg-repeat-0 py-5"
            style={{backgroundImage: `url(${contacts.src})`}}
        >
            <Container className="pt-5 pb-lg-4 pb-xl-5">
                <nav className="pt-lg-4" aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                            <Link href="/" className="d-flex align-items-center">
                                <IconifyIcon icon="bx:home-alt" className="fs-lg me-1"/> Home
                            </Link>
                        </li>
                        <span className="d-flex align-items-center mx-2">
              <IconifyIcon icon="bx:chevrons-right"/>
            </span>
                        <li className="breadcrumb-item active" aria-current="page">
                            Contact Us
                        </li>
                    </ol>
                </nav>

                <Row className="pt-md-2 pt-lg-5 pb-2 pb-md-4">
                    <Col xxl={4} xl={5} lg={6} className="pt-3 mt-3">
                        <h1 ref={readyTextRef} className="h3 mb-2">
                            Ready to hire top-tier talent?
                        </h1>
                        <h2 ref={letsChatTextRef} className="display-1 text-gradient-primary pb-sm-2 pb-md-3 mb-3">
                            Let&apos;s chat!
                        </h2>
                        <div className="nav d-block lead pt-lg-5">
                            <Link
                                href="mailto:sales@mcwinitech.com.au"
                                className="nav-link fw-normal text-decoration-underline p-0 mb-4"
                            >
                                sales@mcwinitech.com.au
                            </Link>
                            <div className="text-nav">0420 922 931</div>
                        </div>
                    </Col>

                    <Col lg={6} className="offset-xl-1 offset-xxl-2 pt-3 pt-md-4 pt-lg-3 mt-3">
                        <form className="needs-validation" noValidate onSubmit={handleSubmit} ref={formRef}> {/*action={handleSubmit} ref={formRef}*/}
                                                    <Row className="g-4">
                                                        <Col sm={6}>
                                                            <label htmlFor="fn" className="form-label fs-base">
                                                                Full name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-lg"
                                                                id="fn"
                                                                name="name"
                                                                placeholder="Enter your full name"
                                                                required
                                                            />
                                                            <div className="invalid-feedback">Please enter your full name!</div>
                                                        </Col>

                                                        <Col sm={6}>
                                                            <label htmlFor="email" className="form-label fs-base">
                                                                Email
                                                            </label>
                                                            <input
                                                                type="email"
                                                                className="form-control form-control-lg"
                                                                id="email"
                                                                name="email"
                                                                placeholder="Enter your email"
                                                                required
                                                            />
                                                            <div className="invalid-feedback">Please provide a valid email address!</div>
                                                        </Col>

                                                        <Col sm={6}>
                                                            <label htmlFor="fn" className="form-label fs-base">
                                                                Phone
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-lg"
                                                                id="fn"
                                                                name="phone"
                                                                placeholder="Enter your phone"
                                                                required
                                                            />
                                                            <div className="invalid-feedback">Please enter phone!</div>
                                                        </Col>

                                                        <Col sm={6}>
                                                            <label htmlFor="budget" className="form-label fs-base">
                                                                What's your budget?
                                                            </label>
                                                            <select
                                                                className="form-control form-control-lg"
                                                                id="budget"
                                                                name="budget"
                                                                required
                                                            >
                                                                <option value="$500-$1,000">$500 - $1,000</option>
                                                                <option value="$1,000-$2,500">$1,000 - $2,500</option>
                                                                <option value="$2,500-$5,000">$2,500 - $5,000</option>
                                                                <option value="$5,000-$10,000">$5,000 - $10,000</option>
                                                                <option value="$10,000-$15,000">$10,000 - $15,000</option>
                                                                <option value="$15,000+">$15,000+</option>
                                                            </select>
                                                            <div className="invalid-feedback">Please select your budget!</div>
                                                        </Col>

                                                        <Col sm={12}>
                                                            <label htmlFor="fn" className="form-label fs-base">
                                                                How can we help you?
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-lg"
                                                                id="fn"
                                                                name="solutionNeeded"
                                                                placeholder="Enter service e.g. Software Solutions"
                                                                required
                                                            />
                                                            <div className="invalid-feedback">Please enter how we can help!</div>
                                                        </Col>

                                                        <Col sm={12}>
                                                            <label htmlFor="fn" className="form-label fs-base">
                                                                Your Website
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-lg"
                                                                id="fn"
                                                                name="website"
                                                                placeholder="Enter website url"
                                                                required
                                                            />
                                                            <div className="invalid-feedback">Please enter website!</div>
                                                        </Col>

                                                        <Col xs={12} className="pb-2">
                                                            <label htmlFor="message" className="form-label fs-base">
                                                                Project Details
                                                            </label>
                                                            <textarea
                                                                className="form-control form-control-lg"
                                                                id="message"
                                                                name="message"
                                                                placeholder="Enter your project details"
                                                                rows={3}
                                                                required
                                                            ></textarea>
                                                            <div className="invalid-feedback">Please provide a message!</div>
                                                        </Col>

                                                        <Col xs={12}>
                                                            <button
                                                                type="submit"
                                                                className="btn btn-lg btn-primary w-100 w-sm-auto d-flex align-items-center justify-content-center gap-2"
                                                            >
                                                                <span>{isPending ? "Submitting..." : "Contact Us"}</span>
                                                                {isPending ? (
                                                                    <span className="loader"/>
                                                                ) : (
                                                                    ""
                                                                )}
                                                            </button>
                                                        </Col>
                                                        {status === "success" && (
                                                            <p className="form-success">
                                                                Thank you! Your message has been sent successfully.
                                                            </p>
                                                        )}

                                                        {status === "error" && (
                                                            <p className="form-error">
                                                                Something went wrong. Please try again.
                                                            </p>
                                                        )}
                                                    </Row>
                                                </form>
                    </Col>
                </Row>
            </Container>

            <style jsx>{`
        /* Split text styling for Ready text */
        .char {
          display: inline-block;
          position: relative;
        }

        .word {
          display: inline-block;
          position: relative;
        }

        /* Gradient text styling for Let's chat! */
        .text-gradient-primary {
          background: linear-gradient(90deg, #4f46e5, #7c3aed);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
        }

        /* Form styling - no animations */
        .form-control {
          transition: none;
        }

        .btn {
          transition: none;
        }
      `}</style>
        </section>
    );
};

export default Hero;