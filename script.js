const USE_EMAILJS = true;
const TO_EMAIL = "valer.Popovich2002@gmail.com";
const EMAILJS_PUBLIC_KEY = "qFf4uzhmrcOOeayUQ";
const EMAILJS_SERVICE_ID = "service_i453ymg";
const EMAILJS_TEMPLATE_ID = "template_yezpk9y";

if (USE_EMAILJS && window.emailjs) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}
const questions = [
  {
    id: 1,
    text: "Найдите значение выражения \\( 3a−5 \\), если \\(a=8 \\)",
    type: "short",
    correct: "29",
  },
  {
    id: 2,
    text: "Решите уравнение: \\( x+12=35\\)",
    type: "short",
    correct: "23",
  },
  {
    id: 3,
    text: "Переведите 2 часа 30 мин в минуты </br> </br> Напишите ответ ниже",
    type: "short",
    correct: "150",
  },
  {
    id: 4,
    text: "Округлите число \\( 7828 \\) до сотен и напишите ответ ниже ",
    type: "short",
    correct: "7800",
  },
  {
    id: 5,
    text: "Решите пример \\( 543+287  \\) и запишите ответ ниже",
    type: "short",
    correct: "830",
  },
  {
    id: 6,
    text: "Решите пример \\( 900-456 \\) и запишите ответ ниже",
    type: "short",
    correct: "444",
  },
  {
    id: 7,
    text: "Решите пример \\( 23×15  \\) и запишите ответ ниже",
    type: "short",
    correct: "345",
  },
  {
    id: 8,
    text: "Решите пример \\( 144:12  \\) и запишите ответ ниже",
    type: "short",
    correct: "12",
  },
  {
    id: 9,
    text: "Какое из следующих чисел делится и на 2, и на 3, и на 5, и на 9, и на 10? ",
    type: "options",
    options: ["405", "504", "360", "545", "никакое"],
    correct: "360",
  },
  {
    id: 10,
    text: "Найдите наибольшие общий делитель (НОД) чисел 24 и 36 и запишите ответ ниже",
    type: "short",
    correct: "12",
  },
  {
    id: 11,
    text: "Найдите наименьшее общее кратное (НОК) чисел 12 и 15 и запишите ответ ниже",
    type: "short",
    correct: "60",
  },
  {
    id: 12,
    text: "Сократите дробь \\( \\dfrac{56}{72}  \\) и запишите ответ ниже ",
    type: "short-fraction",
    correct: "7/9",
  },

  {
    id: 13,
    text: "Решите пример \\( \\dfrac{2}{3} + \\dfrac{3}{4} - \\dfrac{1}{2} \\times \\dfrac{4}{5} \\div \\dfrac{2}{5} \\) и запишите ответ. </br>  </br>Если дробь сокращается, в ответ обязательно пишите сокращенный вариант!!!",
    type: "short-fraction",
    correct: "5/12",
  },

  {
    id: 14,
    text: "Вычислите: \\( 7\\dfrac{5}{8} - 1\\dfrac{1}{2} \\cdot 3\\dfrac{2}{3} \\div \\dfrac{3}{4} \\) </br>  </br> Если дробь сокращается, в ответ обязательно пишите сокращенный вариант!!!",
    type: "short-fraction",
    correct: "7/24",
  },
  {
    id: 15,
    text: "Сравните две дроби и выберите нужный знак: \\( \\dfrac{3}{5}\\) и \\( \\dfrac{2}{3}\\)",
    type: "options",
    options: ["\\(>\\)", "\\(<\\)", "\\(=\\)"],
    style: "width: 150px",
    correct: "\\(<\\)",
  },
  {
    id: 16,
    text: "Решите задачу и напишите ответ ниже в виде числа </br>  </br> Катя хочет испечь пирог и использует рецепт, в котором указано, что нужно взять \\( \\dfrac{3}{4} \\) от 120 граммов муки. Сколько граммов муки понадобится Кате?",
    type: "short",
    correct: "90",
  },
  {
    id: 17,
    text: "Решите задачу и напишите ответ ниже в виде числа </br>  </br> Алина прочитала, что число страниц, которые она уже прочитала, составляет \\( \\dfrac{3}{5} \\) от всего количества страниц в книге. Если Алина прочитала 75 страниц, сколько страниц в книге?</br>",
    type: "short",
    correct: "125",
  },
  {
    id: 18,
    text: "Решите пример \\( 2.5 + 1.75 - (0.8 \\times 1.2 \\div 0.4) \\) и запиши ниже ответ",
    type: "short",
    correct: "1,85",
  },
  {
    id: 19,
    text: "Округлите число \\(6,5878\\) до сотых и запишите ответ ниже  </br> ",
    type: "short",
    correct: "6,59",
  },
  {
    id: 20,
    text: "Решите задачу и напишите ответ ниже в виде числа </br>  </br> В магазине скидка на товар составляет 20%. Первоначальная цена товара - 1500 рублей. </br></br> Какова цена товара со скидкой?",
    type: "short",
    correct: "1200",
  },
  {
    id: 21,
    text: "Решите задачу и напишите ответ ниже в виде числа </br>  </br> После того, как цена товара была увеличена на 25%, она составила 2500 рублей. </br></br> Какова была первоначальная цена товара?",
    type: "short",
    correct: "2000",
  },
];
const STORAGE_KEY = "diagnostic6";

