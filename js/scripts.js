<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>TWS Portfolio</title>
    <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
    <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css?family=Poppins:400,600&display=swap" rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />

    <style>
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #fffaf9;
            color: #444;
        }

        /* Navbar */
        #mainNav {
            background: linear-gradient(90deg, #fbc2eb, #a6c1ee);
            background-size: 200% 200%;
            animation: gradientFlow 8s ease infinite;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
        }
        #mainNav .navbar-brand {
            font-weight: 600;
            color: #fff;
        }
        #mainNav .nav-link {
            color: white !important;
            font-weight: 500;
            transition: all 0.3s;
        }
        #mainNav .nav-link:hover {
            color: #ffdde1 !important;
        }

        /* Masthead */
        .masthead {
            background: linear-gradient(135deg, #fff1eb 0%, #ace0f9 100%);
            padding-top: 8rem;
            padding-bottom: 8rem;
            text-align: center;
        }
        .masthead-avatar {
            width: 180px;
            border-radius: 50%;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
            border: 4px solid white;
        }
        .masthead-heading {
            font-size: 2.5rem;
            font-weight: 700;
            color: #4b4453;
        }
        .masthead-subheading {
            color: #6c5b7b;
        }

        /* Portfolio */
        .portfolio-item {
            border-radius: 15px;
            overflow: hidden;
            background: white;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .portfolio-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.12);
        }

        /* About Section */
        #about {
            background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
            color: #fff;
            padding: 5rem 0;
        }
        #about h2 {
            font-weight: 700;
        }

        /* Buttons */
        .btn-primary {
            background: linear-gradient(135deg, #fbc2eb, #a6c1ee);
            border: none;
            border-radius: 30px;
            padding: 0.6rem 1.5rem;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        .btn-primary:hover {
            background: linear-gradient(135deg, #ffdde1, #ee9ca7);
            transform: translateY(-3px);
            box-shadow: 0px 6px 15px rgba(0,0,0,0.15);
        }

        /* Footer */
        footer {
            background: #fff0f5;
            padding: 2rem 0;
            color: #666;
        }
        .btn-social {
            border-radius: 50%;
            background: white;
            border: 2px solid #fbc2eb;
            transition: all 0.3s ease;
        }
        .btn-social:hover {
            background: linear-gradient(135deg, #fbc2eb, #a6c1ee);
            color: white;
            border-color: transparent;
        }

        /* Gradient Animation */
        @keyframes gradientFlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
    </style>
</head>
<body>

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand" href="#page-top">✨ TWS Portfolio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarResponsive" aria-controls="navbarResponsive"
                aria-expanded="false" aria-label="Toggle navigation">
                Menu <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Masthead -->
    <header class="masthead" id="page-top">
        <img class="masthead-avatar mb-4" src="assets/avatar.png" alt="..." />
        <h1 class="masthead-heading mb-2">Welcome to My Portfolio</h1>
        <p class="masthead-subheading font-weight-light">Soft Colors • Clean Design • Beautiful Experience</p>
    </header>

    <!-- About Section -->
    <section id="about">
        <div class="container text-center">
            <h2>About Me</h2>
            <p class="lead">I’m passionate about creating modern, clean, and user-friendly designs that inspire and connect people.</p>
            <a class="btn btn-primary mt-3" href="#portfolio">View My Work</a>
        </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">Portfolio</h2>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="portfolio-item p-3">
                        <img src="assets/project1.jpg" class="img-fluid" alt="Project 1" />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="portfolio-item p-3">
                        <img src="assets/project2.jpg" class="img-fluid" alt="Project 2" />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="portfolio-item p-3">
                        <img src="assets/project3.jpg" class="img-fluid" alt="Project 3" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="text-center">
        <div class="container">
            <p>© 2025 TWS Portfolio. All Rights Reserved.</p>
            <div class="d-flex justify-content-center gap-3">
                <a class="btn btn-social" href="#"><i class="fab fa-twitter"></i></a>
                <a class="btn btn-social" href="#"><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-social" href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>

