/* ==========================================================================
   DevToolsGuard.js
   Menonaktifkan klik kanan dan shortcut umum untuk membuka DevTools.
   Catatan: ini hanya mempersulit casual-view-source, bukan security control.
   ========================================================================== */

class DevToolsGuard {
  enable() {
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.addEventListener('keydown', (event) => {
      const isBlockedShortcut =
        event.key === 'F12' ||
        (event.ctrlKey && event.shiftKey && ['I', 'J', 'C'].includes(event.key)) ||
        (event.ctrlKey && event.key === 'u');

      if (isBlockedShortcut) event.preventDefault();
    });
  }
}