const qContainer = document.getElementById("questions");

questions.forEach((q) => {
  if (q.correct) {
    q.correctEncoded = q.correct.toString();
  }
});
function renderQuestions() {
  const qContainer = document.getElementById("questions");

  questions.forEach((q) => {
    const div = document.createElement("div");
    div.className = "question";
    const h3 = document.createElement("h3");
    h3.innerHTML = `${q.id}. ${q.text}`;
    div.appendChild(h3);

    if (q.img) {
      const img = document.createElement("img");
      img.src = q.img;
      img.style = q.style || "max-width:300px; margin:8px 0;";
      div.appendChild(img);
    }

    let input;
    if (q.type === "short") {
      input = document.createElement("input");
      input.type = "text";
      input.inputMode = "numeric";
      input.pattern = "-?\\d*";
      input.autocomplete = "off";
      input.id = `q_${q.id}`;

      input.addEventListener("input", (e) => {
        const only = e.target.value.replace(/[^\d.,-]/g, "");
        if (e.target.value !== only) e.target.value = only;
      });

      input.addEventListener("beforeinput", (e) => {
        if (e.data && /[^\d.,-]/.test(e.data)) e.preventDefault();
      });

      input.addEventListener("paste", (e) => {
        e.preventDefault();
        const text = (e.clipboardData || window.clipboardData)
          .getData("text")
          .replace(/[^\d.,-]/g, "");
        document.execCommand("insertText", false, text);
      });
      input.id = `q_${q.id}`;
      div.appendChild(input);
    } else if (q.type === "short-fraction") {
      const wrap = document.createElement("div");
      wrap.className = "fraction-input";

      const num = document.createElement("input");
      num.type = "text";
      num.placeholder = "числитель";
      num.id = `q_${q.id}_num`;
      num.inputMode = "numeric";
      num.pattern = "-?\\d*";
      num.autocomplete = "off";
      const line = document.createElement("div");
      line.className = "fraction-line";

      const den = document.createElement("input");
      den.type = "text";
      den.placeholder = "знаменатель";
      den.id = `q_${q.id}_den`;
      den.inputMode = "numeric";
      den.pattern = "-?\\d*";
      den.autocomplete = "off";
      [num, den].forEach((el) => {
        el.addEventListener("input", (e) => {
          const only = e.target.value.replace(/[^\d.,-]/g, "");
          if (e.target.value !== only) e.target.value = only;
        });

        el.addEventListener("beforeinput", (e) => {
          if (e.data && /[^\d.,-]/.test(e.data)) e.preventDefault();
        });

        el.addEventListener("paste", (e) => {
          e.preventDefault();
          const text = (e.clipboardData || window.clipboardData)
            .getData("text")
            .replace(/[^\d.,-]/g, "");
          document.execCommand("insertText", false, text);
        });
      });
      wrap.appendChild(num);
      wrap.appendChild(line);
      wrap.appendChild(den);
      div.appendChild(wrap);
    } else if (q.type === "mixed-fraction") {
      const wrap = document.createElement("div");
      wrap.className = "mixed-fraction-input";

      const intPart = document.createElement("input");
      intPart.type = "text";
      intPart.placeholder = "целая часть";
      intPart.id = `q_${q.id}_int`;
      intPart.inputMode = "numeric";
      intPart.pattern = "-?\\d*";
      intPart.autocomplete = "off";

      const num = document.createElement("input");
      num.type = "text";
      num.placeholder = "числитель";
      num.id = `q_${q.id}_num`;
      num.inputMode = "numeric";
      num.pattern = "-?\\d*";
      num.autocomplete = "off";

      const line = document.createElement("div");
      line.className = "fraction-line";

      const den = document.createElement("input");
      den.type = "text";
      den.placeholder = "знаменатель";
      den.id = `q_${q.id}_den`;
      den.inputMode = "numeric";
      den.pattern = "-?\\d*";
      den.autocomplete = "off";

      [intPart, num, den].forEach((el) => {
        el.addEventListener("input", (e) => {
          const only = e.target.value.replace(/[^\d.,-]/g, "");
          if (e.target.value !== only) e.target.value = only;
        });

        el.addEventListener("beforeinput", (e) => {
          if (e.data && /[^\d.,-]/.test(e.data)) e.preventDefault();
        });

        el.addEventListener("paste", (e) => {
          e.preventDefault();
          const text = (e.clipboardData || window.clipboardData)
            .getData("text")
            .replace(/[^\d.,-]/g, "");
          document.execCommand("insertText", false, text);
        });
      });

      const fracPart = document.createElement("div");
      fracPart.className = "fraction-input";
      fracPart.appendChild(num);
      fracPart.appendChild(line);
      fracPart.appendChild(den);

      wrap.appendChild(intPart);
      wrap.appendChild(fracPart);
      div.appendChild(wrap);
    } else if (q.type === "options") {
      q.options.forEach((opt) => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = `q_${q.id}`;
        radio.value = opt;
        label.appendChild(radio);
        label.append(" " + opt);
        div.appendChild(label);
        div.appendChild(document.createElement("br"));
      });
    } else if (q.type === "info") {
      const p = document.createElement("p");
      p.style = "color:#6b4a2d;font-style:italic;";
      p.textContent = "Ответ запиши на листе и прикрепи фото внизу формы.";
      div.appendChild(p);
    }

    qContainer.appendChild(div);
  });
}

