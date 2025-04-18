function changeContent() {
    const desc = document.getElementById("description");
    desc.textContent = "Boom! Text changed with new styles 🌀";
    desc.style.color = "deeppink";
    desc.style.backgroundColor = "#f0f0f0";
    desc.style.padding = "10px";
    desc.style.borderRadius = "8px";
    desc.style.transition = "all 0.5s ease";
  }
  
  function toggleElement() {
    const container = document.getElementById("dynamic-element");
    const existing = document.getElementById("new-paragraph");
  
    if (existing) {
      container.removeChild(existing);
    } else {
      const para = document.createElement("p");
      para.id = "new-paragraph";
      para.textContent = "New element added dynamically! 🌟";
      container.appendChild(para);
    }
  }
  
  // Clock feature
  setInterval(() => {
    const clock = document.getElementById("clock");
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
  }, 1000);
  
  // Counter features
  let count = 0;
  function increment() {
    count++;
    document.getElementById("counter").textContent = count;
  }
  function decrement() {
    count--;
    document.getElementById("counter").textContent = count;
  }
  function reset() {
    count = 0;
    document.getElementById("counter").textContent = count;
  }
  
  // Theme toggle
  function toggleTheme() {
    document.body.classList.toggle("dark");
  }
  