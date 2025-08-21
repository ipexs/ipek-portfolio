export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">İpek Şahin</h1>
        <p className="text-lg">Junior Product Manager | Co-Founder | Innovator</p>
        <p className="mt-2">ipeksahin636@gmail.com | +90 537 860 0606</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Hakkımda</h2>
        <p>
          Product development, user research ve startup dünyasına ilgisi olan genç bir ürün yöneticisiyim. HR teknolojileri, yapay zeka ve kullanıcı deneyimini geliştirmeye odaklanıyorum. Hem teknik hem stratejik süreçlerde aktif rol alarak, sürdürülebilir ve kullanıcı odaklı ürünler geliştiriyorum.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projeler</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold">AI Destekli Video Mülakat Platformu – HiringCycle</h3>
            <p><strong>Rolüm:</strong> Junior Product Owner</p>
            <p><strong>Süreç:</strong> User story oluşturma, wireframe’ler, sprint yönetimi, API entegrasyonları</p>
            <p><strong>Sonuç:</strong> Aday deneyimi artırıldı, churn rate analizleriyle kullanıcı geri bildirimleri iyileştirildi</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">HR Teknolojileri Üzerine Ar-Ge ve Youth Voice</h3>
            <p><strong>Rolüm:</strong> Chief Youth Officer</p>
            <p><strong>Süreç:</strong> Ürün planlamasına genç bakış açısı kazandırma, kullanıcı testleri, geri bildirim döngüleri</p>
            <p><strong>Sonuç:</strong> Engagement metrikleri iyileştirildi, kullanıcı sadakati artırıldı</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Car2Gather – P2P Araç Paylaşım Girişimi</h3>
            <p><strong>Rolüm:</strong> Kurucu Ortak</p>
            <p><strong>Süreç:</strong> MVP planlaması, kullanıcı araştırması, platform mimarisi</p>
            <p><strong>Sonuç:</strong> Kullanıcıdan gelen geri bildirimlerle ürünün ilk versiyonu iteratif olarak geliştirildi</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Yetenekler & Araçlar</h2>
        <ul className="list-disc list-inside">
          <li>Agile, Scrum, Kanban, OKR, KPI</li>
          <li>Jira, Figma, Notion, Confluence, Google Analytics</li>
          <li>Ürün yol haritası oluşturma, kullanıcı araştırması, churn analizi, A/B testleri</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Deneyim</h2>
        <ul className="list-disc list-inside">
          <li><strong>Hiringcycle.ai</strong> – Jr. Product Owner / Chief Youth Officer (2023–2025)</li>
          <li><strong>Arya Ekosistem A.Ş.</strong> – Girişimcilik Stajyeri (2023)</li>
          <li><strong>Car2gather</strong> – Co-founder (2022–2024)</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Eğitim</h2>
        <p><strong>Yıldız Teknik Üniversitesi – Fizik (2020–2026)</strong></p>
        <p>Veri analizi, algoritma geliştirme ve teknoloji odaklı ürün çalışmaları için sağlam bir temel.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">İletişim</h2>
        <p><strong>E-posta:</strong> ipeksahin636@gmail.com</p>
        <p><strong>Telefon:</strong> +90 537 860 0606</p>
      </section>
    </div>
  );
}