renderQuestions();
const totalAnswerable = questions.filter((q) =>
  ["short", "options", "group"].includes(q.type)
).length;
document.getElementById(
  "progressText2"
).textContent = `0 из ${totalAnswerable}`;
document.getElementById("progressText").textContent = `0/${totalAnswerable}`;

const bar = document.getElementById("bar");
const progressText = document.getElementById("progressText");
const progressText2 = document.getElementById("progressText2");
async function getAnswers() {
  const data = {
    studentName: document.getElementById("studentName").value.trim(),
    studentSurName: document.getElementById("studentSurName").value.trim(),
    contactEmail: document.getElementById("contactEmail").value.trim(),
    consent: document.getElementById("consent").checked,
    answers: {},
    photoHTML: "",
  };

  for (const q of questions) {
    if (q.type === "options") {
      const selected = document.querySelector(
        `input[name="q_${q.id}"]:checked`
      );
      data.answers[q.id] = selected ? selected.value.trim() : "";
    } else if (q.type === "short") {
      const el = document.getElementById(`q_${q.id}`);
      data.answers[q.id] = el ? el.value.trim() : "";
    } else if (q.type === "short-fraction") {
      const num = document.getElementById(`q_${q.id}_num`);
      const den = document.getElementById(`q_${q.id}_den`);
      data.answers[q.id] =
        num && den && num.value && den.value
          ? `${num.value.trim()}/${den.value.trim()}`
          : "";
    } else if (q.type === "mixed-fraction") {
      const intPart = document.getElementById(`q_${q.id}_int`);
      const num = document.getElementById(`q_${q.id}_num`);
      const den = document.getElementById(`q_${q.id}_den`);
      data.answers[q.id] =
        intPart && num && den && num.value && den.value
          ? `${intPart.value.trim()} ${num.value.trim()}/${den.value.trim()}`
          : "";
    } else {
      data.answers[q.id] = "";
    }
  }

  return data;
}
function checkUnorderedNumbers(userInput, correctSet) {
  const userArray = userInput
    .split(",")
    .map((num) => num.trim())
    .filter((num) => num !== "")
    .map(Number);

  const correctArray = correctSet
    .split(",")
    .map((num) => num.trim())
    .filter((num) => num !== "")
    .map(Number);

  if (userArray.length !== correctArray.length) return false;

  return (
    userArray.sort((a, b) => a - b).join(",") ===
    correctArray.sort((a, b) => a - b).join(",")
  );
}

