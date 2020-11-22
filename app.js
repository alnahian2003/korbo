/* MADE WITH LOVE BY AL NAHIAN | Portfolio: https://alnahian2003.github.io/me | Behance: https://behance.net/alnahian2003 | Github: https://github.com/alnahian2003 */

// Main Function
let tasker = {
  construct: function () {
    tasker.selectElements();
    tasker.bindEvents();
    tasker.scanTaskList();
  },
  selectElements: function () {
    this.taskInput = document.getElementById("input");
    this.taskList = document.getElementById("tasksContainer");
    this.taskListChildren = this.taskList.children;
    this.submitBtn = document.getElementById("submit");
  },
  buildTask: function () {
    let taskListItem,
      taskMarkContainer,
      taskCompleted,
      taskValueContainer,
      taskValue,
      taskDeleteContainer,
      taskDelete;
    taskListItem = document.createElement("li");

    // chekmark
    taskMarkContainer = document.createElement("span");
    taskMarkContainer.setAttribute("class", "mark");

    // New Check Box Added Instead an Icon in v1.1
    taskCompleted = document.createElement("input");
    taskCompleted.setAttribute("type", "checkbox");
    taskCompleted.setAttribute("class", "checkbox");

    taskMarkContainer.appendChild(taskCompleted);

    // task value
    taskValueContainer = document.createElement("div");
    taskValueContainer.setAttribute("class", "list");
    taskValue = document.createElement("p");
    taskValue.innerHTML = this.taskInput.value;
    taskValueContainer.appendChild(taskValue);

    // delete
    taskDeleteContainer = document.createElement("span");
    taskDeleteContainer.setAttribute("class", "delete");
    taskDelete = document.createElement("i");
    taskDelete.setAttribute("class", "las la-trash-alt");
    taskDeleteContainer.appendChild(taskDelete);

    // append elementS to tasklist
    taskListItem.appendChild(taskMarkContainer);
    taskListItem.appendChild(taskValueContainer);
    taskListItem.appendChild(taskDeleteContainer);

    // add task to tasklist
    this.taskList.appendChild(taskListItem);
  },

  addTask: function () {
    let taskValue = this.taskInput.value;
    const alertMessage = document.querySelector(".alert");
    const placeholder = document.querySelector(".placeholder");
    if (taskValue === "") {
      alertMessage.style.display = "block";
      // Hide Alert Automatically After 2 second
      function hideAlert() {
        alertMessage.style.display = "none";
      }
      setTimeout(hideAlert, 2000);
    } else {
      // Build the task
      this.buildTask();
      this.taskInput.value = "";

      // Hide the placeholder on any value inputs
      placeholder.style.display = "none";

      // Hide Alert Message
      alertMessage.style.display = "none";

      // Scan the List
      this.scanTaskList();
    }
  },
  enterKey: function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      this.addTask();
    }
  },
  bindEvents: function () {
    // add click event to button
    this.submitBtn.onclick = this.addTask.bind(this);

    // add enter key task textbox
    this.taskInput.onkeypress = this.enterKey.bind(this);
  },
  scanTaskList: function () {
    let taskListItem, markIcon, deleteIcon;

    // loop through all list elements
    for (i = 0; i < this.taskListChildren.length; i++) {
      taskListItem = this.taskListChildren[i];

      // select markIcon and delete icon
      markIcon = taskListItem.getElementsByClassName("checkbox")[0];
      deleteIcon = taskListItem.getElementsByClassName("delete")[0];

      // bind onclick event to the markIcon
      markIcon.onclick = this.completeTask.bind(this, taskListItem, markIcon);

      // bind onclick event to the markIcon
      deleteIcon.onclick = this.deleteTask.bind(this, i);
    }
  },
  completeTask: function (taskListItem, markIcon) {
    if (markIcon.checked) {
      taskListItem.style.textDecoration = "line-through";
    } else {
      taskListItem.style.textDecoration = "none";
    }
  },
  deleteTask: function (i) {
    this.taskListChildren[i].remove();
    this.scanTaskList();
  },
};

/* MADE WITH LOVE BY AL NAHIAN | Portfolio: https://alnahian2003.github.io/me | Behance: https://behance.net/alnahian2003 | Github: https://github.com/alnahian2003 */

// Adding Task Input Field Toggling Function
var formContainer = document.querySelector(".form-container");
var addTask = document.querySelector(".add svg");
var showInput = false;

addTask.addEventListener("click", function () {
  showInput = !showInput;
  if (showInput === true) {
    formContainer.style.display = "block";
    // Auto Focus on This button Click
    document.querySelector("#input").focus();
  } else {
    formContainer.style.display = "none";
  }
});

// Display Today's Date
var today = new Date();

var date =
  today.getDate() +
  " " +
  today.toLocaleString("default", {
    month: "short",
  }) +
  ", " +
  today.getFullYear();

// Display Current Time with AM or PM
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
  console.log("Working");
}
setInterval(function () {
  document.querySelector(".date").innerHTML = date;
  document.querySelector(".time").innerHTML = formatAMPM(new Date());
}, 100);

/* MADE WITH LOVE BY AL NAHIAN | Portfolio: https://alnahian2003.github.io/me | Behance: https://behance.net/alnahian2003 | Github: https://github.com/alnahian2003 */
