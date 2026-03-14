'use client';
import React, {useEffect, useRef, useState, useTransition} from 'react';
import Link from 'next/link';
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
                const res = await fetch('https://www.mcwinitech.com.au/mailer/sendMail.php', {
                    method: 'POST',
                    body: formData,
                });

                const data = await res.json();

                if (data.success) {
                    setStatus('success');
                    formRef.current?.reset();
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
                            Thank you
                        </li>
                    </ol>
                </nav>

                <Row className="pt-md-2 pt-lg-12 pb-2 pb-md-12">
                    <Col xxl={12} xl={12} lg={12} className="pt-3 mt-3" style={{textAlign: "center"}}>
                        <h1 ref={letsChatTextRef} className="display-1 text-gradient-primary pb-sm-2 pb-md-3 mb-3">
                            Thank You!
                        </h1>
                        <p>Your message has been successfully submitted. Our team will review it and get back to you as soon as possible.</p>
                        <div className="nav d-block lead pt-lg-5" style={{textAlign: "center"}}>
                            <Link
                                href="mailto:hello@mcwinitech.com.au"
                                className="fw-normal text-decoration-underline p-0 mb-4"
                            >
                                hello@mcwinitech.com.au
                            </Link>
                            <div className="text-nav">0420 922 931</div>
                        </div>
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