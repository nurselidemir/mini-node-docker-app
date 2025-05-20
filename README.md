<h1 align="center"> Mini Node.js Docker Uygulaması</h1>

<p align="center">
  <i>Docker ile kapsüllenmiş basit bir Node.js (Express.js) sunucusu</i><br>
  <b>Pamukkale Üniversitesi - Bilgisayar Mühendisliği</b><br>
  <i>Yazılım Mühendisliği Dersi • 2025 Bahar</i>
</p>

<hr>

<h2>📦 Proje Yapısı</h2>

<pre>
deneme/
├── Dockerfile
├── package.json
└── src/
    └── server.js
</pre>

<h2>🛠 Kullanılan Teknolojiler</h2>
<ul>
  <li><a href="https://nodejs.org/">Node.js</a></li>
  <li><a href="https://expressjs.com/">Express.js</a></li>
  <li><a href="https://www.docker.com/">Docker</a></li>
</ul>

<h2>⚙️ Kurulum ve Çalıştırma</h2>

<ol>
  <li><strong>Projeyi klonlayın</strong>:
    <pre><code>git clone https://github.com/kullanici-adi/mini-node-docker.git
cd mini-node-docker</code></pre>
  </li>

  <li><strong>Docker image oluşturun</strong>:
    <pre><code>docker build -t mynodeserver:1.0 .</code></pre>
  </li>

  <li><strong>Container başlatın</strong>:
    <pre><code>docker run -p 5877:7050 mynodeserver:1.0</code></pre>
    <small><i>7050, uygulamanın dinlediği porttur. Dış portu (5877) kendinize göre değiştirebilirsiniz.</i></small>
  </li>

  <li><strong>Tarayıcıdan erişin</strong>:
    <pre><code>http://localhost:5877</code></pre>
  </li>
</ol>

<h2>🧪 Ne Beklemeliyim?</h2>
<p>Tarayıcıda aşağıdaki mesaj görünmelidir:</p>
<pre><code>Welcome to my app</code></pre>


<hr>

<p>Bu proje Docker kullanımını pratik yapmak ve Node.js tabanlı web servislerini konteyner içinde çalıştırmayı göstermek için hazırlandı.</p>


