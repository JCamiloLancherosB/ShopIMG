// main.js
const { app, BrowserWindow } = require('electron');

function crearVentana() {
    const ventana = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Cargar el archivo HTML de la interfaz de usuario
    ventana.loadFile('index.html');
}

// Crear la ventana cuando la aplicación esté lista
app.whenReady().then(crearVentana);

// Salir cuando todas las ventanas estén cerradas, excepto en macOS
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Reactivar la aplicación en macOS cuando se haga clic en el ícono del dock
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        crearVentana();
    }
});
