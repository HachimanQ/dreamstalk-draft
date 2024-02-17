import React from 'react'

function MainComponent() {
    return (
      <main>
        <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Dreamstalk websitesine hoşgeldiniz</h1>
                  <p className="opacity-75">Öncelikle burada yazan hiçbir şey okunması için değil, yazıların nasıl gözüktüğünü görmek için.</p>
                  <p><a className="btn btn-lg btn-primary" href="#">Buton</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Ama ben yine de bir şeyler yazdım.</h1>
                  <p>Maksat sıkıcı olmasın. Ama dediğim gibi okumanıza gerek yok, iyi duruyorsa yeter. 20 gündür bu sitenin iskeletiyle uğraşıyorum, anlamlı şeyleri de ben yazmayayım haha.</p>
                  <p><a className="btn btn-lg btn-primary" href="#">Bu tuşlara ne yazsak?</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>Arkada gördüğünüz gri alanda büyük bir resim olacak</h1>
                  <p>ve gördüğünüz bu yazılarda da başlık veya kısa açıklama tarzı şeyler yazıyor olacak</p>
                  <p><a className="btn btn-lg btn-primary" href="#">İletişim?!</a></p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
  
        <div className="container marketing">
          <hr className="featurette-divider"/>
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">Topluluğumuz hakkında bir özellik <span className="text-body-secondary">Ve buraya başka bir cümle .</span></h2>
              <p className="lead">Sağ tarafta da bu yazıyla ilgili bir resim. Ve bu yazının olduğu yere de açıklamalar yazılacak. Unutmamak gerekir ki, bu site şuan için bilgisayarlar ve geniş ekranlı cihazlar için tasarlandı. Malesef henüz telefon gibi dar ekranlar  ile optimize etme fırsatı bulamadım. Ama bir noktada yaparım. Eğer sağdaki resim ve bu yazı aşırı yakın ve kaymış falan duruyorsa önemli değil, halledeceğim. </p>
            </div>
            <div className="col-md-5">
              <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%"  dy=".3em">500x500</text></svg>
            </div>
          </div>
          <hr className="featurette-divider"/>
          <div className="row featurette">
            <div className="col-md-5">
              <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%"  dy=".3em">500x500</text></svg>
            </div>
            <div className="col-md-7-2">
              <h2 className="featurette-heading fw-normal lh-1">Yazmam gereken şeyleri yukarda yazdım. <span className="text-body-secondary">Şimdi burdaki yeri doldurmak için dünyadaki enn eski şakaları sunuyorum:</span></h2>
              <p className="lead">Sümer Komikliği:
                Bir Sümerli çiftçi, diğerine şaka yapar: "Tanrılar, bereketi artırmak için dua etmemizi isterler, ama buğdayın iyi yetişmesi için biraz güneş isterler. Tam olarak hangisini istediklerini anlamış değilim!"
                
                Çin Espiri:
                Bir Çinli filozof, öğrencisine sorar: "Mutluluğun sırrı nedir?" Öğrenci düşünür ve yanıtlar: "Bilmem, ama bir fincan çay içerek başlamalı!"
                
                , şimdi zen hikayeleri: "bir keşiş manastırdan uzakta kendi başına meditasyon yapmaya karar verir. kayığa atlayarak gölün ortasına demir atar ve gözlerini kapatıp meditasyonuna başlar. birkaç saat sonra başka bir kayığın kendi kayığına çarptığını hissederek, içinde oluşan öfkeyle gözlerini açar.
                
                meditasyonunu yarıda kesmeye cesaret eden kişiye patlamaya hazır bir şekilde gözlerini açarken çarpan kayığın boş olduğunu görür. büyük ihtimalle başıboş olduğu için gölün ortasına sürüklenen bir kayıktır. işte o anda keşiş benliğinin farkına vararak kurtulur. öfke kendi içindedir, sadece dışarıdan bir etki onu açığa çıkarır.
                
                o andan sonra, ne zaman biri onu öfkelendirse kendisine 'diğer insan sadece boş bir kayıktır. öfke yalnızca benim içimdedir' diye hatırlatır. "</p>
            </div>
          </div>
          <hr className="featurette-divider"/>
        </div>
  
        <footer className="container">
          <p className="float-end"><a href="#">Back to top</a></p>
          <p>&copy; 2017–2023 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
        </footer>
      </main>
    );
  }
  
  export default MainComponent;