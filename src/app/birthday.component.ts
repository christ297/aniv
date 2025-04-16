import { Component } from '@angular/core';
import confetti from 'canvas-confetti';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'birthday-trella',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="birthday-container">
      <h1>🎉 Joyeux Anniversaire Trella 🎂</h1>
      <p>Que cette journée soit remplie de bonheur, de rires et de gâteaux ! haribot aussi 🥳</p>

      <form (submit)="sendMessage($event)">
        <input type="text" placeholder="Ton prénom" name="name" required>
        <textarea placeholder="Ton message pour Trella" name="message" required></textarea>
        <button type="submit">Envoyer le message 🎈</button>
      </form>

      <button class="confetti-btn" (click)="launchConfetti()">🎊 Confettis !</button>

      <div class="hearts">
        <span *ngFor="let h of hearts">❤️</span>
      </div>
    </div>
  `,
  styles: [`
    .birthday-container {
      height: 100vh;
      background: linear-gradient(120deg, #f6d365, #fda085);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: 'Segoe UI', sans-serif;
      text-align: center;
      color: #fff;
      padding: 2rem;
      position: relative;
      overflow: hidden;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 0.5rem;
      text-shadow: 2px 2px #00000033;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      max-width: 400px;
    }

    input, textarea {
      padding: 1rem;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      width: 100%;
    }

    button {
      padding: 1rem;
      border: none;
      border-radius: 8px;
      background-color: #ffffffcc;
      color: #333;
      font-weight: bold;
      cursor: pointer;
      transition: 0.3s;
    }

    button:hover {
      background-color: #fff;
    }

    .confetti-btn {
      margin-top: 2rem;
      background-color: #ff4081;
      color: white;
    }

    .hearts {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      overflow: hidden;
    }

    .hearts span {
      position: absolute;
      animation: float 6s infinite ease-in;
      font-size: 2rem;
      color: #ff69b4;
      opacity: 0.8;
      user-select: none;
    }

    @keyframes float {
      0% {
        transform: translateY(100vh) scale(0.5);
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: translateY(-10vh) scale(1);
        opacity: 0;
      }
    }

    @media (max-width: 600px) {
      h1 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
      }

      .confetti-btn {
        width: 100%;
      }
    }
  `]
})
export class BirthdayComponent {
  hearts = Array.from({ length: 30 }); // Génère 30 cœurs animés

  launchConfetti() {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 }
    });
  }

  sendMessage(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const mailto = `mailto:hisciences331@gmail.com?subject=🎉 Message pour Trella&body=De la part de ${encodeURIComponent(name)}:%0D%0A${encodeURIComponent(message)}`;
    window.location.href = mailto;
  }
}