// 🔹 Универсальная проверка ответа (с учётом разных типов)
function validateAnswer(userInput, question) {
  if (question.check === "unordered_numbers") {
    return checkUnorderedNumbers(userInput, question.correct);
  }

  const user = userInput.trim().toLowerCase().replace(",", ".");
  const correct = (question.correct || "")
    .trim()
    .toLowerCase()
    .replace(",", ".");
  const userNum = parseFloat(user);
  const correctNum = parseFloat(correct);
  const bothNumeric = !isNaN(userNum) && !isNaN(correctNum);

  return bothNumeric ? Math.abs(userNum - correctNum) < 0.01 : user === correct;
}

function countCorrectAnswers(data) {
  let correctCount = 0;
  let resultsHTML = "";

  for (const q of questions) {
    if (q.type != "info") {
      let userAnswer = (data.answers[q.id] || "")
        .toString()
        .trim()
        .toLowerCase();

      let correctAnswer = "";
      try {
        correctAnswer = q.correct || "".trim().toLowerCase();
      } catch {
        correctAnswer = (q.correct || "").toString().trim().toLowerCase();
      }

      userAnswer = userAnswer.replace(",", ".");
      correctAnswer = correctAnswer.replace(",", ".");

      const userNum = parseFloat(userAnswer);
      const correctNum = parseFloat(correctAnswer);
      const bothNumeric = !isNaN(userNum) && !isNaN(correctNum);
      const isCorrect = validateAnswer(userAnswer, q);
      if (isCorrect) correctCount++;

      resultsHTML += `
            `;
    }
  }

  return { correctCount, resultsHTML };
}

function setAnswers(data) {
  if (!data) return;

  document.getElementById("studentName").value = data.studentName || "";
  document.getElementById("studentSurName").value = data.studentSurName || "";
  document.getElementById("contactEmail").value = data.contactEmail || "";
  document.getElementById("consent").checked = !!data.consent;

  questions.forEach((q) => {
    const val = data.answers?.[q.id];

    if (!val) return;

    if (q.type === "short") {
      document.getElementById(`q_${q.id}`).value = val;
    } else if (q.type === "options") {
      const radio = document.querySelector(
        `input[name="q_${q.id}"][value="${val}"]`
      );
      if (radio) radio.checked = true;
    } else if (q.type === "short-fraction") {
      const [num, den] = val.split("/");
      document.getElementById(`q_${q.id}_num`).value = num || "";
      document.getElementById(`q_${q.id}_den`).value = den || "";
    } else if (q.type === "mixed-fraction") {
      const parts = val.split(" ");
      const intPart = parts[0];
      const frac = parts[1] || "";
      const [num, den] = frac.split("/") || ["", ""];

      document.getElementById(`q_${q.id}_int`).value = intPart || "";
      document.getElementById(`q_${q.id}_num`).value = num || "";
      document.getElementById(`q_${q.id}_den`).value = den || "";
    }
  });
}

