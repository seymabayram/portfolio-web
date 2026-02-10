
const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-light-effects">
                <div className="light-orb cream-orb"></div>
                <div className="light-orb green-orb"></div>
            </div>
            <div className="hero-content">
                {/* Left Column: Text */}
                <div className="hero-text-col">
                    <h1>Merhaba, Ben Şeyma</h1>
                    <div className="hero-subtitle-block">
                        {/* h3 Şeyma Bayram removed as it is in H1 now */}
                        <h4>Yazılım Mühendisi</h4>
                        <p>
                            Temiz mimari ve yüksek performansa odaklanarak sağlam, ölçeklenebilir uygulamalar geliştiriyorum.
                            Portfolyom, karmaşık problemleri kod aracılığıyla çözme yolculuğumu yansıtıyor.
                        </p>
                        <div className="code-snippet-box">
                            <span className="keyword">const</span> <span className="variable">passion</span> <span className="operator">=</span> <span className="string">"coding"</span><span className="cursor">|</span>
                        </div>
                    </div>

                    {/* Modern Teknolojiler and Presenter Info removed */}
                </div>

                {/* Right Column: Image Collage */}
                <div className="hero-image-collage">
                    {/* 1. New Image 1 - Vertical/Tall */}
                    <div className="image-wrapper tall">
                        <img src="/resim1.png" alt="Featured Work 1" className="collage-item" />
                    </div>

                    {/* 2. New Image 2 - Normal */}
                    <div className="image-wrapper">
                        <img src="/resim2.png" alt="Featured Work 2" className="collage-item" />
                    </div>

                    {/* 3. Detail Shot (Orange Carnation) */}
                    <div className="image-wrapper">
                        <img src="/turuncukaranfil.png" alt="Orange Carnation" className="collage-item" />
                    </div>

                    {/* 4. Texture (Colorful Flower) */}
                    <div className="image-wrapper">
                        <img src="/renklicicek.png" alt="Colorful Flower" className="collage-item" />
                    </div>

                    {/* 5. Handwritten Note / Quote Card */}
                    <div className="image-wrapper note-wrapper">
                        <div className="collage-note">
                            <p>"Önce problemi çöz, sonra kodu yaz."</p>
                            <span className="scrawl">~ dev life</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <div className="arrow-scroll"></div>
            </div>
        </section>
    );
};

export default Hero;
