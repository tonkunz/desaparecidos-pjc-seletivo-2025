import { ChangeDetectorRef, Component, HostListener, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'scroll-top-btn',
  templateUrl: './scroll-top-btn.component.html',
  standalone: true,
  imports: [
    MatIconModule,
  ]
})
export class ScrollTopBtnComponent {
  private cdr = inject(ChangeDetectorRef);
  showScrollToTopButton = false;


  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const listagemSection = document.getElementById('listagem');
    if (listagemSection) {
      console.log('lsitagem teste;')
      const listagemRect = listagemSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calcula a posição do final da listagem
      const listagemBottom = listagemRect.bottom + window.scrollY;
      const scrollPosition = window.scrollY + windowHeight;

      // Mostra o botão se o usuário estiver próximo do final da listagem
      // e não estiver no final da página (para evitar que o botão fique visível desnecessariamente)
      const nearEndOfListagem = scrollPosition > listagemBottom - windowHeight / 2;
      const notAtBottomOfPage = scrollPosition < documentHeight - windowHeight - 50;

      this.showScrollToTopButton = nearEndOfListagem && notAtBottomOfPage;

      // Força a detecção de mudanças para atualizar a visibilidade do botão
      this.cdr.detectChanges();
    }
  }
}