async function saveLocal() {
  const data = await getAnswers();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  toast("Сохранено в черновик");
}

async function loadLocal() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      const saved = JSON.parse(raw);
      setAnswers(saved);
      await updateProgress();

      toast("Черновик загружен");
    } catch (e) {
      console.error("Ошибка при загрузке черновика", e);
    }
  }
}

function clearLocal() {
  localStorage.removeItem(STORAGE_KEY);
}

async function updateProgress() {
  const data = await getAnswers();

  let filled = 0;
  const answerableQuestions = questions.filter(
    (q) => q.type && q.type !== "info"
  );
  answerableQuestions.forEach((q) => {
    const v = data.answers[q.id];
    if (q.type === "group") {
      if (Array.isArray(v) && v.some((x) => x && x.length > 0)) filled++;
    } else {
      if (v && v.length > 0) filled++;
    }
  });

  const pct = Math.round((filled / answerableQuestions.length) * 100);

  bar.style.width = pct + "%";

  progressText.textContent = `${filled}/${answerableQuestions.length}`;
  progressText2.textContent = `${filled} из ${answerableQuestions.length}`;

  const circleBar = document.querySelector(".progress-circle .bar");
  if (circleBar) {
    circleBar.style.strokeDashoffset = 100 - pct;
  }
}

document.getElementById("saveBtn").addEventListener("click", saveLocal);
[
  "studentName",
  "studentSurName",
  "contactEmail",
  "consent",
  "timeInput",
].forEach((id) => {
  document.getElementById(id).addEventListener("input", () => {
    updateProgress();
  });
});
document.getElementById("questions").addEventListener("input", () => {
  updateProgress();
});

