:root {
    --primary: #1a1a1a;
    --secondary: #f5f5f5;
    --accent: #3498db;
    --text: #333;
    --light-text: #777;
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.6;
    color: var(--text);
    background-color: var(--secondary);
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header */
header {
    background-color: var(--primary);
    color: var(--secondary);
    padding: 15px 0;
    position: fixed;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1px;
}

.logo-img {
    height: 40px;
    margin-right: 10px;
}

.logo-dot {
    color: var(--accent);
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin-left: 30px;
}

nav ul li a {
    color: var(--secondary);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition);
    position: relative;
}

nav ul li a:hover {
    color: var(--accent);
}

nav ul li a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background: var(--accent);
    bottom: -5px;
    left: 0;
    transition: var(--transition);
}

nav ul li a:hover::after {
    width: 100%;
}

.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    color: var(--secondary);
    font-size: 24px;
    cursor: pointer;
}

/* Hero Section */
.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('./images/peakpx.jpg') no-repeat center center/cover;
    color: var(--secondary);
    text-align: center;
    padding-top: 80px;
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
}

.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    line-height: 1.2;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    color: rgba(255, 255, 255, 0.8);
}

.btn {
    display: inline-block;
    background: var(--accent);
    color: var(--secondary);
    padding: 12px 30px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
    border: 2px solid var(--accent);
}

.btn:hover {
    background: transparent;
    color: var(--accent);
}

.btn-outline {
    background: transparent;
    color: var(--accent);
    margin-left: 15px;
}

.btn-outline:hover {
    background: var(--accent);
    color: var(--secondary);
}

/* About Section */
.section {
    padding: 100px 0;
}

.section-title {
    text-align: center;
    margin-bottom: 60px;
}

.section-title h2 {
    font-size: 2.5rem;
    position: relative;
    display: inline-block;
    padding-bottom: 15px;
}

.section-title h2::after {
    content: '';
    position: absolute;
    width: 70px;
    height: 3px;
    background: var(--accent);
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}

.about-content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.about-text {
    flex: 1;
    min-width: 300px;
    padding-right: 40px;
}

.about-text h3 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: var(--accent);
}

.about-text p {
    margin-bottom: 20px;
    color: var(--light-text);
}

.about-details {
    margin-top: 30px;
}

.detail-item {
    margin-bottom: 25px;
}

.detail-item h4 {
    color: var(--accent);
    margin-bottom: 8px;
    font-size: 1.1rem;
}

.detail-item p {
    margin-bottom: 10px;
    line-height: 1.5;
}

.about-image {
    flex: 1;
    min-width: 300px;
    text-align: center;
}

.about-image img {
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.skills-box {
    background: rgba(52, 152, 219, 0.1);
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
    border-left: 3px solid var(--accent);
}

.skills-box h4 {
    color: var(--accent);
    margin-bottom: 15px;
}

.skills-list {
    list-style-type: none;
    margin-top: 10px;
}

.skills-list li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 8px;
}

.skills-list li::before {
    content: "•";
    color: var(--accent);
    position: absolute;
    left: 0;
    font-size: 1.2rem;
    line-height: 1;
}

/* Designs Section */
.designs {
    background-color: #f9f9f9;
}

.designs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.design-card {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    aspect-ratio: 1/1;
}

.design-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.design-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    padding: 20px;
    color: white;
    transform: translateY(100%);
    transition: var(--transition);
}

.design-card:hover .design-overlay {
    transform: translateY(0);
}

.design-card:hover img {
    transform: scale(1.05);
}

/* Platforms Section */
.platforms {
    background-color: var(--primary);
    color: var(--secondary);
}

.platforms .section-title h2::after {
    background: var(--secondary);
}

.platform-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.platform-card {
    background: rgba(255, 255, 255, 0.05);
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    transition: var(--transition);
}

.platform-card:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.1);
}

.platform-icon {
    font-size: 3rem;
    margin-bottom: 20px;
    color: var(--accent);
}

.platform-card h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
}

.platform-card p {
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 20px;
}

.platform-link {
    display: inline-block;
    color: var(--secondary);
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
}

.platform-link:hover {
    color: var(--accent);
}

/* Contact Section */
.contact-options {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 40px;
}

.contact-btn {
    display: inline-flex;
    align-items: center;
    padding: 15px 30px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
    border: 2px solid;
    color: white;
}

.contact-btn i {
    margin-right: 10px;
    font-size: 1.2rem;
}

.whatsapp-btn {
    background: #25D366;
    border-color: #25D366;
}

.email-btn {
    background: #3498db;
    border-color: #3498db;
}

.phone-btn {
    background: #5c6bc0;
    border-color: #5c6bc0;
}

.contact-btn:hover {
    background: transparent;
    color: inherit;
}

/* Footer */
footer {
    background-color: var(--primary);
    color: var(--secondary);
    padding: 50px 0 30px;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
}

.footer-logo {
    display: flex;
    flex-direction: column;
}

.footer-logo-img {
    width: 150px;
    margin-bottom: 15px;
}

.footer-logo p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
}

.footer-links h4, 
.footer-contact h4 {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: var(--accent);
}

.footer-links ul {
    list-style: none;
}

.footer-links li {
    margin-bottom: 10px;
}

.footer-links a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: var(--transition);
}

.footer-links a:hover {
    color: var(--accent);
    padding-left: 5px;
}

.footer-contact p {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    color: rgba(255, 255, 255, 0.7);
}

.footer-contact i {
    margin-right: 10px;
    color: var(--accent);
    width: 20px;
}

.copyright {
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Mobile Styles */
@media (max-width: 768px) {
    .header-container {
        padding: 0 20px;
    }

    nav {
        position: fixed;
        top: 80px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 80px);
        background: var(--primary);
        transition: var(--transition);
        z-index: 999;
    }

    nav.active {
        left: 0;
    }

    nav ul {
        flex-direction: column;
        padding: 30px;
    }

    nav ul li {
        margin: 15px 0;
    }

    .mobile-menu-btn {
        display: block;
    }

    .hero h1 {
        font-size: 2.5rem;
    }

    .hero p {
        font-size: 1rem;
    }

    .hero-content .fade-in.delay-2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
    
    .btn {
        display: inline-block;
        margin: 0;
        width: 100%;
        max-width: 250px;
        text-align: center;
    }

    .btn-outline {
        margin-left: 0;
    }


    .about-content {
        flex-direction: column;
    }

    .about-text {
        padding-right: 0;
        margin-bottom: 40px;
    }

    .section {
        padding: 60px 0;
    }

    .section-title h2 {
        font-size: 2rem;
    }

    .contact-options {
        flex-direction: column;
        align-items: center;
    }
    
    .contact-btn {
        width: 100%;
        max-width: 250px;
        text-align: center;
        justify-content: center;
    }

    .footer-content {
        grid-template-columns: 1fr;
    }

    nav.active {
        left: 0;
        display: block;
    }
    
    nav ul {
        height: 100%;
        justify-content: center;
    }
    
    nav ul li a {
        font-size: 1.2rem;
        padding: 10px 0;
        display: block;
    }
    
    body.nav-open {
        overflow: hidden;
    }

}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in {
    animation: fadeIn 1s ease forwards;
}

.delay-1 {
    animation-delay: 0.2s;
}

.delay-2 {
    animation-delay: 0.4s;
}

.delay-3 {
    animation-delay: 0.6s;
}

.delay-4 {
    animation-delay: 0.8s;
}
