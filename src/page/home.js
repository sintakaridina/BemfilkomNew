import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
          
        <header className="header creative position-relative bg-img height-100-vh valign" data-scroll-index="0"
        data-overlay-dark="6" data-stellar-background-ratio="0.5">


        {/* Start Navbar */}
        <nav className="navbar navbar-expand-lg border-none nav-transparent">
            <div className="container padding-15px-lr md-padding-15px-lr sm-padding-15px-all">

                {/* start logo */}
                <a className="logo active" href="javascript:void(0);" data-scroll-nav="0">
                    <img src="/img/logobem.png" alt="BEM FILKOM UB 2019" title="BEM FILKOM UB 2019"/>
                </a>
                {/* end Logo */}

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent"
                    aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-bar"><i className="fas fa-bars"></i></span>
                </button>

                {/* navbar links */}
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="javascript:void(0);" data-scroll-nav="0">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);" data-scroll-nav="1">Profile</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);" data-scroll-nav="2">Arah Gerak</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);" data-scroll-nav="3">Informasi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);" data-scroll-nav="4">Struktur</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);" data-scroll-nav="5">Contact</a>
                        </li>
                    </ul>
                </div>
                {/* end navbar links */}
            </div>
        </nav>
        {/* End Navbar  */}

        {/* Start Banner Container */}
        <div className="container">
            <div className="row">
                <div className="col-12 text-center caption">
                    <h1 className="banner-headline clip no-margin">
                        <img src="img/logobem.png"/>
                    </h1>
                    <div className="social-links xs-margin-20px-top">
                        <a href="https://www.facebook.com/pg/bemfilkombrawijaya/"><i className="fab fa-facebook-f text-light-gray"></i></a>
                        <a href="https://twitter.com/bemfilkomub"><i className="fab fa-twitter text-light-gray"></i></a>
                        <a href="https://www.youtube.com/channel/UCLAmrHwP0hvOjPGHacMThZQ"><i className="fab fa-youtube text-light-gray"></i></a>
                    </div>
                </div>
            </div>
        </div>
        {/* End Banner Container */}

        <div className="svg">
            <svg fill="#fff" version="1.1" width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none">
                <path d="M0 30 L50 90 L100 30 V100 H0"></path>
            </svg>
        </div>

    </header>
    {/* End Header */}

    {/* Start About Section*/}
    <section data-scroll-index="1" className="padding-100px-top padding-130px-bottom xs-padding-80px-top xs-padding-100px-bottom">
        <div className="container">
            <div className="row">
                <div className="col-12 center-col margin-70px-bottom sm-margin-40px-bottom xs-margin-30px-bottom text-center">
                    <h2 className="font-size34 md-font-size30 sm-font-size26 xs-font-size24 font-weight-700 section-title style2">About
                        Us</h2>
                </div>
            </div>
            <div className="row">
                {/* start about me section*/}
                <div className="col-md-5 col-sm-12 sm-margin-30px-bottom">
                    {/* about-box start */}
                    <div className="about-box">
                        <div className="porfile-photo">
                            <img src="/img/cropped-saja.jpg" alt=""/>
                        </div>
                    </div>
                    {/* about-box end */}
                </div>
                {/* end about me section*/}

                {/* start skill section*/}
                <div className="col-md-7 col-sm-12 padding-70px-left md-padding-50px-left xs-padding-15px-left">
                    <div className="padding-20px-left sm-no-padding">
                        <h4 className="margin-5px-bottom alt-font font-size26 md-font-size24 xs-font-size20">Visi</h4>
                        <p className="font-size15 xs-font-size14">Rajut Asa, Rangkai Karya, Gapai Cita</p>
                        <h4 className="margin-5px-bottom alt-font font-size26 md-font-size24 xs-font-size20">Misi</h4>
                        <div className="font-size15 xs-font-size14">
                            <ol>
                                <li>Berkolaborasi secara komprehensif demi terciptanya kreasi nyata bagi seluruh
                                    civitas akademika FILKOM</li>
                                <li>Melakukan pengembangan kemahasiswaan yang inovatif dan berkelanjutan</li>
                                <li>Optimalisasi pelayanan advokasi yang aktif, responsif, dan partisipatif</li>
                                <li>Inisiator pergerakan mahasiswa yang progresif, kritis, dan analitis</li>
                                <li>Membangun iklim internal yang harmonis dengan semangat kerja dan dedikasi yang
                                    tinggi</li>
                            </ol>
                        </div>

                    </div>
                </div>
                {/* end skill section*/}
            </div>
        </div>

        {/* <div className="svg gray">
            <svg fill="#f7f7f7" version="1.1" width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none">
                <path d="M0 30 L50 90 L100 30 V100 H0"></path>
            </svg>
        </div> */}

    </section>
    {/* End About Section*/}

    {/*  Start Services Section */}
    {/* <section className="services bg-light-gray padding-100px-top padding-130px-bottom xs-padding-80px-top xs-padding-100px-bottom"
        data-scroll-index="2">
        <div className="container">
            <div className="row">
                <div className="col-12 center-col margin-70px-bottom sm-margin-40px-bottom xs-margin-30px-bottom text-center">
                    <h4 className="font-weight-700 font-size32 md-font-size27 sm-font-size24 xs-font-size20 section-title style2">Arah Gerak</h4>
                </div>
            </div>
            <div className="row">

                <div className="col-lg-4 col-md-6">
                    <div className="text-center padding-40px-bottom sm-padding-30px-bottom xs-padding-20px-bottom">
                        <div className="display-inline-block margin-20px-bottom xs-margin-15px-bottom"><i className="icon icon-tools text-extra-dark-gray font-size36"></i></div>
                        <div className="alt-font text-extra-dark-gray margin-10px-bottom font-size18 xs-font-size16">Web
                            Development</div>
                        <p className="width-85 md-width-90 xs-width-100 center-col no-margin-bottom">This creative template
                            design provide ideal and variety of design services and solutions for website.</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="text-center padding-40px-bottom sm-padding-30px-bottom xs-padding-20px-bottom">
                        <div className="display-inline-block margin-20px-bottom xs-margin-15px-bottom"><i className="icon icon-gears text-extra-dark-gray font-size36"></i></div>
                        <div className="alt-font text-extra-dark-gray margin-10px-bottom font-size18 xs-font-size16">Web
                            Design</div>
                        <p className="width-85 md-width-90 xs-width-100 center-col no-margin-bottom">This creative template
                            design provide ideal and variety of design services and solutions for website.</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="text-center padding-40px-bottom sm-padding-30px-bottom xs-padding-20px-bottom">
                        <div className="display-inline-block margin-20px-bottom xs-margin-15px-bottom"><i className="icon icon-mobile text-extra-dark-gray font-size36"></i></div>
                        <div className="alt-font text-extra-dark-gray margin-10px-bottom font-size18 xs-font-size16">Social
                            Media</div>
                        <p className="width-85 md-width-90 xs-width-100 center-col no-margin-bottom">This creative template
                            design provide ideal and variety of design services and solutions for website.</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="text-center sm-padding-30px-bottom xs-padding-20px-bottom">
                        <div className="display-inline-block margin-20px-bottom xs-margin-15px-bottom"><i className="icon icon-layers text-extra-dark-gray font-size36"></i></div>
                        <div className="alt-font text-extra-dark-gray margin-10px-bottom font-size18 xs-font-size16">Photography</div>
                        <p className="width-85 md-width-90 xs-width-100 center-col no-margin-bottom">This creative template
                            design provide ideal and variety of design services and solutions for website.</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="text-center xs-padding-20px-bottom">
                        <div className="display-inline-block margin-20px-bottom xs-margin-15px-bottom"><i className="icon icon-presentation text-extra-dark-gray font-size36"></i></div>
                        <div className="alt-font text-extra-dark-gray margin-10px-bottom font-size18 xs-font-size16">Graphic
                            Design</div>
                        <p className="width-85 md-width-90 xs-width-100 center-col no-margin-bottom">This creative template
                            design provide ideal and variety of design services and solutions for website.</p>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="text-center">
                        <div className="display-inline-block margin-20px-bottom xs-margin-15px-bottom"><i className="icon icon-genius text-extra-dark-gray font-size36"></i></div>
                        <div className="alt-font text-extra-dark-gray margin-10px-bottom font-size18 xs-font-size16">Content
                            Writing</div>
                        <p className="width-85 md-width-90 xs-width-100 center-col no-margin-bottom">This creative template
                            design provide ideal and variety of design services and solutions for website.</p>
                    </div>
                </div>

            </div>
        </div>

        <div className="svg">
            <svg fill="#fff" version="1.1" width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none">
                <path d="M0 30 L50 90 L100 30 V100 H0"></path>
            </svg>
        </div>

    </section> */}
    {/* End Services Section */}

    {/* Start Portfolio Section */}
    <section class="blog bg-light-gray" data-scroll-index="5">
        <div class="container">
            <div class="row">
                <div class="col-12 center-col margin-70px-bottom sm-margin-40px-bottom xs-margin-30px-bottom text-center">
                    <h3 class="font-weight-700 font-size32 md-font-size27 sm-font-size24 xs-font-size20 section-title">Informasi</h3>
                </div>
            </div>
            <div class="row">
            
                {/* Start  blog */}
                <div class="col-lg-4 sm-margin-20px-bottom">
                    <div class="item text-center">
                        <div class="post-img">
                            <img src="/blog/1.jpg" alt=""/>
                        </div>
                        <div class="content">
                            <div class="tag alt-font font-weight-300">
                                <a href="blog.html">Advokesma | <span class="font-size12 display-inline-block">02 May 2018</span></a>
                            </div>
                            <h5 class="margin-15px-bottom"><a href="/#/Single">Beasiswa Care Center</a></h5>
                            <p>Beasiswa Karya Salemba Empat (KSE) Tahun Akademik 2019/2020 akan segera dibuka. Beasiswa ini berupa tunjangan belajar kepada mahasiswa program studi strata 1 (S1) yang telah menempuh pendidikan maksimal di semester kedua.⁣</p>
                            <a href="/#/Single" class="read-more">Read more</a>
                        </div>
                    </div>
                </div>
                {/* end blog */}
                {/* Start  blog */}
                <div class="col-lg-4 sm-margin-20px-bottom">
                    <div class="item text-center">
                        <div class="post-img">
                            <img src="/blog/2.jpg" alt=""/>
                        </div>
                        <div class="content">
                            <div class="tag alt-font font-weight-300">
                                <a href="blog.html">Advokesma | <span class="font-size12 display-inline-block">02 May 2018</span></a>
                            </div>
                            <h5 class="margin-15px-bottom"><a href="/#/Single">Beasiswa Care Center</a></h5>
                            <p>Beasiswa Karya Salemba Empat (KSE) Tahun Akademik 2019/2020 akan segera dibuka. Beasiswa ini berupa tunjangan belajar kepada mahasiswa program studi strata 1 (S1) yang telah menempuh pendidikan maksimal di semester kedua.⁣</p>
                            <a href="/#/Single" class="read-more">Read more</a>
                        </div>
                    </div>
                </div>
                {/* end blog */}
                {/* Start  blog */}
                <div class="col-lg-4 sm-margin-20px-bottom">
                    <div class="item text-center">
                        <div class="post-img">
                            <img src="/blog/2.jpg" alt=""/>
                        </div>
                        <div class="content">
                            <div class="tag alt-font font-weight-300">
                                <a href="blog.html">Advokesma | <span class="font-size12 display-inline-block">02 May 2018</span></a>
                            </div>
                            <h5 class="margin-15px-bottom"><a href="/#/Single">Beasiswa Care Center</a></h5>
                            <p>Beasiswa Karya Salemba Empat (KSE) Tahun Akademik 2019/2020 akan segera dibuka. Beasiswa ini berupa tunjangan belajar kepada mahasiswa program studi strata 1 (S1) yang telah menempuh pendidikan maksimal di semester kedua.⁣</p>
                            <a href="/#/Single" class="read-more">Read more</a>
                        </div>
                    </div>
                </div>
                {/* end blog */}
            </div>
        </div>
    </section>
    
            {/*  Start Services Section */}
    <section class="services bg-light-gray padding-100px-top padding-130px-bottom xs-padding-80px-top xs-padding-100px-bottom" data-scroll-index="2">
        <div class="container">
            <div class="row">
                <div class="col-12 center-col margin-70px-bottom sm-margin-40px-bottom xs-margin-30px-bottom text-center">
                    <h3 class="font-weight-700 font-size32 md-font-size27 sm-font-size24 xs-font-size20 section-title style2">Struktur</h3>
                </div>
            </div>
            <div class="row">
                {/* start services item */}
                <div class="col-lg-4 col-md-6">
                    <div class="text-center padding-40px-bottom sm-padding-30px-bottom xs-padding-20px-bottom">
                        <div class="display-inline-block margin-20px-bottom xs-margin-15px-bottom"><i class="icon icon-key text-extra-dark-gray font-size36"></i></div>
                        <div class="alt-font text-extra-dark-gray margin-10px-bottom font-size18 xs-font-size16">PJMO</div>
                        <p class="width-85 md-width-90 xs-width-100 center-col no-margin-bottom">Memonitoring, mengevaluasi, meningkatkan kapasitas dan memelihara soliditas sumber daya
                            manusia ,serta memberikan rekomendasi kebijakan.</p>
                    </div>
                </div>
                {/* end services item */}

                {/* start services item */}
                <div class="col-lg-4 col-md-6">
                    <div class="text-center padding-40px-bottom sm-padding-30px-bottom xs-padding-20px-bottom">
                        <div class="display-inline-block margin-20px-bottom xs-margin-15px-bottom"><i class="icon icon-profile-male text-extra-dark-gray font-size36"></i></div>
                        <div class="alt-font text-extra-dark-gray margin-10px-bottom font-size18 xs-font-size16">Presiden</div>
                        <p class="width-85 md-width-90 xs-width-100 center-col no-margin-bottom">Sebagai pengambil kebijakan tertinggi dalam BEM FILKOM UB yang menjalankan fungsi
                            kepemimpinan umum</p>
                    </div>
                </div>
                {/* end services item */}

                {/* start services item */}
                <div class="col-lg-4 col-md-6">
                    <div class="text-center padding-40px-bottom sm-padding-30px-bottom xs-padding-20px-bottom">
                        <div class="display-inline-block margin-20px-bottom xs-margin-15px-bottom"><i class="icon icon-profile-male text-extra-dark-gray font-size36"></i></div>
                        <div class="alt-font text-extra-dark-gray margin-10px-bottom font-size18 xs-font-size16">Wakil Presiden</div>
                        <p class="width-85 md-width-90 xs-width-100 center-col no-margin-bottom">Menggantikan fungsi dan peran Presiden BEM jika berhalangan dan menjalankan fungsi
                            pengawasan bersama Presiden baik secara langsung maupun struktural dan fungsional</p>
                    </div>
                </div>
                {/* end services item */}

                {/* start services item */}
                <div class="col-lg-4 col-md-6">
                    <div class="text-center sm-padding-30px-bottom xs-padding-20px-bottom">
                        <div class="display-inline-block margin-20px-bottom xs-margin-15px-bottom"><i class="icon icon-layers text-extra-dark-gray font-size36"></i></div>
                        <div class="alt-font text-extra-dark-gray margin-10px-bottom font-size18 xs-font-size16">Photography</div>
                        <p class="width-85 md-width-90 xs-width-100 center-col no-margin-bottom">This creative template design provide ideal and variety of design services and solutions for website.</p>
                    </div>
                </div>
                {/* end services item */}

                {/* start services item */}
                <div class="col-lg-4 col-md-6">
                    <div class="text-center xs-padding-20px-bottom">
                        <div class="display-inline-block margin-20px-bottom xs-margin-15px-bottom"><i class="icon icon-presentation text-extra-dark-gray font-size36"></i></div>
                        <div class="alt-font text-extra-dark-gray margin-10px-bottom font-size18 xs-font-size16">Graphic Design</div>
                        <p class="width-85 md-width-90 xs-width-100 center-col no-margin-bottom">This creative template design provide ideal and variety of design services and solutions for website.</p>
                    </div>
                </div>
                {/* end services item */}

                {/* start services item */}
                <div class="col-lg-4 col-md-6">
                    <div class="text-center">
                        <div class="display-inline-block margin-20px-bottom xs-margin-15px-bottom"><i class="icon icon-genius text-extra-dark-gray font-size36"></i></div>
                        <div class="alt-font text-extra-dark-gray margin-10px-bottom font-size18 xs-font-size16">Content Writing</div>
                        <p class="width-85 md-width-90 xs-width-100 center-col no-margin-bottom">This creative template design provide ideal and variety of design services and solutions for website.</p>
                    </div>
                </div>
                {/* end services item */}
            </div>
        </div>

        <div class="svg">
            <svg fill="#fff" version="1.1" width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none">
                <path d="M0 30 L50 90 L100 30 V100 H0"></path>
            </svg>
        </div>

    </section>
    {/* End Services Section */}
    <section className="blog bg-light-gray" data-scroll-index="4">
        <div className="container">
            <div className="row">
                <div className="col-12 center-col margin-70px-bottom sm-margin-40px-bottom xs-margin-30px-bottom text-center">
                    <h4 className="font-weight-700 font-size32 md-font-size27 sm-font-size24 xs-font-size20 section-title">Struktur</h4>
                </div>
            </div>
            <div className="row">

                {/* start blog */}
                <div className="col-lg-4 sm-margin-20px-bottom">
                    <div className="item text-center">
                        <div className="post-img">
                            <img src="#" alt=""/>
                        </div>
                        <div className="content">
                            <div className="tag alt-font font-weight-300">
                                <h4 href="#">Presiden</h4>
                            </div>
                            <p>Sebagai pengambil kebijakan tertinggi dalam BEM FILKOM UB yang menjalankan fungsi
                                kepemimpinan umum
                            </p>
                        </div>
                    </div>
                </div>
                {/* end blog */}
                {/* start blog */}
                <div className="col-lg-4 sm-margin-20px-bottom">
                    <div className="item text-center">
                        <div className="post-img">
                            <img src="#" alt=""/>
                        </div>
                        <div className="content">
                            <div className="tag alt-font font-weight-300">
                                <h4 href="#">Wakil Presiden</h4>
                            </div>
                            <p>Menggantikan fungsi dan peran Presiden BEM jika berhalangan dan menjalankan fungsi
                                pengawasan bersama Presiden baik secara langsung maupun struktural dan fungsional BEM
                                FILKOM UB.
                            </p>
                        </div>
                    </div>
                </div>
                {/* end blog */}
                {/* start blog */}
                <div className="col-lg-4 sm-margin-20px-bottom">
                    <div className="item text-center">
                        <div className="post-img">
                            <img src="#" alt=""/>
                        </div>
                        <div className="content">
                            <div className="tag alt-font font-weight-300">
                                <h4 href="#">Sekretaris Pimpinan</h4>
                            </div>
                            <p>Bertanggung jawab atas pengkoordinasian agenda yang berhubungan dengan Presiden ataupun
                                Wakil Presiden dan berkoordinasi dengan kementerian dan biro dalam hal administrasi
                                keprokeran berupa perencanaan, progress dan laporan. Serta berkoordinasi dengan
                                koordinator bidang terkait pengawasan pencapaian goals kementerian dan biro.
                            </p>
                        </div>
                    </div>
                </div>
                {/* end blog */}
                {/* start blog */}
                <div className="col-lg-4 sm-margin-20px-bottom">
                    <div className="item text-center">
                        <div className="post-img">
                            <img src="#" alt=""/>
                        </div>
                        <div className="content">
                            <div className="tag alt-font font-weight-300">
                                <h4 href="#">PJMO</h4>
                            </div>
                            <p>Memonitoring, mengevaluasi, meningkatkan kapasitas dan memelihara soliditas sumber daya
                                manusia BEM FILKOM UB. Serta memberikan rekomendasi kebijakan yang berhubungan dengan
                                sumber daya manusia BEM FILKOM UB kepada Presiden dan Wakil Presiden BEM.
                            </p>
                        </div>
                    </div>
                </div>
                {/* end blog */}
                {/* start blog */}
                <div className="col-lg-4 sm-margin-20px-bottom">
                    <div className="item text-center">
                        <div className="post-img">
                            <img src="#" alt=""/>
                        </div>
                        <div className="content">
                            <div className="tag alt-font font-weight-300">
                                <h4 href="#">Menko Kepemudaan</h4>
                            </div>
                            <p>Menyelenggarakan koordinasi, sinkronisasi, dan supervisi kementerian dalam
                                penyelenggaraan kepengurusan di bidang kepemudaan
                            </p>
                        </div>
                    </div>
                </div>
                {/* end blog */}
                {/* start blog */}
                <div className="col-lg-4 sm-margin-20px-bottom">
                    <div className="item text-center">
                        <div className="post-img">
                            <img src="#" alt=""/>
                        </div>
                        <div className="content">
                            <div className="tag alt-font font-weight-300">
                                <h4 href="#">Kementrian PSDM</h4>
                            </div>
                            <p>Bertanggung jawab dalam melaksanakan pengembangan potensi dan karakter sumber daya
                                mahasiswa FILKOM. Selain itu PSDM juga berperan dalam mempersiapkan sumber daya
                                mahasiswa FILKOM yang beragam dan potensial menjadi generasi pemimpin masa depan
                            </p>
                        </div>
                    </div>
                </div>
                {/* end blog */}
                {/* start blog */}
                <div className="col-lg-4 sm-margin-20px-bottom">
                    <div className="item text-center">
                        <div className="post-img">
                            <img src="#" alt=""/>
                        </div>
                        <div className="content">
                            <div className="tag alt-font font-weight-300">
                                <h4 href="#">Kedirjenan Kaderisasi</h4>
                            </div>
                            <p>Melaksanakan fungsi kaderisasi secara terbuka bagi mahasiswa FILKOM dalam membangun dan
                                melakukan pembinaan pada karakter awal mahasiswa serta dalam bidang kepemimpinan,
                                organisasi, dan penanaman rasa cinta akan Fakultas
                            </p>
                        </div>
                    </div>
                </div>
                {/* end blog */}
                {/* start blog */}
                <div className="col-lg-4 sm-margin-20px-bottom">
                    <div className="item text-center">
                        <div className="post-img">
                            <img src="#" alt=""/>
                        </div>
                        <div className="content">
                            <div className="tag alt-font font-weight-300">
                                <h4 href="#">Kedirjenan P2M</h4>
                            </div>
                            <p>Mengembangkan, memberdayakan dan menciptakan SDM strategis berbasis kepemimpinan,
                                enterpreneurship serta keorganisasian dengan tujuan menghasilkan mahasiswa yang
                                berkualitas, berdaya saing dan berdaya guna demi menunjang proses persiapan pasca
                                kampus mahasiswa FILKOM UB
                            </p>
                        </div>
                    </div>
                </div>
                {/* end blog */}
                {/* start blog */}
                <div className="col-lg-4 sm-margin-20px-bottom">
                    <div className="item text-center">
                        <div className="post-img">
                            <img src="#" alt=""/>
                        </div>
                        <div className="content">
                            <div className="tag alt-font font-weight-300">
                                <h4 href="#">Kementrian Perhubungan</h4>
                            </div>
                            <p>Bertanggungjawab dalam menjalin hubungan dan koordinasi dengan lembaga mahasiswa FILKOM
                                UB dan pihak eksternal BEM FILKOM UB
                            </p>
                        </div>
                    </div>
                </div>
                {/* end blog */}
                {/* start blog */}
                <div className="col-lg-4 sm-margin-20px-bottom">
                    <div className="item text-center">
                        <div className="post-img">
                            <img src="#" alt=""/>
                        </div>
                        <div className="content">
                            <div className="tag alt-font font-weight-300">
                                <h4 href="#">Kedirjenan Dalam Negri</h4>
                            </div>
                            <p>Menjalin koordinasi, konsolidasi, dan monitoring lembaga mahasiswa FILKOM UB dalam
                                seluruh ranah kerja kelembagaan
                            </p>
                        </div>
                    </div>
                </div>
                {/* end blog */}
                {/* start blog */}
                <div className="col-lg-4 sm-margin-20px-bottom">
                    <div className="item text-center">
                        <div className="post-img">
                            <img src="#" alt=""/>
                        </div>
                        <div className="content">
                            <div className="tag alt-font font-weight-300">
                                <h4 href="#">Kedirjenan Luar Negri</h4>
                            </div>
                            <p>Menjalin hubungan dan koordinasi dengan pihak eksternal BEM baik di dalam maupun di luar
                                FILKOM UB
                            </p>
                        </div>
                    </div>
                </div>
                {/* end blog */}
                {/* start blog */}
                <div className="col-lg-4 sm-margin-20px-bottom">
                    <div className="item text-center">
                        <div className="post-img">
                            <img src="#" alt=""/>
                        </div>
                        <div className="content">
                            <div className="tag alt-font font-weight-300">
                                <h4 href="#">Kementrian Inovasi Karya</h4>
                            </div>
                            <p>Bertanggungjawab dalam mengakomodasi, mengembangkan dan mengapresiasi potensi mahasiswa
                                di bidang keilmuan dan minat bakat
                            </p>
                        </div>
                    </div>
                </div>
                {/* end blog */}
                {/* start blog */}
                <div className="col-lg-4 sm-margin-20px-bottom">
                    <div className="item text-center">
                        <div className="post-img">
                            <img src="#" alt=""/>
                        </div>
                        <div className="content">
                            <div className="tag alt-font font-weight-300">
                                <h4 href="#">Menko Sosial Politik</h4>
                            </div>
                            <p>Menyelenggarakan koordinasi, sinkronisasi, dan supervisi kementerian dalam
                                penyelenggaraan kepengurusan di bidang sosial politik
                            </p>
                        </div>
                    </div>
                </div>
                {/* end blog */}
                {/* start blog */}
                <div className="col-lg-4 sm-margin-20px-bottom">
                    <div className="item text-center">
                        <div className="post-img">
                            <img src="#" alt=""/>
                        </div>
                        <div className="content">
                            <div className="tag alt-font font-weight-300">
                                <h4 href="#">Kementrian Sosial Masyarakat</h4>
                            </div>
                            <p>Bertanggungjawab di bidang pelayanan masyarakat dengan berbagai program mulai dari
                                pendidikan, peduli lingkungan, bantuan sosial, pengabdian dan responsif terhadap
                                bencana.
                            </p>
                        </div>
                    </div>
                </div>
                {/* end blog */}
                {/* start blog */}
                <div className="col-lg-4 sm-margin-20px-bottom">
                    <div className="item text-center">
                        <div className="post-img">
                            <img src="#" alt=""/>
                        </div>
                        <div className="content">
                            <div className="tag alt-font font-weight-300">
                                <h4 href="#">Kementrian Advokesma</h4>
                            </div>
                            <p>Bertanggungjawab dalam penghimpunan permasalahan dan advokasi permasalahan mahasiswa
                                untuk disampaikan pada pihak-pihak terkait demi terwujudnya perjuangan aspirasi
                                kesejahteraan mahasiswa
                            </p>
                        </div>
                    </div>
                </div>
                {/* end blog */}
                {/* start blog */}
                <div className="col-lg-4 sm-margin-20px-bottom">
                    <div className="item text-center">
                        <div className="post-img">
                            <img src="#" alt=""/>
                        </div>
                        <div className="content">
                            <div className="tag alt-font font-weight-300">
                                <h4 href="#">Kedirjenan Advijakpus</h4>
                            </div>
                            <p>Melakukan penyampaian advokasi terhadap seluruh permasalahan yang telah dihimpun kepada
                                pihak-pihak terkait serta mengkaji kebijakan-kebijakan FILKOM UB
                            </p>
                        </div>
                    </div>
                </div>
                {/* end blog */}
                {/* start blog */}
                <div className="col-lg-4 sm-margin-20px-bottom">
                    <div className="item text-center">
                        <div className="post-img">
                            <img src="#" alt=""/>
                        </div>
                        <div className="content">
                            <div className="tag alt-font font-weight-300">
                                <h4 href="#">Kedirjenan Kesma</h4>
                            </div>
                            <p>Menghimpun persamalahan mahasiswa secara global dan menyampaikan informasi - informasi terkait dengan kondisi kesejahteraan mahasiswa
                            </p>
                        </div>
                    </div>
                </div>
                {/* end blog */}
                {/* start blog */}
                <div className="col-lg-4 sm-margin-20px-bottom">
                    <div className="item text-center">
                        <div className="post-img">
                            <img src="#" alt=""/>
                        </div>
                        <div className="content">
                            <div className="tag alt-font font-weight-300">
                                <h4 href="#">Kementrian Kastrat</h4>
                            </div>
                            <p>Bertanggungjawab dalam pengkajian dan penyikapan terhadap isu-isu strategis baik di
                                ranah universitas, regional maupun nasional.
                            </p>
                        </div>
                    </div>
                </div>
                {/* end blog */}
                {/* start blog */}
                <div className="col-lg-4 sm-margin-20px-bottom">
                    <div className="item text-center">
                        <div className="post-img">
                            <img src="#" alt=""/>
                        </div>
                        <div className="content">
                            <div className="tag alt-font font-weight-300">
                                <h4 href="#">Direktur Internal</h4>
                            </div>
                            <p>Menyelenggarakan koordinasi, sinkronisasi, dan supervisi kebiroan dalam penyelenggaraan
                                kepengurusan
                            </p>
                        </div>
                    </div>
                </div>
                {/* end blog */}
                {/* start blog */}
                <div className="col-lg-4 sm-margin-20px-bottom">
                    <div className="item text-center">
                        <div className="post-img">
                            <img src="#" alt=""/>
                        </div>
                        <div className="content">
                            <div className="tag alt-font font-weight-300">
                                <h4 href="#">Biro Medinfo</h4>
                            </div>
                            <p>Bertugas sebagai perpanjangan tangan dari BEM FILKOM UB dalam pemberian informasi secara
                                kreatif terkait dengan kegiatan kegiatan BEM FILKOM UB maupun informasi pelayanan
                                kepada mahasiswa FILKOM UB melalui media elektronik dan media sosial.
                            </p>
                        </div>
                    </div>
                </div>
                {/* end blog */}
                {/* start blog */}
                <div className="col-lg-4 sm-margin-20px-bottom">
                    <div className="item text-center">
                        <div className="post-img">
                            <img src="#" alt=""/>
                        </div>
                        <div className="content">
                            <div className="tag alt-font font-weight-300">
                                <h4 href="#">Biro Media Kreatif</h4>
                            </div>
                            <p>Bertugas dalam membuat berbagai konten kreatif yang menarik dalam bentuk gambar ataupun
                                video dalam upaya penyebaran informasi yang kreatif dan inovatif sebagai upaya
                                pendekatan diri BEM kepada elemen mahasiswa
                            </p>
                        </div>
                    </div>
                </div>
                {/* end blog */}
                {/* start blog */}
                <div className="col-lg-4 sm-margin-20px-bottom">
                    <div className="item text-center">
                        <div className="post-img">
                            <img src="#" alt=""/>
                        </div>
                        <div className="content">
                            <div className="tag alt-font font-weight-300">
                                <h4 href="#">Biro Media Informasi</h4>
                            </div>
                            <p>Mengelola media sosial BEM dan memanfaatkannya untuk media yang komunikatif dan
                                berimbang sebagai pusat informasi, mempublikasikan setiap informasi kampus secara
                                akurat dan kritis kepada seluruh elemen di FILKOM
                            </p>
                        </div>
                    </div>
                </div>
                {/* end blog */}
                {/* start blog */}
                <div className="col-lg-4 sm-margin-20px-bottom">
                    <div className="item text-center">
                        <div className="post-img">
                            <img src="#" alt=""/>
                        </div>
                        <div className="content">
                            <div className="tag alt-font font-weight-300">
                                <h4 href="#">Biro Administrasi Keuangan</h4>
                            </div>
                            <p>Bertugas untuk melakukan fungsi administrasi kesekretariatan dan fungsi pengelolaan
                                keuangan sebagai penunjang kinerja internal dan eksternal BEM FILKOM UB berdasarkan SOP
                                yang berlaku
                            </p>
                        </div>
                    </div>
                </div>
                {/* end blog */}
                {/* start blog */}
                <div className="col-lg-4 sm-margin-20px-bottom">
                    <div className="item text-center">
                        <div className="post-img">
                            <img src="#" alt=""/>
                        </div>
                        <div className="content">
                            <div className="tag alt-font font-weight-300">
                                <h4 href="#">Bagian Adkest</h4>
                            </div>
                            <p>Bertanggung jawab dalam mendukung kinerja BEM FILKOM UB dalam hal-hal yang berhubungan
                                dengan kesekretariatan, administrasi, investaris serta tata kelola lain seperti menjaga
                                kenyamanan ruang sekretariat BEM
                            </p>
                        </div>
                    </div>
                </div>
                {/* end blog */}
                {/* start blog */}
                <div className="col-lg-4 sm-margin-20px-bottom">
                    <div className="item text-center">
                        <div className="post-img">
                            <img src="#" alt=""/>
                        </div>
                        <div className="content">
                            <div className="tag alt-font font-weight-300">
                                <h4 href="#">Bagian Keuangan</h4>
                            </div>
                            <p>Mengatur keuangan dan pemenuhan kebutuhan internal eksternal BEM FILKOM UB yang meliputi
                                proker-proker internal maupun proker-proker yang diajukan dari lembaga yang ada di
                                FILKOM dengan mengadakan perencanaan keuangan jangka pendek, menengah, dan panjang
                            </p>
                        </div>
                    </div>
                </div>
                {/* end blog */}
                {/* start blog */}
                <div className="col-lg-4 sm-margin-20px-bottom">
                    <div className="item text-center">
                        <div className="post-img">
                            <img src="#" alt=""/>
                        </div>
                        <div className="content">
                            <div className="tag alt-font font-weight-300">
                                <h4 href="#">Biro Bisnis & Kemitraan</h4>
                            </div>
                            <p>Menunjang internal BEM FILKOM UB dari segi finansial dengan menghimpun sumber dana
                                potensial secara mandiri dari usaha bisnis maupun menjaring kemitraan dengan berbagai
                                perusahaan dan korporasi yang memanfaatkan Technology Informasi maupun non-TI
                            </p>
                        </div>
                    </div>
                </div>
                {/* end blog */}
                <div className="col-lg-4 sm-margin-20px-bottom">
                    <div className="item text-center">
                        <div className="post-img">
                            <img src="#" alt=""/>
                        </div>
                        <div className="content">
                            <div className="tag alt-font font-weight-300">
                                <h4 href="#">Biro Pengembangan Informasi & Teknologi</h4>
                            </div>
                            <p>Bertugas dalam penerapan teknologi informasi serta menciptakan teknologi-teknologi yang
                                dapat bermanfaat dalam supporting internal BEM FILKOM UB
                            </p>
                        </div>
                    </div>
                </div>
                {/* end blog */}

            </div>
        </div>
    </section>
    {/* End Portfolio Section */}

    {/* Start Contact Section */}
    <section className="contact bg-light-gray no-padding-bottom padding-130px-top xs-padding-80px-top" data-scroll-index="5">
        {/* <div className="container padding-130px-bottom xs-padding-80px-bottom">
            <div className="row">
                <div className="col-12 center-col margin-70px-bottom sm-margin-40px-bottom xs-margin-30px-bottom text-center">
                    <h4 className="font-weight-700 font-size32 md-font-size27 sm-font-size24 xs-font-size20 section-title style2">Contact</h4>
                </div>
            </div>
            <div className="row">

                <div className="col-lg-12">
                    <form method="post" action="http://www.chitrakootweb.com/template/ashton/bat/rd-mailform.php" className="mailform off2 rd-mailform">
                        <input type="hidden" name="form-type" value="contact">
                        <div className="row">
                            <div className="col-md-6 mfInput">
                                <input type="text" name="name" data-constraints="@LettersOnly @NotEmpty">
                                <span className="mfValidation"></span><span className="mfIcon"><span></span></span><span className="mfPlaceHolder">Your
                                    Name:</span></div>
                            <div className="col-md-6 mfInput">
                                <input type="text" name="phone" data-constraints="@Phone">
                                <span className="mfValidation"></span><span className="mfIcon"><span></span></span><span className="mfPlaceHolder">Telephone:</span></div>
                            <div className="col-md-6 mfInput">
                                <input type="text" name="email" data-constraints="@Email @NotEmpty">
                                <span className="mfValidation"></span><span className="mfIcon"><span></span></span><span className="mfPlaceHolder">Email:</span></div>
                            <div className="col-md-6 mfInput">
                                <input type="text" name="subject" data-constraints="@NotEmpty">
                                <span className="mfValidation"></span><span className="mfIcon"><span></span></span><span className="mfPlaceHolder">Subject:</span></div>
                            <div className="col-md-12 mfInput">
                                <textarea name="message" rows="5" data-constraints="@NotEmpty"></textarea>
                                <span className="mfValidation"></span><span className="mfIcon"><span></span></span><span className="mfPlaceHolder">Message:</span></div>
                            <div className="mfControls col-md-12 text-center">
                                <button type="submit" className="btn white mfProgress"><span className="cnt">Send Message</span><span
                                        className="loader"></span><span className="msg"></span></button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div> */}

        <div className="bg-white padding-30px-tb border-top border-color-medium-gray">
            <div className="container">
                <div className="row info">



                    <div className="col-lg-4 col-md-3 item text-center border-right xs-no-border-right xs-border-bottom border-color-medium-gray xs-margin-20px-bottom xs-padding-20px-bottom">
                        <span className="icon font-size32"><i className="icon-phone"></i></span>
                        <div className="cont">
                            <h6>Phone</h6>
                            <p>-</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5 item text-center border-right xs-no-border-right xs-border-bottom border-color-medium-gray xs-margin-20px-bottom xs-padding-20px-bottom">
                        <span className="icon font-size32"><i className="icon-map"></i></span>
                        <div className="cont">
                            <h6>Address</h6>
                            <p>Sekretariat Gedung D1.11 FILKOM UB</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 item text-center">
                        <span className="icon font-size32"><i className="icon-envelope"></i></span>
                        <div className="cont">
                            <h6>Email</h6>
                            <p>bemfilkom1920@gmail.com</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </section>
    {/* End Contact Section */}

    {/*  Start Footer Section */}
    <footer className="bg-black">
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 text-center">
                        <span className="font-size13 text-uppercase letter-spacing-1 text-light-gray">© 2019 BEM FILKOM
                            2019 Inspired with Ashton</span>
                    </div>
                </div>
            </div>
        </div>
        <div id="back-to-top" className="back-to-top">
            <i className="fa fa-angle-up"></i>
        </div>
    </footer>
      </div>
    )
  }
}