const timeInput = document.getElementById("timeInput");
const timeLeft = document.getElementById("timeLeft");
const timerEl = document.getElementById("timer");
let totalSec = (+timeInput.value || 40) * 60;
let leftSec = totalSec;
let ticking = null;
function format(s) {
  const m = Math.floor(s / 60)
    .toString()
    .padStart(2, "0");
  const sec = Math.floor(s % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${sec}`;
}
function setDisplays() {
  timeLeft.textContent = format(leftSec);
  timerEl.textContent = format(leftSec);
}
function start() {
  if (ticking) return;
  ticking = setInterval(() => {
    leftSec--;
    setDisplays();
    if (leftSec <= 0) {
      clearInterval(ticking);
      ticking = null;
      alert("Время вышло. Можешь отправить текущие ответы.");
    }
  }, 1000);
}
function pause() {
  clearInterval(ticking);
  ticking = null;
}
function resetTimer() {
  pause();
  totalSec = (+timeInput.value || 40) * 60;
  leftSec = totalSec;
  setDisplays();
}
document.getElementById("startTimer").addEventListener("click", start);
document.getElementById("pauseTimer").addEventListener("click", pause);
document.getElementById("resetTimer").addEventListener("click", resetTimer);
timeInput.addEventListener("input", resetTimer);
setDisplays();

function renderPreview() {
  const data = getAnswers();
  const box = document.getElementById("preview");
  const rows = questions
    .map((q) => {
      const val = data.answers[q.id];
      const human =
        q.type === "group"
          ? Array.isArray(val)
            ? val.map((x, i) => `${q.fields[i].k} ${x || "—"}`).join("<br>")
            : "—"
          : val || "—";
      return `<tr>
                                                    <td class="mono" style="padding:10px 12px;border-bottom:1px solid var(--border);vertical-align:top;width:48px">${
                                                      q.id
                                                    }</td>
                                                    <td style="padding:10px 12px;border-bottom:1px solid var(--border);vertical-align:top">${
                                                      q.text
                                                    }${
        q.img ? "<br><span class='note'>[с иллюстрацией]</span>" : ""
      }</td>
                                                    <td style="padding:10px 12px;border-bottom:1px solid var(--border);vertical-align:top"><div>${human}</div></td>
                                                  </tr>`;
    })
    .join("");
  box.innerHTML = `
                                                  <h2>Предварительный просмотр</h2>
                                                  <p class="hint">Проверь перед отправкой. Личные данные будут видны только преподавателю.</p>
                                                  <table style="width:100%;border-collapse:collapse">
                                                    <thead>
                                                      <tr>
                                                        <th style="text-align:left;padding:6px 12px;border-bottom:1px solid var(--border)">№</th>
                                                        <th style="text-align:left;padding:6px 12px;border-bottom:1px solid var(--border)">Вопрос</th>
                                                        <th style="text-align:left;padding:6px 12px;border-bottom:1px solid var(--border)">Ответ</th>
                                                      </tr>
                                                    </thead>
                                                    <tbody>${rows}</tbody>
                                                  </table>
                                                `;
  box.style.display = "block";
  window.scrollTo({ top: box.offsetTop - 80, behavior: "smooth" });
}

function composeEmailText(data) {
  const head = `Имя: ${data.studentName || "—"}\nФамилия: ${
    data.studentSurName || "—"
  }\nEmail ученика/родителя: ${data.contactEmail || "—"}\nСогласие: ${
    data.consent ? "да" : "нет"
  }\nВремя: ${new Date().toLocaleString()}\n\nОтветы:\n`;
  const body = questions
    .map((q) => {
      const v = data.answers[q.id];
      if (q.type === "group") {
        return `${q.id}. ${q.text}\n  - ${q.fields[0].k} ${
          v?.[0] || "—"
        }\n  - ${q.fields[1].k} ${v?.[1] || "—"}\n  - ${q.fields[2].k} ${
          v?.[2] || "—"
        }`;
      } else {
        return `${q.id}. ${q.text}\n  Ответ: ${v || "—"}`;
      }
    })
    .join("\n\n");
  return head + body;
}

async function sendEmail() {
  const data = await getAnswers();

  if (!data.studentName || !data.studentSurName) {
    toast("Введите имя и фамилию 👆", true);
    return;
  }
  const answerableQuestions = questions.filter((q) => q.type !== "info");

  const subject = `Диагностика 7 кл — ${data.studentName} ${data.studentSurName}`;
  const { correctCount } = countCorrectAnswers(data);
  const spentSec = totalSec - leftSec;
  const spentMin = Math.round(spentSec / 60);
  const message = `
      <div style="font-family:Inter,sans-serif;color:#3c2a1e">
        <h2>Диагностика 7 класс</h2>
        <p><b>Имя:</b> ${data.studentName}<br>
        <b>Фамилия:</b> ${data.studentSurName}<br>
        <b>Дата:</b> ${new Date().toLocaleString()}<br>
           <b>Затрачено времени:</b> ${spentMin} мин<br>
        <b>Верных ответов:</b> ${correctCount} из
              ${answerableQuestions.length}</p>
        <hr>
        <h3>Ответы:</h3>
        ${questions
          .filter((q) => q.type !== "info")
          .map((q) => {
            const userAnswer = (data.answers[q.id] || "").toString().trim();
            const correct = q.correctEncoded
              ? q.correctEncoded.trim()
              : (q.correct || "").toString().trim();

            const normUser = userAnswer.replace(",", ".");
            const normCorrect = correct.replace(",", ".");
            const bothNumeric =
              !isNaN(parseFloat(normUser)) && !isNaN(parseFloat(normCorrect));
            const isCorrect = bothNumeric
              ? Math.abs(parseFloat(normUser) - parseFloat(normCorrect)) < 0.01
              : normUser === normCorrect;

            return `
            <p>
              <b>${q.id}.</b>
              ${userAnswer || "—"}
              (Правильный ответ: <b>${correct || "—"})</b>
              ${isCorrect ? "✅ Верно" : "❌ Неверно"}
            </p>`;
          })
          .join("")}
        <hr>
        <h3>Фото решений второй части:</h3>
        ${data.photoHTML || "<p>Без фото</p>"}
      </div>
      `;

  try {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      to_email: TO_EMAIL,
      subject,
      message_html: message,
    });
    toast("Отправлено! 📩");
  } catch (e) {
    console.error("EmailJS error", e);
    toast("Ошибка при отправке: " + (e?.text || e?.message || e), true);
  }
}

function toast(msg, isError = false) {
  let t = document.createElement("div");
  t.textContent = msg;
  t.className = "toast " + (isError ? "err" : "ok");
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2500);
}

loadLocal();
updateProgress();
const photosInput = document.getElementById("photos");
const preview = document.getElementById("preview");
const fileHint = document.getElementById("fileHint");

let selectedFiles = [];

photosInput.addEventListener("change", function () {
  const newFiles = Array.from(photosInput.files);

  newFiles.forEach((file) => {
    const duplicate = selectedFiles.some(
      (f) => f.name === file.name && f.size === file.size
    );
    if (!duplicate) {
      selectedFiles.push(file);
      addPreviewItem(file, selectedFiles.length - 1);
    }
  });

  updateFileHint();
  updateFileInput();
});

function addPreviewItem(file, index) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const item = document.createElement("div");
    item.className = "photo-item fade-in";

    const img = document.createElement("img");
    img.src = e.target.result;

    const removeBtn = document.createElement("button");
    removeBtn.className = "photo-remove";
    removeBtn.innerHTML = "✕";
    removeBtn.title = "Удалить фото";

    removeBtn.addEventListener("click", () => {
      item.classList.add("fade-out");
      setTimeout(() => {
        selectedFiles.splice(index, 1);
        item.remove();
        updateFileInput();
        updateFileHint();
      }, 250);
    });

    item.appendChild(img);
    item.appendChild(removeBtn);
    preview.appendChild(item);
  };
  reader.readAsDataURL(file);
}

function updateFileInput() {
  const dt = new DataTransfer();
  selectedFiles.forEach((f) => dt.items.add(f));
  photosInput.files = dt.files;
}

function updateFileHint() {
  if (selectedFiles.length === 0) {
    fileHint.textContent = "Файлы не выбраны";
  } else {
    fileHint.textContent = `Выбрано файлов: ${selectedFiles.length}`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submitBtn");
  const saveBtn = document.getElementById("saveBtn");
  const resetBtn = document.getElementById("resetBtn");
  const reviewBtn = document.getElementById("reviewBtn");
  const timeInput = document.getElementById("timeInput");
  const questionsBox = document.getElementById("questions");

  if (window.emailjs && USE_EMAILJS) {
    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    } catch (err) {
      console.error("❌ Ошибка инициализации EmailJS:", err);
    }
  } else {
    console.warn("⚠️ EmailJS не найден — проверь подключение CDN в <head>.");
  }

  if (submitBtn) {
    submitBtn.addEventListener("click", async () => {
      await sendEmail();
    });
  }
  if (saveBtn) saveBtn.addEventListener("click", saveLocal);
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Очистить все ответы и сбросить форму?")) {
        document.querySelector("form")?.reset();
        localStorage.removeItem(STORAGE_KEY);
        window.location.reload();
      }
    });
  }

  if (reviewBtn) reviewBtn.addEventListener("click", renderPreview);

  [
    "studentName",
    "studentSurName",
    "contactEmail",
    "consent",
    "timeInput",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", updateProgress);
  });

  if (questionsBox) questionsBox.addEventListener("input", updateProgress);
  if (timeInput)
    timeInput.addEventListener("input", () => {
      resetTimer();
    });

  setDisplays?.();
  updateProgress?.();
  loadLocal?.();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
    e.preventDefault();
    alert("👀 Просмотр кода отключён!");
  }
});

document.getElementById("timeLeft").addEventListener("click", () => {
  if (ticking) {
    pause();
  } else {
    start();
  }
});
