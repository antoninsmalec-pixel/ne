// Přepínání lekcí
function openLesson(lessonNumber) {
  document.getElementById("courses").style.display = "none";
  document.querySelectorAll(".lesson").forEach(l => l.style.display = "none");
  document.getElementById("lesson" + lessonNumber).style.display = "block";
}

function backToCourses() {
  document.getElementById("courses").style.display = "block";
  document.querySelectorAll(".lesson").forEach(l => l.style.display = "none");
}

// Spuštění Python kódu přes Pyodide
async function runCode(textareaId, outputId) {
  let pyodide = await loadPyodide();
  let code = document.getElementById(textareaId).value;
  try {
    let result = await pyodide.runPythonAsync(code);
    document.getElementById(outputId).textContent = result;
  } catch(e) {
    document.getElementById(outputId).textContent = e;
  }
}
