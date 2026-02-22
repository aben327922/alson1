import Link from 'next/link';
import Image from 'next/image';

const Showcase = () => {
    return (
        <section className="project-showcase section">
            <div className="container">
                <header className="section-header">
                    <h2>Innovation & Project Showcase</h2>
                    <p>Discover how professionals and DIY enthusiasts use our tools creatively.</p>
                </header>

                <div className="projects-grid">
                    <div className="project-card">
                        <div className="relative aspect-video w-full overflow-hidden mb-4">
                            <Image src="/images/project/project1.jpg" alt="Project 1" fill style={{ objectFit: 'cover' }} className="project-image" />
                        </div>
                        <h3 className="project-title">Project Name 1</h3>
                        <p className="project-desc">A short description of the project showcasing tool usage.</p>
                        <Link href="/contact" className="project-link">Inquire More</Link>
                    </div>

                    <div className="project-card">
                        <div className="relative aspect-video w-full overflow-hidden mb-4">
                            <Image src="/images/project/diy.jpeg" alt="Project 2" fill style={{ objectFit: 'cover' }} className="project-image" />
                        </div>
                        <h3 className="project-title">Project Name 2</h3>
                        <p className="project-desc">Highlighting a creative DIY solution using our tools.</p>
                        <Link href="/contact" className="project-link">Inquire More</Link>
                    </div>

                    <div className="project-card">
                        <div className="relative aspect-video w-full overflow-hidden mb-4">
                            <Image src="/images/project/project3.jpg" alt="Project 3" fill style={{ objectFit: 'cover' }} className="project-image" />
                        </div>
                        <h3 className="project-title">Project Name 3</h3>
                        <p className="project-desc">Professional craftsmanship featuring our premium tools.</p>
                        <Link href="/contact" className="project-link">Inquire More</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
