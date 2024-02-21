import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div *ngFor="let product of products" class="product-container">
  <h3>
    <a class="name" [title]="product.name + ' details'">
      {{ product.name }}
    </a>
  </h3>
  <img [src]="product.image" alt="{{ product.name }}" width="300">
  <p class="description">
    <strong> Description: </strong> {{ product.description }}
  </p>
  <p class="description">
    <strong>Rating: </strong> {{ product.rating }}
  </p>

  <a [href]="'https://wa.me/?text=Check%20out%20' + product.name + '%20at%20this%20link:%20' + product.buyLink"
     class="share-button">
     Share via WhatsApp
  </a>

  <a [href]="product.buyLink" class="buy-button">
     Buy now
  </a>
</div>

  `,
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: any[] = [
    { name: 'BOBBI BROWN crushed creamy color for cheeks&lips', description: 'Тинт для губ и щек Crushed Creamy Color For Cheeks & Lips - это многозадачная, легкая кремообразная формула, которая плавно сливается с кожей, мгновенно придает здоровый естественный румянец как щекам, так и губам.', rating: 4, image: '/assets/pr1.jpg', buyLink: "https://goldapple.kz/19760313139-tobacco-tonka-bean" },
    { name: 'MIN NEW YORK shaman`', description: 'Shaman от MiN NEW YORK – это чувственное любовное зелье из потустороннего мира. Его преподносит загадочный волшебник. Путешественник во времени. Страж священных сил. Лист фиалки, мандарин и кардамон приоткрывают завесу тайны и пропускают вперёд туманный ладан, мускатный орех, лабданум и абсолют розы. В базе мистического аромата – серая амбра, мёд и пачули.', rating: 3.5, image: '/assets/pr2.png', buyLink: "https://goldapple.kz/19760313139-tobacco-tonka-bean" },
    { name: 'THOMAS KOSMALA № 3 crépuscule ardent', description: 'Чарующее сочетание кожаных, цветочных и пряных нот поможет быть в центре внимания и наслаждаться своей неотразимостью. Аромат от THOMAS KOSMALA открывается яркой вспышкой шафрана и жасмина, которые постепенно уступают место тёплым нотам замши и амбры, доминирующим в парфюмерной композиции.', rating: 5, image: '/assets/pr3.png', buyLink: "https://goldapple.kz/19760313139-tobacco-tonka-bean" },
    { name: 'COACH eau de parfum', description: 'Парфюмерная вода COACH полна энергии и контрастов, как и Нью-Йорк – динамичный город, вдохновивший на создание этой композиции. Бодрящий и яркий, но в то же время женственный и чувственный аромат отражает спонтанный дух, непринужденный шик и элегантный стиль делового центра Нью-Йорка.', rating: 4.5, image: '/assets/pr4.png', buyLink: "https://goldapple.kz/19760313139-tobacco-tonka-bean" },
    { name: 'BASTILLE paradis nuit', description: 'Интригующий и таинственный, как глубокая ночь, аромат BASTILLE объединяет чистый, успокаивающий аккорд марсельского мыла и экзотическое цветочное звучание, мягкую умеренность и пьянящую чувственность.', rating: 3, image: '/assets/pr5.png' , buyLink: "https://goldapple.kz/19760313139-tobacco-tonka-bean" },
    { name: 'DOLCE & GABBANA k by dolce&gabbana', description: 'Новый чувственный аромат K by Dolce&Gabbana, унаследовавший черты одноименной туалетной воды, воплощает образ страстного и уверенного в себе мужчины, который сам выбирает свою судьбу. Вдохновившись суровыми пейзажами Тосканы, известные парфюмеры Дафна Бюже и Натали Лорсон переосмыслили первоначальную композицию, чтобы отразить эмоциональность и притягательность того, кто стал королем собственной жизни.', rating: 4.5, image: '/assets/pr6.png', buyLink: "https://goldapple.kz/19760313139-tobacco-tonka-bean" },
    { name: 'VERSACE dylan blue', description: 'Туалетная вода Versace Dylan Blue воплощает в себе характер современного мужчины, привыкшего идти в ногу со временем. Яркий и насыщенный древесный аромат наполнен мужественностью и шармом. Верхние ноты туалетной воды включают в себя цитрусовые тона грейпфрута и бергамота в сочетании со свеже-сладким запахом фиговых листьев.', rating: 4, image: '/assets/pr7.png', buyLink: "https://goldapple.kz/19760313139-tobacco-tonka-bean" },
    { name: 'BOUCHERON quatre iconic', description: 'Изысканный и насыщенный аромат QUATRE ICONIC – парфюмерное воплощение стиля BOUCHERON. Блеск и роскошь украшений и аксессуаров бренда нашли отражение в элегантной парфюмерной композиции, объединившей чувственное звучание туберозы и теплые, пряные ноты специй.', rating: 3.5, image: '/assets/pr8.png', buyLink: "https://goldapple.kz/19760313139-tobacco-tonka-bean" },
    { name: 'MONTBLANC explorer ultra blue', description: 'Свежий, насыщенный и мужественный аромат MONTBLANC символизирует свободу и дух приключений. Парфюмерная история о путешествии вокруг света начинается с бодрящих нот цитрусов и выразительного, освежающего морского аккорда. Древесные ноты с акцентом амбры подчёркивают элегантную мужественность, сильный характер и харизму.', rating: 5, image: '/assets/pr9.png', buyLink: "https://goldapple.kz/19760313139-tobacco-tonka-bean" },
    { name: 'BANANA REPUBLIC tobacco & tonka bean', description: 'Восточный гурманский аромат Tobacco & Tonka Bean от Banana Republic очаровывает верхними нотами груши Анжу и золотистой сливы Мирабель. В сердце декадентской, соблазнительной композиции – кокос и листья табака, дополняющие насыщенность и сливочную сладость ванили. Бобы тонка подчеркивают тёмный, чувственный характер инновационного и многогранного аромата.', rating: 4.5, image: '/assets/pr10.png', buyLink: "https://goldapple.kz/19760313139-tobacco-tonka-bean" }
  ];

  share(product: any) {
    const message = `Check out ${product.name} at this link: ${product.buyLink}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  buy(link: string) {
    console.log('Buy link:', link);
    window.open(link, '_blank');
  }
  
}
