document.addEventListener("DOMContentLoaded", () => {
    const memes = document.querySelectorAll(".meme");
    memes.forEach((meme, i) => {
      setTimeout(() => {
        meme.classList.remove("hidden");
        meme.classList.add("show");
      }, 500 + i * 500);
    });
  
    const status = document.getElementById("status");
    const statuses = [
      "🔊 'В Россие болие 29 октуальных звуковых сигналов'",
      "🚨 'СГУ Ермак-Форфорд имеет 7 режимов'",
      "🚨 'СГУ Сампфир имеет 4 режима'",
      "🚨 'СГУ СП-7 7 режимов'",
      "🚨 'СГУ Зенит имеет 4 режима'",
      "🚨 'СГУ Ротарка имеет 3 режима'",
      "🚨 'СГУ Колумб имеет 5 режима'",
      "🚨 'СГУ Топоз имеет 4 режима'",
    ];
    let index = 0;
  
    status.addEventListener("click", () => {
      index = (index + 1) % statuses.length;
      status.textContent = statuses[index];
    });
  
    // 💡 Модальное окно
    const interestInfo = {
      "Roblox Studios": "Я люблю делать модельки и продавать их.",
      "War Tander": "Каждый куст враг.",
      "Blender": "Пере импорчиваю машины с Гта5-Гта сан на движок Роблокса.",
      "Жаба": "Просто жаба да).",
    };
  
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-description");
    const closeModal = document.getElementById("closeModal");
  
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const title = card.textContent.trim();
        modalTitle.textContent = title;
        modalDesc.textContent = interestInfo[title] || "Информация скоро появится.";
        modal.style.display = "flex";
      });
    });
  
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });

