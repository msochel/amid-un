// ./main.js
const {app, BrowserWindow} = require('electron')
var path = require('path')

let win = null;

function createWindow() {
  // Initialize the window to our specified dimensions
  win = new BrowserWindow({
    width: 1281,
    height: 800,
    icon: path.join(__dirname, 'assets/icons/icon.ico'),
  });

  // Specify entry point
  win.loadURL('http://localhost:3000');

  // Show dev tools
  // Remove this line before distributing
  win.webContents.openDevTools()

  // Remove window once app is closed
  win.on('closed', function () {
    win = null;
  });
}


app.on('ready', function () {

  createWindow();

});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
