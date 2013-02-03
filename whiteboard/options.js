// Save this script as `options.js`

// Saves options to localStorage.
function save_options() {
  var time = document.getElementById("timeout");
  var timeout = $(time).val();
  chrome.storage.sync.set({'session_timeout': timeout});
  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  chrome.storage.sync.get('session_timeout',function(timeout){
    timeout = timeout["session_timeout"];
  if (!timeout) {
    return;
  }
  var input = document.getElementById("timeout");
  $(input).val(timeout);
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);